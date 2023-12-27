import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const [active, setActive] = useState(false);

    if (!pathname.startsWith('/auth')) {
        return (
            <footer id={'footer'}>
                <div className="area">
                    <div className="footer_left">
                        <p className="tit">고객센터 번호</p>
                        <span>브랜드마다 상이함</span>
                        <span>
                            <Link
                                style={{ fontWeight: 600, color: '#ff4000' }}
                                href="#"
                            >
                                여기
                            </Link>
                            를 참조
                        </span>
                    </div>
                    <div className="xans-element- xans-layout xans-layout-footer footer_right ">
                        <p className="tit">고객센터 영업시간</p>
                        <span>평일 10:00 ~ 19:00</span>
                        <span>점심 13:00 ~ 14:00</span>
                        <span>휴일 토/일/공휴일</span>
                        <span>오프라인:토/일 13:00~19:00</span>
                    </div>
                </div>
                <div className="footer_link">
                    <Link href="#">회사소개</Link>
                    <Link href="#">이용약관</Link>
                    <Link href="#">개인정보처리방침</Link>
                    <Link href="#">이용안내</Link>
                </div>
                <div className="xans-element- xans-layout xans-layout-footer info">
                    <span>
                        {'사업자명 : 주식회사 아도라 '}
                        <i
                            onClick={() => {
                                active ? setActive(false) : setActive(true);
                            }}
                            className={
                                active
                                    ? 'xi-angle-down-thin on'
                                    : 'xi-angle-down-thin'
                            }
                        ></i>
                    </span>
                    <br />
                    {active && (
                        <div>
                            <span>대표자명 : 아도라</span>
                            <br />
                            <span className="">
                                주소 : 1층, 2층 서울특별시 강남구 무슨로999길
                                99-9
                            </span>
                            <br />
                            <span>
                                통신판매업신고번호 : 제 2049-서울강남-02478 호
                            </span>
                            <br />
                            <span className="">
                                개인정보보호책임자 : 주식회사 아도라
                                <Link href="#">
                                    (commerce@adora-shop.vercel.app)
                                </Link>
                            </span>
                        </div>
                    )}
                    <p className="copyright">
                        Copyright 2023 ADORA All Rights Reserved.
                    </p>
                    <div className="sns_list">
                        <Link href="#" target="_blank">
                            <i className="xi-instagram"></i>
                        </Link>
                        <Link href="#" target="_blank">
                            <i className="xi-youtube-play"></i>
                        </Link>
                    </div>
                    <p>
                        고객님은 안전거래를 위해 현금 등으로 결제 시 저희
                        쇼핑몰에서 가입한 PG 사의 구매안전서비스를 이용하실 수
                        있습니다.
                    </p>
                </div>
            </footer>
        );
    }
}
