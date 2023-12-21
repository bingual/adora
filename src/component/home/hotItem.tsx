'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function HomeHotItem() {
    const [hotItemCount, setHotItemCount] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
    return (
        <>
            {/*지금 제일 핫한 아이템*/}
            <div className={'main-product-02'}>
                <div className={'ec-base-product'}>
                    <h1>🔥 지금 제일 핫한 아이템</h1>
                    <ul className={'prdList'}>
                        {hotItemCount.map((res, idx) => {
                            return (
                                <li key={idx} id={`anchorBoxId_${idx}`}>
                                    <div className="thumbnail">
                                        <div className="prdImg">
                                            <Link href="#">
                                                <Image
                                                    src={'/home/hotItem1.jpg'}
                                                    width={1920}
                                                    height={1920}
                                                    alt={
                                                        '디태처블 울 블레이저 [블랙]'
                                                    }
                                                />
                                                <div className="over-bg">
                                                    <Image
                                                        src={
                                                            '/home/hotItem1.jpg'
                                                        }
                                                        width={1920}
                                                        height={1920}
                                                        alt={
                                                            '디태처블 울 블레이저 [블랙]'
                                                        }
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <div className="flex-wr">
                                            <Link href="#">인사일런스</Link>
                                            <div className="name">
                                                <Link href="#">
                                                    <span>
                                                        디태처블 울 블레이저
                                                        [블랙]
                                                        <br />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="price-wr">
                                                <p className="rate">55%</p>
                                                <p className="price">
                                                    <span className="front unit">
                                                        ₩
                                                    </span>
                                                    89,000
                                                </p>
                                                <p className="origin_price">
                                                    <span className="front unit">
                                                        ₩
                                                    </span>
                                                    199,000
                                                </p>
                                            </div>
                                            <div className="count">
                                                <div className="like_wrap">
                                                    <div className="likeButton likePrd likePrd_353">
                                                        <button type="button">
                                                            {/*<picture>*/}
                                                            {/*    <img*/}
                                                            {/*        src="/web/upload/icon_202311301421409400.png"*/}
                                                            {/*        className="likePrdIcon"*/}
                                                            {/*        alt="좋아요 등록 전"*/}
                                                            {/*    />*/}
                                                            {/*</picture>*/}
                                                            <span>
                                                                <span className="likePrdCount likePrdCount_353">
                                                                    154
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="review_wrap">
                                                    <Link href="#">
                                                        <span className="alpha_module_count_container">
                                                            <i className="xi-message-o"></i>
                                                            <span className="alpha_module_count">
                                                                6
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
