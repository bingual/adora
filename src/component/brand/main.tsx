'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function BrandMain() {
    const [brandItemList, setBrandItemList] = useState(new Array(28).fill(0));
    const [prodItemList, setProdItemList] = useState(new Array(5).fill(0));
    return (
        <>
            <div className={'brand-wr'}>
                <div className="title-area">
                    <h2>BRAND</h2>
                </div>
                <div className={'brand-list-area'}>
                    {brandItemList.map((res, bIdx) => {
                        return (
                            <div
                                key={`brand-item_${bIdx}`}
                                className={'brand-item'}
                            >
                                <div className={'brand-title'}>
                                    <Link href={'#'}>
                                        <div className="left-area">
                                            <div className="brand-thum">
                                                <Image
                                                    className={'w-full h-auto'}
                                                    src={`/brand/brandThum/item_${
                                                        bIdx + 1
                                                    }.jpg`}
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    priority={
                                                        bIdx === 0
                                                            ? true
                                                            : bIdx === 1
                                                              ? true
                                                              : bIdx === 2
                                                    }
                                                    alt={'...'}
                                                />
                                            </div>
                                        </div>
                                        <div className="right-menu">
                                            <div className="brand-name">
                                                <h3>메르고</h3>
                                                <p>캐주얼ㆍ모던</p>
                                            </div>
                                            <span />
                                        </div>
                                    </Link>
                                </div>
                                <Swiper
                                    className="brand-product-wr"
                                    slidesPerView={3.15}
                                    spaceBetween={4}
                                >
                                    {prodItemList.map((res, pIdx) => {
                                        return (
                                            <SwiperSlide
                                                key={`anchorBoxId_${pIdx}`}
                                                id={`anchorBoxId_${pIdx}`}
                                            >
                                                <Image
                                                    className={'w-full h-auto'}
                                                    src={`/brand/prodThum/item_${
                                                        pIdx + 1
                                                    }.jpg`}
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    priority={
                                                        bIdx === 0
                                                            ? true
                                                            : bIdx === 1
                                                              ? true
                                                              : bIdx === 2
                                                    }
                                                    alt={'...'}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
