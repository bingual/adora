'use server';
import HomeHotItem from '@/component/home/hotItem';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
    return (
        <>
            <div className={'main-wr'}>
                {/* TODO swiper 혹은 다른 슬라이드 라이브러리 사용해서 나머지 작업해야됨. 다크모드까지 하면 힘드니 그건 이후에 생각하기 */}
                {/* FIXME 외부 이미지 링크 걸려있는거 나중에 전부 크롤링해서 이미지 로컬 저장후 DB에 링크 삽입 후 Image 태그로 최적화해서 불러오기*/}
                <div className="h-[480px] max-sm:h-[362px]">
                    <Carousel className={'bg-black rounded-none'} pauseOnHover>
                        <Image
                            src={'/home/mainBanner1.jpg'}
                            width={1920}
                            height={1920}
                            alt="..."
                        />
                        <Image
                            src={'/home/mainBanner2.jpg'}
                            width={1920}
                            height={1920}
                            alt="..."
                        />
                        <Image
                            src={'/home/mainBanner3.jpg'}
                            width={1920}
                            height={1920}
                            alt="..."
                        />
                    </Carousel>
                    <div className="more">
                        <Link href={'/recommend'}>
                            더 알아보기 <i className="xi-angle-right"></i>
                        </Link>
                    </div>
                </div>
                <HomeHotItem />
            </div>
        </>
    );
}
