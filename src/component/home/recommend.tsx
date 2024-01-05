'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import Link from 'next/link';
import { ProductListTypes } from '@/types/type';
import ProductList from '@/component/proudctList';

export default function HomeRecommend({
    productData,
}: {
    productData: ProductListTypes;
}) {
    const { productList, productCount } = productData;
    return (
        <>
            <div className={'recommend2-wr'}>
                <div className="title">
                    <p>ADORA PICK</p>
                </div>
                <div className={'item'}>
                    <h3>
                        <Link href="#">
                            겨울 코디템
                            <br />
                            목도리 TOP{productCount}
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
                        {productList.map((prod, pIdx) => {
                            return (
                                <SwiperSlide key={pIdx}>
                                    <ProductList prod={prod} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="link">
                    <Link href="#">전체보기</Link>
                </div>
            </div>
        </>
    );
}
