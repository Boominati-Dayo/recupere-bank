import { AuthProvider } from '@/contexts/AuthContext';
import { LoadingProvider } from '@/contexts/LoadingContext';
import { PinPromptProvider } from '@/components/dashboard/PinPrompt';
import LoadingOverlay from '@/components/LoadingOverlay';
import ConditionalLayout from '@/components/ConditionalLayout';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata = {
  title: 'RecupereBank | Banking & Asset Recovery',
  description: 'RecupereBank combines a secure bank account with a legal team that recovers money lost to scams.',
  keywords: ['private banking', 'secure banking', 'wealth management', 'asset recovery', 'financial services', 'investment banking'],
  authors: [{ name: 'RecupereBank' }],
  creator: 'RecupereBank',
  publisher: 'RecupereBank',
  metadataBase: new URL('https://recuperebank.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://recuperebank.com',
    siteName: 'RecupereBank',
    title: 'RecupereBank - Banking & Asset Recovery',
    description: 'A secure bank account and an expert legal team working together to recover money lost to scams.',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'RecupereBank',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RecupereBank - Banking & Asset Recovery',
    description: 'A secure bank account and an expert legal team working together to recover money lost to scams.',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gray-50">
        <Script id="webfonts" strategy="lazyOnload">
          {`(function(){var d=document;var l=d.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap';d.head.appendChild(l);})();`}
        </Script>
        <LoadingProvider>
          <AuthProvider>
            <PinPromptProvider>
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
            </PinPromptProvider>
          </AuthProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
