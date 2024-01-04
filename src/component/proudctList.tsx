import Link from 'next/link';
import { Product } from '@prisma/client';
import Image from 'next/image';

export default function ProductList({ prod }: { prod: Product }) {
    return (
        <>
            <div id={`anchorBoxId_${prod.idx}`}>
                <div className="thumbnail">
                    <div className="prdImg">
                        <Link href="#">
                            <Image
                                className={'w-full h-auto'}
                                src={prod.thumbnail!}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={prod.product_name!}
                            />
                            <div className="over-bg">
                                <Image
                                    className={'w-full h-auto'}
                                    src={prod.thumbnail!}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt={prod.product_name!}
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
                            <span className="likePrdCount ">13</span>
                        </span>
                    </div>
                    {prod.stock_quantity === 0 && (
                        <div className={'sold-out-ico'}>
                            <Image
                                className={'w-full h-auto'}
                                src={'/product/sold_out.jpg'}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={'...'}
                            />
                        </div>
                    )}
                </div>
                <div className="description">
                    <div className="flex-wr">
                        <Link href="#">{prod.brand_name}</Link>
                        <div className="name">
                            <Link href="#">
                                <span>
                                    {prod.product_name}
                                    <br />
                                </span>
                            </Link>
                        </div>
                        <div className="price-wr">
                            {prod.off_rate !== 0 && (
                                <p className="rate">{prod.off_rate}%</p>
                            )}
                            <p className="price">
                                <span className="front unit">₩</span>
                                {prod.price.toLocaleString('ko-KR')}
                            </p>
                            {prod.origin_price !== 0 && (
                                <p className="origin_price text-xs">
                                    <span className="front unit">₩</span>
                                    {prod.origin_price.toLocaleString('ko-KR')}
                                </p>
                            )}
                        </div>
                        <div className="count">
                            <div className="like_wrap">
                                <div className="likeButton">
                                    <button type="button">
                                        {/*<picture>*/}
                                        {/*    <img*/}
                                        {/*        src="/web/upload/icon_202311301421409400.png"*/}
                                        {/*        className="likePrdIcon"*/}
                                        {/*        alt="좋아요 등록 전"*/}
                                        {/*    />*/}
                                        {/*</picture>*/}
                                        <span>
                                            <span className="likePrdCount">
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
            </div>
        </>
    );
}
