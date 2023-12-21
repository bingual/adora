'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function HomeHotItem() {
    const [hotItemCount, setHotItemCount] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
    return (
        <>
            {/*지금 제일 핫한 아이템*/}
            <div className={'main-product-02'}>
                <div className={'ec-base-product'}>
                    <h1>🔥 지금 제일 핫한 아이템</h1>
                    <ul className={'prdList'}>
                        {hotItemCount.map((res, idx) => {
                            return (
                                <li key={idx} id={`anchorBoxId_${idx}`}>
                                    <div className="thumbnail">
                                        <div className="prdImg">
                                            <Link href="#">
                                                <picture>
                                                    <img
                                                        src="//kkst.kr/web/product/big/202308/a6ad7ca8b3f71c18889e096c05d8f3ea.jpg"
                                                        id=""
                                                        alt="스쿱넥 롱슬리브 티셔츠 [블랙]"
                                                    />
                                                </picture>
                                                <div className="over-bg">
                                                    <picture>
                                                        <img
                                                            src="//kkst.kr/web/product/medium/202308/faa33f7b68cebc75c543eaefde12efbb.jpg"
                                                            id="//kkst.kr/web/product/medium/202308/faa33f7b68cebc75c543eaefde12efbb.jpg"
                                                            alt="스쿱넥 롱슬리브 티셔츠 [블랙]"
                                                            loading="lazy"
                                                        />
                                                    </picture>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <div className="flex-wr">
                                            <Link href="#">메르고</Link>
                                            <div className="name">
                                                <Link href="#">
                                                    <span>
                                                        스쿱넥 롱슬리브 티셔츠
                                                        [블랙]
                                                        <br />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="price-wr">
                                                <p className="rate">19%</p>
                                                <p className="price">
                                                    <span className="front unit">
                                                        ₩
                                                    </span>
                                                    17,000
                                                </p>
                                                <p className="origin_price">
                                                    <span className="front unit">
                                                        ₩
                                                    </span>
                                                    21,000
                                                </p>
                                            </div>
                                            <div className="count">
                                                <div className="like_wrap">
                                                    <div className="likeButton likePrd likePrd_353">
                                                        <button type="button">
                                                            <picture>
                                                                <img
                                                                    src="/web/upload/icon_202311301421409400.png"
                                                                    className="likePrdIcon"
                                                                    alt="좋아요 등록 전"
                                                                />
                                                            </picture>
                                                            <span>
                                                                <span className="likePrdCount likePrdCount_353">
                                                                    270
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="review_wrap">
                                                    <a href="/product/스쿱넥-롱슬리브-티셔츠-블랙/353/category/1/display/3/#prdReview">
                                                        <span className="alpha_module_count_container">
                                                            <i className="xi-message-o"></i>
                                                            <span className="alpha_module_count">
                                                                247
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
