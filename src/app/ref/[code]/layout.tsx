import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code: referralCode } = await params;

  const baseUrl = 'https://recuperebank.com';

  return {
    title: 'Join RecupereBank - Premium Investment Platform',
    description: `Start investing with RecupereBank using referral code ${referralCode}. Earn high returns on your investments with secure, reliable opportunities.`,
    openGraph: {
      type: 'website',
      url: `${baseUrl}/ref/${referralCode}`,
      siteName: 'RecupereBank',
      title: 'Join RecupereBank - Start Your Investment Journey',
      description: `Join RecupereBank and start earning with referral code ${referralCode}. Secure investment opportunities with industry-leading returns.`,
      images: [
        {
          url: `${baseUrl}/thumbnail.png`,
          width: 1200,
          height: 630,
          alt: 'RecupereBank',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Join RecupereBank - Start Your Investment Journey',
      description: `Join RecupereBank with referral code ${referralCode} and start earning high returns.`,
      images: [`${baseUrl}/thumbnail.png`],
    },
  };
}

export default async function ReferralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

