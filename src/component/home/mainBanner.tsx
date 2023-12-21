'use server';
import { Carousel } from 'flowbite-react';
import Link from 'next/link';

export default async function HomeMainBanner() {
    return (
        <>
            {/* 메인 배너 */}
            <div className="w-[640px] h-[480px] max-sm:w-[483px] max-sm:h-[362px]">
                <Carousel className={'bg-black rounded-none'} pauseOnHover>
                    <picture>
                        <img
                            src="https://kkst.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/c70850a16a805115964abf517b0a7c86.jpg"
                            alt="..."
                        />
                    </picture>
                    <picture>
                        <img
                            src="https://kkst.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/c63026cccaede677677af00bd25385aa.jpg"
                            alt="..."
                        />
                    </picture>
                    <picture>
                        <img
                            src="https://kkst.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/1d433148cd1eb1a9f5ba2c87a2701f73.jpg"
                            alt="..."
                        />
                    </picture>
                </Carousel>
                <div className="more">
                    <Link href={'/recommend'}>
                        더 알아보기 <i className="xi-angle-right"></i>
                    </Link>
                </div>
            </div>
        </>
    );
}
