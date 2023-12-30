'use client';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const MainTab = () => {
        if (
            pathname === '/' ||
            pathname.startsWith('/discount') ||
            pathname.startsWith('/recommend') ||
            pathname.startsWith('/comingsoon') ||
            pathname.startsWith('/brand')
        ) {
            return (
                <div className="main-tab">
                    <ul>
                        <li className={pathname === '/' ? 'on' : undefined}>
                            <Link href="/">
                                <span>홈</span>
                            </Link>
                        </li>
                        <li
                            className={
                                pathname === '/discount' ? 'on' : undefined
                            }
                        >
                            <Link href={'/discount'}>
                                <span>할인</span>
                            </Link>
                        </li>
                        <li
                            className={
                                pathname === '/recommend' ? 'on' : undefined
                            }
                        >
                            <Link href={'/recommend'}>
                                <span>#PICK</span>
                            </Link>
                        </li>
                        <li
                            className={
                                pathname === '/comingsoon' ? 'on' : undefined
                            }
                        >
                            <Link href={'/comingsoon'}>
                                <span>커밍순</span>
                            </Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link href="#">*/}
                        {/*        <span className={'point'}>*/}
                        {/*            BLACK FRIDAY*/}
                        {/*        </span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <Link href="#">*/}
                        {/*        <span>콜라보</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li
                            className={pathname === '/brand' ? 'on' : undefined}
                        >
                            <Link href={'/brand'}>
                                <span>브랜드</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        }
    };

    return (
        <>
            <header id={'header'} className={'fixed'}>
                <div className={'header-wr'}>
                    <div className={'left-menu'}>
                        <ul>
                            <li>
                                <svg
                                    id={'search.svg'}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 21L7 17M14 17C10.134 17 7 13.866 7 10C7 6.13401 10.134 3 14 3C17.866 3 21 6.13401 21 10C21 13.866 17.866 17 14 17Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div className={'top-logo'}>
                        <Flowbite>
                            <DarkThemeToggle />
                        </Flowbite>
                    </div>
                    <div className={'right-menu'}>
                        <ul>
                            <li>
                                <Link href={'#'}>
                                    <svg
                                        id={'shopping-bag.svg'}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.0001 11V6C15.0001 5.20435 14.684 4.44129 14.1214 3.87868C13.5588 3.31607 12.7958 3 12.0001 3C11.2045 3 10.4414 3.31607 9.8788 3.87868C9.31619 4.44129 9.00012 5.20435 9.00012 6V11M18.9201 21H5.08012C4.94206 21.0004 4.80541 20.9722 4.67878 20.9172C4.55214 20.8622 4.43827 20.7816 4.34433 20.6804C4.25039 20.5793 4.17842 20.4597 4.13295 20.3294C4.08747 20.199 4.06949 20.0607 4.08012 19.923L5.00012 8H19.0001L19.9171 19.923C19.9277 20.0604 19.9098 20.1985 19.8645 20.3287C19.8192 20.4588 19.7475 20.5782 19.6539 20.6793C19.5603 20.7805 19.4468 20.8611 19.3205 20.9163C19.1942 20.9715 19.0579 21 18.9201 21Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <span>0</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <MainTab />
            </header>
        </>
    );
}
