'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function RecommendMain() {
    const [recommendItemList, setRecommendItemList] = useState(
        new Array(12).fill(0),
    );
    const [pickItemList, setPickItemList] = useState(new Array(12).fill(0));
    return (
        <>
            <div className={'recommend2-wr'}>
                <div className="title">
                    <p>ADORA PICK</p>
                    <h2>지금 사야하는 상품 랭킹</h2>
                </div>
                {recommendItemList.map((res, rIdx) => {
                    return (
                        <div key={`recommend_item_${rIdx}`} className={'item'}>
                            <h3>
                                <Link href="#">
                                    겨울 코디템
                                    <br />
                                    목도리 TOP12
                                </Link>
                            </h3>
                            <Swiper
                                className={'ec-base-product prdList'}
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: true,
                                }}
                                slidesPerView={2.4}
                                spaceBetween={10}
                                loop={true}
                                freeMode={true}
                            >
                                {pickItemList.map((res, pIdx) => {
                                    return (
                                        <SwiperSlide
                                            id={`anchorBoxId_${pIdx}`}
                                            key={`anchorBoxId_${pIdx}`}
                                        >
                                            <div className="thumbnail">
                                                <div className="prdImg">
                                                    <Link href={'#'}>
                                                        <Image
                                                            className={
                                                                'w-full h-auto'
                                                            }
                                                            src={`/home/recommend/item_${
                                                                pIdx + 1
                                                            }.jpg`}
                                                            width={0}
                                                            height={0}
                                                            sizes="100vw"
                                                            alt="..."
                                                        />
                                                        <div
                                                            className={
                                                                'over-bg'
                                                            }
                                                        >
                                                            <Image
                                                                className={
                                                                    'w-full h-auto'
                                                                }
                                                                src={`/home/recommend/item_${
                                                                    pIdx + 1
                                                                }.jpg`}
                                                                width={0}
                                                                height={0}
                                                                sizes="100vw"
                                                                priority={
                                                                    rIdx === 0
                                                                        ? true
                                                                        : rIdx ===
                                                                          1
                                                                }
                                                                alt="..."
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="likeButton likePrd">
                                                    <button type="button">
                                                        <Image
                                                            className={
                                                                'w-full h-auto'
                                                            }
                                                            src={`/product/like.png`}
                                                            width={0}
                                                            height={0}
                                                            sizes="100vw"
                                                            priority={
                                                                rIdx === 0
                                                                    ? true
                                                                    : rIdx === 1
                                                            }
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
                                            <div className={'description'}>
                                                <div className={'flex-wr'}>
                                                    <Link href={'#'}>
                                                        모더먼트
                                                    </Link>
                                                    <div className={'name'}>
                                                        <Link href={'#'}>
                                                            <span>
                                                                [UNISEX] 소프트
                                                                터치 숏 머플러
                                                                [베이지]
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="price-wr">
                                                        <p className="rate">
                                                            37%
                                                        </p>
                                                        <p className="price">
                                                            <span className="front unit">
                                                                ₩
                                                            </span>
                                                            16,900
                                                        </p>
                                                        <p className="origin_price">
                                                            <span className="front unit">
                                                                ₩
                                                            </span>
                                                            27,000
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
                                                                            13
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
                                                                        3
                                                                    </span>
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
