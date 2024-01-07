'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import { BrandListTypes } from '@/types/type';

export default function ShoppingComp({ brandList }: { brandList: BrandListTypes }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const cate_no = searchParams.get('cate_no');

  return (
    <>
      <div className={'brand-swiper-wr'}>
        <div className="title-area">
          <h2>BRAND</h2>
          <Link href="/brand">
            <span>브랜드 더보기</span>
            <i className="xi-angle-right"></i>
          </Link>
        </div>
        <Swiper slidesPerView={4.2} spaceBetween={36}>
          {brandList.length > 0 &&
            brandList.map((brand, bIdx) => {
              return (
                <SwiperSlide key={bIdx}>
                  <Link href={'#'}>
                    <div className="img-wr">
                      <Image
                        className={'w-full h-auto'}
                        src={brand.thumbnail}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt={brand.brand_name}
                      />
                    </div>
                    <div className="text-wr">
                      <p>{brand.brand_name}</p>
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

        <Swiper className={'rank-category'} slidesPerView={6.1} spaceBetween={10}>
          <SwiperSlide className={pathname === '/shopping' && !cate_no ? 'selected' : undefined}>
            <Link href={'/shopping'}>전체</Link>
          </SwiperSlide>
          <SwiperSlide className={cate_no === 'outer' ? 'selected' : undefined}>
            <Link href={'/shopping?cate_no=outer'}>아우터</Link>
          </SwiperSlide>
          <SwiperSlide className={cate_no === 'top' ? 'selected' : undefined}>
            <Link href={'/shopping?cate_no=top'}>상의</Link>
          </SwiperSlide>
          <SwiperSlide className={cate_no === 'pants' ? 'selected' : undefined}>
            <Link href={'/shopping?cate_no=pants'}>하의</Link>
          </SwiperSlide>
          <SwiperSlide className={cate_no === 'shoes' ? 'selected' : undefined}>
            <Link href={'/shopping?cate_no=shoes'}>신발</Link>
          </SwiperSlide>
          <SwiperSlide className={cate_no === 'accessory' ? 'selected' : undefined}>
            <Link href={'/shopping?cate_no=accessory'}>악세서리</Link>
          </SwiperSlide>
          <SwiperSlide className={cate_no === 'grooming' ? 'selected' : undefined}>
            <Link href={'/shopping?cate_no=grooming'}>그루밍</Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
