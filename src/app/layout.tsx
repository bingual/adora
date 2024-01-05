'use client';
import './globals.scss';
import { SessionProvider } from 'next-auth/react';
import { ThemeModeScript } from 'flowbite-react';
import Header from '@/component/header';
import Navigation from '@/component/navigation';
import Footer from '@/component/footer';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
                                    className={
                                        pathname.startsWith('/auth')
                                            ? 'min-h-screen'
                                            : undefined
                                    }
                                >
                                    <div id={'container'}>
                                        {
                                            <>
                                                {children}
                                                <Analytics />
                                                <SpeedInsights />
                                            </>
                                        }
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
