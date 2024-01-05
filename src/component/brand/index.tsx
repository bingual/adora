'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';

import Link from 'next/link';
import Image from 'next/image';
import { Brand } from '@/types/type';

export default function BrandComp({ brandList }: { brandList: Brand }) {
    return (
        <>
            <div className={'brand-wr'}>
                <div className="title-area">
                    <h2>BRAND</h2>
                </div>
                <div className={'brand-list-area'}>
                    {brandList.map((res, bIdx) => {
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
                                                    src={res.thumbnail}
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    alt={'...'}
                                                />
                                            </div>
                                        </div>
                                        <div className="right-menu">
                                            <div className="brand-name">
                                                <h3>{res.brand_name}</h3>
                                                <p>{res.description}</p>
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
                                    {res.brand_groups.map((res, pIdx) => {
                                        return (
                                            <SwiperSlide
                                                key={`anchorBoxId_${pIdx}`}
                                                id={`anchorBoxId_${pIdx}`}
                                            >
                                                <Image
                                                    className={'w-full h-auto'}
                                                    src={res.thumbnail}
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
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
