'use client';
import { signOut, useSession } from 'next-auth/react';
import { Button } from 'flowbite-react';

export default function MemberComponent() {
    const { data: session, status } = useSession();
    return (
        <>
            {status === 'authenticated' && (
                <div id={'container'}>
                    <div className={'titleArea'}>
                        <h2>마이페이지</h2>
                    </div>
                    <div className={'mypage-wr'}>
                        <div className={'sec_01'}>
                            <div>
                                <span>{session?.user.name} 님은</span>
                                <br />
                                <span>[일반회원] 입니다.</span>
                            </div>
                            <Button
                                onClick={async () => {
                                    await signOut({
                                        callbackUrl: '/',
                                        redirect: true,
                                    });
                                }}
                                className={'w-full'}
                                color={'dark'}
                            >
                                로그아웃
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
