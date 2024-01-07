'use client';

import './globals.scss';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeModeScript } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';

import Footer from '@/component/footer';
import Header from '@/component/header';
import Navigation from '@/component/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <SessionProvider>
        <html lang="ko">
          <head>
            <title>Adora</title>
            <ThemeModeScript />
          </head>
          <body>
            <div className={'pc_mo-wr'}>
              <div id={'mobile'}>
                <Header />
                <div
                  id={'wrap'}
                  className={pathname.startsWith('/auth') ? 'min-h-screen' : undefined}
                >
                  <div id={'container'}>
                    {children}
                    <Analytics />
                    <SpeedInsights />
                  </div>
                </div>
                <Footer />
                <Navigation />
              </div>
            </div>
          </body>
        </html>
      </SessionProvider>
    </>
  );
}
