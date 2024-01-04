'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';

import Link from 'next/link';
import Image from 'next/image';
import { Prisma } from '@prisma/client';
import { usePathname, useSearchParams } from 'next/navigation';

import { getBrandList, getProductList } from '@/server_action';

type Product = Prisma.PromiseReturnType<typeof getProductList>;
type Brand = Prisma.PromiseReturnType<typeof getBrandList>;

export default function ShoppingMain({
    brandList,
    productData,
}: {
    productData: Product;
    brandList: Brand;
}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const page = Number(searchParams.get('page')) || 1;
    const take = Number(searchParams.get('take')) || 12;
    const cate_no = searchParams.get('cate_no');

    const { productList } = productData;

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
                    {brandList.map((res, bIdx) => {
                        return (
                            <SwiperSlide key={`brand-swiper-wr_${bIdx}`}>
                                <Link href={'#'}>
                                    <div className="img-wr">
                                        <Image
                                            className={'w-full h-auto'}
                                            src={res.thumbnail}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            priority={
                                                bIdx === 1
                                                    ? true
                                                    : bIdx === 2
                                                      ? true
                                                      : bIdx === 3
                                                        ? true
                                                        : bIdx === 4
                                            }
                                            alt={res.brand_name}
                                        />
                                    </div>
                                    <div className="text-wr">
                                        <p>{res.brand_name}</p>
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

                <Swiper
                    className={'rank-category'}
                    slidesPerView={6.1}
                    spaceBetween={10}
                >
                    <SwiperSlide
                        className={
                            pathname === '/shopping' && !cate_no
                                ? 'selected'
                                : undefined
                        }
                    >
                        <Link href={'/shopping'}>전체</Link>
                    </SwiperSlide>
                    <SwiperSlide
                        className={cate_no === 'outer' ? 'selected' : undefined}
                    >
                        <Link href={'/shopping?cate_no=outer'}>아우터</Link>
                    </SwiperSlide>
                    <SwiperSlide
                        className={cate_no === 'top' ? 'selected' : undefined}
                    >
                        <Link href={'/shopping?cate_no=top'}>상의</Link>
                    </SwiperSlide>
                    <SwiperSlide
                        className={cate_no === 'pants' ? 'selected' : undefined}
                    >
                        <Link href={'/shopping?cate_no=pants'}>하의</Link>
                    </SwiperSlide>
                    <SwiperSlide
                        className={cate_no === 'shoes' ? 'selected' : undefined}
                    >
                        <Link href={'/shopping?cate_no=shoes'}>신발</Link>
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            cate_no === 'accessory' ? 'selected' : undefined
                        }
                    >
                        <Link href={'/shopping?cate_no=accessory'}>
                            악세서리
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide
                        className={
                            cate_no === 'grooming' ? 'selected' : undefined
                        }
                    >
                        <Link href={'/shopping?cate_no=grooming'}>그루밍</Link>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={'ec-base-product'}>
                <ul className={'prdList'}>
                    {productList.map((res, hIdx) => {
                        return (
                            <li
                                key={`anchorBoxId_${res.idx}`}
                                id={`anchorBoxId_${res.idx}`}
                            >
                                <div className="thumbnail">
                                    <div className="rank-num">
                                        {hIdx + 1 + take * (page - 1)}
                                    </div>
                                    <div className="prdImg">
                                        <Link href="#">
                                            <Image
                                                className={'w-full h-auto'}
                                                src={res.thumbnail!}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                priority={
                                                    hIdx === 1
                                                        ? true
                                                        : hIdx === 2
                                                }
                                                alt={res.product_name!}
                                            />
                                            <div className="over-bg">
                                                <Image
                                                    className={'w-full h-auto'}
                                                    src={res.thumbnail!}
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    alt={res.product_name!}
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="likeButton likePrd">
                                        <button type="button">
                                            <Image
                                                className={'w-full h-auto'}
                                                src={`/product/like.png`}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                alt="..."
                                            />
                                        </button>
                                        <span>
                                            <span className="likePrdCount likePrdCount_856">
                                                13
                                            </span>
                                        </span>
                                    </div>
                                    {res.stock_quantity === 0 && (
                                        <Image
                                            className={'w-full h-auto'}
                                            src={'/product/sold_out.jpg'}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            priority={
                                                hIdx === 1 ? true : hIdx === 2
                                            }
                                            alt={'...'}
                                        />
                                    )}
                                </div>
                                <div className="description">
                                    <div className="flex-wr">
                                        <Link href="#">{res.brand_name}</Link>
                                        <div className="name">
                                            <Link href="#">
                                                <span>
                                                    {res.product_name}
                                                    <br />
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="price-wr">
                                            {res.off_rate !== 0 && (
                                                <p className="rate">
                                                    {res.off_rate}%
                                                </p>
                                            )}
                                            <p className="price">
                                                <span className="front unit">
                                                    ₩
                                                </span>
                                                {res.price.toLocaleString(
                                                    'ko-KR',
                                                )}
                                            </p>
                                            {res.origin_price !== 0 && (
                                                <p className="origin_price text-xs">
                                                    <span className="front unit">
                                                        ₩
                                                    </span>
                                                    {res.origin_price.toLocaleString(
                                                        'ko-KR',
                                                    )}
                                                </p>
                                            )}
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
                                                                154
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
                                                            6
                                                        </span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
