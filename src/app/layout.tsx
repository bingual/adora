'use client';
import './globals.scss';
import { SessionProvider } from 'next-auth/react';
import { ThemeModeScript } from 'flowbite-react';
import Header from '@/component/header';
import Navigation from '@/component/navigation';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <html lang="ko">
                <head>
                    <title>Adora</title>
                    <ThemeModeScript />
                </head>
                <body className={'bg-[#f5f5f5] dark:bg-gray-800'}>
                    <div className={'flex justify-center'}>
                        <div
                            className={
                                'relative shadow-lg w-full max-w-[640px] bg-white dark:bg-gray-900'
                            }
                        >
                            <SessionProvider>
                                <Header />
                                <div className={'relative min-h-screen z-10'}>
                                    {children}
                                </div>
                                <Navigation />
                            </SessionProvider>
                        </div>
                    </div>
                </body>
            </html>
        </>
    );
}
