'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ShoppingMain() {
    const [brandItemList, setBrandItemList] = useState(new Array(28).fill(0));
    const [cateItemList, setCateItemList] = useState([
        '전체',
        '아우터',
        '상의',
        '하의',
        '신발',
        '악세서리',
        '그루밍',
    ]);
    const [hotItemList, setHotItemList] = useState(new Array(12).fill(0));
    return (
        <>
            <div className="shopping-wr">
                <div className={'brand-swiper-wr'}>
                    <div className="title-area">
                        <h2>BRAND</h2>
                        <Link href="/brand">
                            <span>브랜드 더보기</span>
                            <i className="xi-angle-right"></i>
                        </Link>
                    </div>
                    <Swiper slidesPerView={4.2} spaceBetween={36}>
                        {brandItemList.map((res, bIdx) => {
                            return (
                                <SwiperSlide key={`brand-swiper-wr_${bIdx}`}>
                                    <Link href={'#'}>
                                        <div className="img-wr">
                                            <Image
                                                className={'w-full h-auto'}
                                                src={`/brand/brandThum/item_${
                                                    bIdx + 1
                                                }.jpg`}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                priority={true}
                                                alt={'...'}
                                            />
                                        </div>
                                        <div className="text-wr">
                                            <p>메르고</p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div>
                    <div className="category-title">
                        <h2>상품랭킹</h2>
                    </div>
                    <Swiper
                        className={'rank-category'}
                        slidesPerView={6.1}
                        spaceBetween={10}
                    >
                        {cateItemList.map((res, cIdx) => {
                            return (
                                <SwiperSlide
                                    key={`tap-swiper-wr_${cIdx}`}
                                    className={
                                        cIdx === 0 ? 'selected' : undefined
                                    }
                                >
                                    <Link href="#">{res}</Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className={'ec-base-product'}>
                    <ul className={'prdList'}>
                        {hotItemList.map((res, idx) => {
                            return (
                                <li
                                    key={`anchorBoxId_${idx}`}
                                    id={`anchorBoxId_${idx}`}
                                >
                                    <div className="thumbnail">
                                        <div className="rank-num">
                                            {idx + 1}
                                        </div>
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
                                                    priority={true}
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
                                                    priority={true}
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
                                                <p className="origin_price text-xs">
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
