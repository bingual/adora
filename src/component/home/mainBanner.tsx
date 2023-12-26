'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HomeMainBanner() {
    const [bannerItemList, setBannerItemList] = useState(new Array(3).fill(0));

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
                {bannerItemList.map((res, idx) => {
                    return (
                        <SwiperSlide key={`main-slide_${idx}`}>
                            <Image
                                className={'w-full h-auto'}
                                src={`/home/mainBanner/item_${idx + 1}.jpg`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority={true}
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
