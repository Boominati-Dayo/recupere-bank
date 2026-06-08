import { WalletContextProvider } from '@/contexts/WalletContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { LoadingProvider } from '@/contexts/LoadingContext';
import LoadingOverlay from '@/components/LoadingOverlay';
import ConditionalLayout from '@/components/ConditionalLayout';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata = {
  title: 'Nexus Banking | Secure Private Banking & Wealth Management',
  description: 'Secure your capital with Nexus Banking. We provide elite private banking services alongside asset recovery and wealth management to protect and grow your wealth.',
  keywords: ['private banking', 'secure banking', 'wealth management', 'asset recovery', 'financial services', 'investment banking'],
  authors: [{ name: 'Nexus Banking' }],
  creator: 'Nexus Banking',
  publisher: 'Nexus Banking',
  metadataBase: new URL('https://nexusbanking.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://nexusbanking.com',
    siteName: 'Nexus Banking',
    title: 'Nexus Banking - Secure Banking & Wealth Management',
    description: 'Elite private banking and wealth management. Protect your capital with Swiss-level security.',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Nexus Banking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Banking - Absolute Wealth Security',
    description: 'Secure private banking and wealth management for global capital protection.',
    images: ['/thumbnail.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <LoadingProvider>
          <AuthProvider>
            <WalletContextProvider>
              <ConditionalLayout>
                {children}
              </ConditionalLayout>
              <LoadingOverlay />
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                  },
                  success: {
                    duration: 3000,
                    iconTheme: {
                      primary: '#10B981',
                      secondary: '#fff',
                    },
                  },
                  error: {
                    duration: 5000,
                    iconTheme: {
                      primary: '#EF4444',
                      secondary: '#fff',
                    },
                  },
                }}
              />
            </WalletContextProvider>
          </AuthProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
