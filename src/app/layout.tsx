'use client';
import './globals.scss';
import { SessionProvider } from 'next-auth/react';
import { ThemeModeScript } from 'flowbite-react';
import Header from '@/component/header';
import Navigation from '@/component/navigation';
import Footer from '@/component/footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <SessionProvider>
                <html lang="ko">
                    <head>
                        <title>Adora</title>
                        <ThemeModeScript />
                    </head>
                    <body>
                        <div className={'flex justify-center'}>
                            <div
                                className={
                                    'relative shadow-lg w-full max-w-[640px] bg-white dark:bg-gray-900'
                                }
                            >
                                <Header />
                                <div className={'relative min-h-screen z-10'}>
                                    {children}
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
