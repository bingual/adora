'use server';
import HomeMainBanner from '@/component/home/mainBanner';
import HomeHotItem from '@/component/home/hotItem';

export default async function Home() {
    return (
        <>
            <div className={'main-wr'}>
                {/* TODO swiper 혹은 다른 슬라이드 라이브러리 사용해서 나머지 작업해야됨. 다크모드까지 하면 힘드니 그건 이후에 생각하기 */}
                {/* FIXME 외부 이미지 링크 걸려있는거 나중에 전부 크롤링해서 이미지 로컬 저장후 DB에 링크 삽입 후 Image 태그로 최적화해서 불러오기*/}
                <HomeMainBanner />
                <HomeHotItem />
            </div>
        </>
    );
}
