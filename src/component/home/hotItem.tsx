'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function HomeHotItem() {
    const [hotItemList, setHotItemList] = useState(new Array(13).fill(0));
    return (
        <>
            <div className={'main-product-02'}>
                <div className={'ec-base-product'}>
                    <h1>🔥 지금 제일 핫한 아이템</h1>
                    <ul className={'prdList'}>
                        {hotItemList.map((res, idx) => {
                            return (
                                <li
                                    key={`anchorBoxId_${idx}`}
                                    id={`anchorBoxId_${idx}`}
                                >
                                    <div className="thumbnail">
                                        <div className="prdImg">
                                            <Link href="#">
                                                <Image
                                                    className={'w-full h-auto'}
                                                    src={`/home/hotItem/item_${
                                                        idx + 1
                                                    }.jpg`}
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    alt={
                                                        '디태처블 울 블레이저 [블랙]'
                                                    }
                                                />
                                                <div className="over-bg">
                                                    <Image
                                                        className={
                                                            'w-full h-auto'
                                                        }
                                                        src={`/home/hotItem/item_${
                                                            idx + 1
                                                        }.jpg`}
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        alt={
                                                            '디태처블 울 블레이저 [블랙]'
                                                        }
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="likeButton likePrd">
                                            <button type="button">
                                                <Image
                                                    className={'w-full h-auto'}
                                                    src={`/product/like.png`}
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    alt="..."
                                                />
                                            </button>
                                            <span>
                                                <span className="likePrdCount likePrdCount_856">
                                                    13
                                                </span>
                                            </span>
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
