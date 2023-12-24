'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

// import required modules
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HomeRecommend() {
    const [pickItemList, setPickItemList] = useState(new Array(5).fill(0));
    return (
        <>
            <div className={'recommend2-wr'}>
                <div className="title">
                    <p>ADORA PICK</p>
                </div>
                <div className={'item'}>
                    <h3>
                        <Link href="#">
                            요즘 많이 신는
                            <br />
                            겨울신발 TOP5
                        </Link>
                    </h3>
                    <Swiper
                        className={'ec-base-product prdList'}
                        slidesPerView={2.4}
                        spaceBetween={10}
                        loop={true}
                        freeMode={true}
                        style={{ padding: 0 }}
                    >
                        {pickItemList.map((res, idx) => {
                            return (
                                <SwiperSlide
                                    id={`anchorBoxId_${idx}`}
                                    key={idx}
                                >
                                    <div className="thumbnail">
                                        <div className="prdImg">
                                            <Link href={'#'}>
                                                {/*<Image*/}
                                                {/*    className={'w-full h-auto'}*/}
                                                {/*    src={`/home/recommend_${*/}
                                                {/*        idx + 1*/}
                                                {/*    }.jpg`}*/}
                                                {/*    width={0}*/}
                                                {/*    height={0}*/}
                                                {/*    sizes="100vw"*/}
                                                {/*    alt="..."*/}
                                                {/*/>*/}
                                                <div className={'over-bg'}>
                                                    <Image
                                                        className={
                                                            'w-full h-auto'
                                                        }
                                                        src={`/home/recommend_${
                                                            idx + 1
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
                                    <div className={'description'}>
                                        <div className={'flex-wr'}>
                                            <Link href={'#'}>나이키</Link>
                                            <div className={'name'}>
                                                <Link href={'#'}>
                                                    <span>
                                                        줌 보메로 5 코블스톤 앤
                                                        플랫 퓨터
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className={'price-wr'}>
                                                <p className={'price'}>
                                                    상품링크 참조
                                                </p>
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
                                                                    9
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
