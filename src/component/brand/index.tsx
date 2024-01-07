'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';

import { BrandListTypes } from '@/types/type';

export default function BrandComp({ brandList }: { brandList: BrandListTypes }) {
  return (
    <>
      <div className={'brand-wr'}>
        <div className="title-area">
          <h2>BRAND</h2>
        </div>
        <div className={'brand-list-area'}>
          {brandList.map((brand, bIdx) => {
            return (
              <div key={bIdx} className={'brand-item'}>
                <div className={'brand-title'}>
                  <Link href={`/brand/product/${brand.idx}`}>
                    <div className="left-area">
                      <div className="brand-thum">
                        <Image
                          className={'w-full h-auto'}
                          src={brand.thumbnail}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt={'...'}
                        />
                      </div>
                    </div>
                    <div className="right-menu">
                      <div className="brand-name">
                        <h3>{brand.brand_name}</h3>
                        <p>{brand.description}</p>
                      </div>
                      <span />
                    </div>
                  </Link>
                </div>
                <Swiper className="brand-product-wr" slidesPerView={3.15} spaceBetween={4}>
                  {brand.brand_groups.map((brand_group, bgIdx) => {
                    return (
                      <SwiperSlide key={bgIdx}>
                        <Image
                          className={'w-full h-auto'}
                          src={brand_group.thumbnail}
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
