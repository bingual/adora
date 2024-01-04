'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import Link from 'next/link';
import { Product } from '@/types/type';
import ProductList from '@/component/proudctList';

export default function HomeRecommend({
    productData,
}: {
    productData: Product;
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
                                <SwiperSlide key={`anchorBoxId_${prod.idx}`}>
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
