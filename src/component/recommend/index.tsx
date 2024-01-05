'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import Link from 'next/link';
import { Product } from '@/types/type';
import ProductList from '@/component/proudctList';

export default function RecommendComp({
    productData,
}: {
    productData: Product;
}) {
    const { productList, productCount } = productData;

    return (
        <>
            <div className={'item'}>
                <h3>
                    <Link href="#">
                        {productList[0].brand_name}
                        <br />
                        TOP{productCount}
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
                            <SwiperSlide
                                id={`anchorBoxId_${pIdx}`}
                                key={`anchorBoxId_${pIdx}`}
                            >
                                <ProductList prod={prod} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
}
