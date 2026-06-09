import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code: referralCode } = await params;

  const baseUrl = 'https://nexusbanking.com';

  return {
    title: 'Join Nexus - Premium Investment Platform',
    description: `Start investing with Nexus using referral code ${referralCode}. Earn high returns on your investments with secure, reliable opportunities.`,
    openGraph: {
      type: 'website',
      url: `${baseUrl}/ref/${referralCode}`,
      siteName: 'Nexus Banking',
      title: 'Join Nexus - Start Your Investment Journey',
      description: `Join Nexus and start earning with referral code ${referralCode}. Secure investment opportunities with industry-leading returns.`,
      images: [
        {
          url: `${baseUrl}/thumbnail.png`,
          width: 1200,
          height: 630,
          alt: 'Nexus Banking',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Join Nexus - Start Your Investment Journey',
      description: `Join Nexus with referral code ${referralCode} and start earning high returns.`,
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

