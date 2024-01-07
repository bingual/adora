'use server';

import HomeHotItem from '@/component/home/hotItem';
import HomeMainBanner from '@/component/home/mainBanner';
import HomeRecommend from '@/component/home/recommend';
import { Props } from '@/types/type';

import { getProductList } from '@/server_action';

export default async function Home({ params, searchParams }: Props) {
  const recommendData = await getProductList(Number(1), Number(12), {
    brand_name: '모더먼트',
    stock_quantity: 10,
  });

  const hotItemData = await getProductList(Number(1), Number(12), {
    stock_quantity: 10,
  });

  return (
    <>
      <div className={'main-wr'}>
        <HomeMainBanner />
        <HomeRecommend productData={recommendData} />
        <HomeHotItem productData={hotItemData} />
      </div>
    </>
  );
}
