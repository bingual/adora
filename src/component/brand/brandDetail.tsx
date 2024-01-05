'use client';
import Link from 'next/link';
import { useState } from 'react';
import { BrandDetailTypes, BrandListTypes } from '@/types/type';
import ProductList from '@/component/proudctList';
import PaginationComp from '@/component/pagination';
import { useParams, usePathname } from 'next/navigation';

export default function BrandDetailComp({
    brandList,
    productData,
}: {
    brandList: BrandListTypes;
    productData: BrandDetailTypes;
}) {
    const { productList, productCount } = productData;

    const pathname = usePathname();
    const params = useParams();

    const { idx } = params;

    const [prodSort, setProdSort] = useState(false);

    return (
        <>
            <div className={'brand-detail-wr'}>
                <div className={'product-head-category'}>
                    <div className={'titleArea'}>
                        <h2>
                            {pathname === '/brand/product'
                                ? '전체'
                                : productList[0].brand.brand_name}
                        </h2>
                    </div>
                    <ul className={'menuCategory'}>
                        <li
                            className={
                                pathname === '/brand/product'
                                    ? 'selected'
                                    : undefined
                            }
                        >
                            <Link href={`/brand/product`}>전체</Link>
                        </li>
                        {brandList.map((brand, bIdx) => (
                            <li
                                className={
                                    Number(idx) === brand.idx
                                        ? 'selected'
                                        : undefined
                                }
                                key={bIdx}
                            >
                                <Link href={`/brand/product/${brand.idx}`}>
                                    {brand.brand_name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={'product-menu'}>
                    <p className={'prdCount'}>
                        <span>{productCount}</span>개의 상품
                    </p>
                    <div
                        className="sort"
                        onClick={() => {
                            prodSort ? setProdSort(false) : setProdSort(true);
                        }}
                    >
                        <p className={prodSort ? 'on' : undefined}>
                            <span>상품정렬</span>
                            <i className="xi-angle-down-thin"></i>
                        </p>
                        <ul className={prodSort ? 'block ' : 'hidden '}>
                            <li>
                                <Link
                                    href={
                                        idx
                                            ? `/brand/product/${idx}?sort=0`
                                            : '/brand/product?sort=0'
                                    }
                                >
                                    신상품
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        idx
                                            ? `/brand/product/${idx}?sort=1`
                                            : '/brand/product?sort=1'
                                    }
                                >
                                    상품명
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        idx
                                            ? `/brand/product/${idx}?sort=2`
                                            : '/brand/product?sort=2'
                                    }
                                >
                                    낮은가격
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        idx
                                            ? `/brand/product/${idx}?sort=3`
                                            : '/brand/product?sort=3'
                                    }
                                >
                                    높은가격
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        idx
                                            ? `/brand/product/${idx}?sort=4`
                                            : '/brand/product?sort=4'
                                    }
                                >
                                    제조사
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        idx
                                            ? `/brand/product/${idx}?sort=5`
                                            : '/brand/product?sort=5'
                                    }
                                >
                                    인기상품
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'ec-base-product'}>
                    <div className={'prdList'}>
                        {productList.map((prod, pIdx) => {
                            return <ProductList key={pIdx} prod={prod} />;
                        })}
                    </div>
                </div>
                <PaginationComp count={productCount} />
            </div>
        </>
    );
}
