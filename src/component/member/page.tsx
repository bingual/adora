'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function MemberComponent() {
    const { data: session, status } = useSession();
    return (
        <>
            {status === 'authenticated' && (
                <div id={'container'}>
                    <div className={'titleArea'}>
                        <h2 className={'lg-text-color'}>마이페이지</h2>
                    </div>
                    <div className={'mypage-wr'}>
                        <div className={'sec_01'}>
                            <div>
                                <span className={'lg-text-color'}>
                                    {session?.user.name} 님은
                                </span>
                                <br />
                                <span className={'lg-text-color'}>
                                    [일반회원] 입니다.
                                </span>
                            </div>
                            <ul>
                                <li>
                                    <span>쿠폰</span>
                                    <p>
                                        <Link href={'#'}>0</Link>
                                    </p>
                                </li>
                                <li>
                                    <span>적립금</span>
                                    <p>
                                        <Link href={'#'}>0원</Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={'sec_02'}>
                            <div className={'title'}>
                                <h3>
                                    {'주문처리 현황 '}
                                    <span>(최근 3개월 기준)</span>
                                </h3>
                                <Link className={'btnNormal'} href={'#'}>
                                    취소교환반품 내역
                                </Link>
                            </div>
                            <ul>
                                <li>
                                    <p>입금전</p>
                                    <Link href={'#'}>0</Link>
                                </li>
                                <li>
                                    <p>배송준비중</p>
                                    <Link href={'#'}>0</Link>
                                </li>
                                <li>
                                    <p>배송중</p>
                                    <Link href={'#'}>0</Link>
                                </li>
                                <li>
                                    <p>배송완료</p>
                                    <Link href={'#'}>0</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={'sec_03'}>
                            <ul>
                                <li>
                                    <Link href={'#'}>주문내역 조회</Link>
                                </li>
                                <li>
                                    <Link href={'#'}>적립금 내역</Link>
                                </li>
                                <li>
                                    <Link href={'#'}>쿠폰 내역</Link>
                                </li>
                                <li>
                                    <Link href={'#'}>쿠폰</Link>
                                </li>
                                <li>
                                    <Link href={'#'}>최근 본 상품</Link>
                                </li>
                                <li>
                                    <Link href={'#'}>나의 위시리스트</Link>
                                </li>
                                <li>
                                    <Link href={'#'}>나의 게시글</Link>
                                </li>
                                <li>
                                    <Link href={'#'}>회원 정보 수정</Link>
                                </li>
                                <li>
                                    <Link href={'#'}>배송지 관리</Link>
                                </li>
                                <li>
                                    <button
                                        onClick={async () => {
                                            await signOut({
                                                callbackUrl: '/',
                                                redirect: true,
                                            });
                                        }}
                                    >
                                        로그 아웃
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
