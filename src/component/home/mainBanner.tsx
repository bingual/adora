'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HomeMainBanner() {
    const [bannerItemList, setBannerItemList] = useState(new Array(7).fill(0));

    return (
        <>
            <Swiper
                className={'main-slide'}
                modules={[Autoplay, Pagination]}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                loop={true}
            >
                {bannerItemList.map((res, bIdx) => {
                    return (
                        <SwiperSlide key={bIdx}>
                            <Image
                                className={'w-full h-auto'}
                                src={`/home/mainBanner/item_${bIdx + 1}.jpg`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt="..."
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="more">
                <Link href={'#'}>
                    더 알아보기 <i className="xi-angle-right"></i>
                </Link>
            </div>
        </>
    );
}
