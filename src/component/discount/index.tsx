'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function DiscountComp() {
    const [prodItemList, setProdItemList] = useState(new Array(22).fill(0));

    return (
        <>
            <div className={'recommend-wr'}>
                <div className={'main-product-03'}>
                    <div>
                        <div className={'ec-base-product kkst-card-list'}>
                            <h1>ON SALE</h1>
                            <div className={'prdList'}>
                                {prodItemList.map((res, pIdx) => {
                                    return (
                                        <div
                                            key={pIdx}
                                            id={`anchorBoxId_${pIdx}`}
                                        >
                                            <div className={'sale-img'}>
                                                <Link href={'#'}>
                                                    <Image
                                                        className={
                                                            'w-full h-auto'
                                                        }
                                                        src={`/discount/mainThum/item_${
                                                            pIdx + 1
                                                        }.jpg`}
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        alt="..."
                                                    />
                                                </Link>
                                            </div>
                                            <div className={'sale-grid'}>
                                                <div className={'thumbnail'}>
                                                    <div className={'prdImg'}>
                                                        <Link href={'#'}>
                                                            <Image
                                                                className={
                                                                    'w-full h-auto'
                                                                }
                                                                src={`/discount/subThum/item_${
                                                                    pIdx + 1
                                                                }.jpg`}
                                                                width={0}
                                                                height={0}
                                                                sizes="100vw"
                                                                alt="..."
                                                            />
                                                            <div
                                                                className={
                                                                    'over-bg'
                                                                }
                                                            >
                                                                <Image
                                                                    className={
                                                                        'w-full h-auto'
                                                                    }
                                                                    src={`/discount/subThum/item_${
                                                                        pIdx + 1
                                                                    }.jpg`}
                                                                    width={0}
                                                                    height={0}
                                                                    sizes="100vw"
                                                                    alt="..."
                                                                />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="description">
                                                    <div className="flex-wr">
                                                        <Link href="#">
                                                            모더먼트
                                                        </Link>
                                                        <div className="name">
                                                            <Link href="#">
                                                                <span>
                                                                    [UNISEX]
                                                                    소프트 터치
                                                                    숏 머플러
                                                                    [베이지]
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="price-wr">
                                                            <p className="rate">
                                                                37%
                                                            </p>
                                                            <p className="price">
                                                                <span className="front unit">
                                                                    ₩
                                                                </span>
                                                                16,900
                                                            </p>
                                                            <p className="origin_price">
                                                                <span className="front unit">
                                                                    ₩
                                                                </span>
                                                                27,000
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
