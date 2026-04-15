import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { Quote } from '@/components/common/Quote';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Analytics } from '@vercel/analytics/next';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
import localFont from 'next/font/local';

import './globals.css';

const hankenGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/HankenGrotesk-Variable.ttf',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HankenGrotesk-Italic-Variable.ttf',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-hanken',
});

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${hankenGrotesk.className} antialiased`}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactLenis root>
              <Navbar />
              {children}
              <Analytics />
              <OnekoCat />
              <Quote />
              <Footer />
              <UmamiAnalytics />
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
