'use server';

import BrandComp from '@/component/brand';
import { Props } from '@/types/type';

import { getBrandList } from '@/server_action';

export default async function Brand({ params, searchParams }: Props) {
  const brandList = await getBrandList();
  return (
    <>
      <BrandComp brandList={brandList} />
    </>
  );
}
