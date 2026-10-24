import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { requireAdmin } from '@/middleware/auth';
import { sendEmail, emailTemplates } from '@/lib/email';
import { ObjectId } from 'mongodb';

export const GET = requireAdmin(async (request, context) => {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'all';
    const priority = searchParams.get('priority') || 'all';
    
    const db = await getDb();
    const supportMessagesCollection = db.collection('supportMessages');

    const query: Record<string, string> = {};
    
    if (status !== 'all') {
      query.status = status;
    }
    
    if (priority !== 'all') {
      query.priority = priority;
    }

    const messages = await supportMessagesCollection
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      data: messages
    });
  } catch (error) {
    console.error('Error fetching support messages:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
});

export const PUT = requireAdmin(async (request, context) => {
  try {
    const { messageId, status, adminReply } = await request.json();
    const adminId = request.user!.id;
    const adminEmail = request.user!.email;

    if (!messageId) {
      return NextResponse.json(
        { success: false, error: 'Message ID is required' },
        { status: 400 }
      );
    }

    const db = await getDb();
    const supportMessagesCollection = db.collection('supportMessages');

    const setData: Record<string, unknown> = {
      updatedAt: new Date()
    };

    if (status) {
      setData.status = status;
    }

    const updateOperators: Record<string, unknown> = {
      $set: setData
    };

    if (adminReply) {
      updateOperators.$push = {
        adminReplies: {
          adminId,
          adminEmail,
          reply: adminReply,
          createdAt: new Date()
        }
      };
    }

    const result = await supportMessagesCollection.updateOne(
      { _id: new ObjectId(messageId) },
      updateOperators
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Support message not found' },
        { status: 404 }
      );
    }

    const updatedMessage = await supportMessagesCollection.findOne({
      _id: new ObjectId(messageId)
    });

    // Notifications and email are best-effort: a failure here must not make the
    // reply look like it was not saved.
    if (adminReply && updatedMessage) {
      try {
        const usersCollection = db.collection('users');
        const user =
          updatedMessage.userId && ObjectId.isValid(updatedMessage.userId)
            ? await usersCollection.findOne({ _id: new ObjectId(updatedMessage.userId) })
            : null;

        const notificationsCollection = db.collection('notifications');
        await notificationsCollection.insertOne({
          title: 'Support Reply',
          message: `Admin replied to your support request: "${updatedMessage.subject}"\n\nReply: ${adminReply}`,
          type: 'individual',
          recipients: [updatedMessage.userId],
          sentBy: 'system',
          metadata: {
            supportMessageId: messageId,
            adminId,
            adminEmail
          },
          sentAt: new Date(),
          read: false
        });

        // Send Email
        if (user && user.email) {
          const emailTemplate = emailTemplates.supportResponse(
            user.firstName || 'Participant',
            updatedMessage.subject,
            adminReply
          );

          await sendEmail({
            to: user.email,
            ...emailTemplate
          });
        }
      } catch (notifyError) {
        console.error('Support reply saved, but notification/email failed:', notifyError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Support message updated successfully',
      data: updatedMessage
    });
  } catch (error) {
    console.error('Error updating support message:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
});
