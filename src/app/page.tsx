'use server';
import HomeHotItem from '@/component/home/hotItem';
import HomeRecommend from '@/component/home/recommend';
import HomeMainBanner from '@/component/home/mainBanner';

export default async function Home() {
    return (
        <>
            <div className={'main-wr'}>
                <HomeMainBanner />
                <HomeRecommend />
                <HomeHotItem />
            </div>
        </>
    );
}
