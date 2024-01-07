'use server';

import { notFound } from 'next/navigation';

import BrandDetailComp from '@/component/brand/detail';
import BrandDetailProdComp from '@/component/brand/detailProd';
import PaginationComp from '@/component/pagination';
import { Props } from '@/types/type';

import { getBrandDetail, getBrandList } from '@/server_action';

export default async function BrandDetail({ params, searchParams }: Props) {
  const { idx } = params;
  const { page = '1', take = '12', sort = '0' } = searchParams;

  if (
    !/^\d*$/g.test(String(idx)) ||
    !/^\d*$/g.test(String(page)) ||
    !/^\d*$/g.test(String(take)) ||
    !/^\d*$/g.test(String(sort))
  ) {
    return notFound();
  }

  const brandList = await getBrandList(true);
  const productData = await getBrandDetail(Number(page), Number(take), Number(idx), Number(sort));

  if (!productData.productCount) {
    return notFound();
  }

  return (
    <>
      <div className={'brand-detail-wr'}>
        <BrandDetailComp brandList={brandList} productData={productData} />

        <BrandDetailProdComp productData={productData} />
        <PaginationComp count={productData.productCount} />
      </div>
    </>
  );
}
