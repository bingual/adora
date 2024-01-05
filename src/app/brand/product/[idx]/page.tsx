'use server';

import BrandDetailComp from '@/component/brand/brandDetail';
import { Props } from '@/types/type';
import { getBrandDetail, getBrandList } from '@/server_action';
import { notFound } from 'next/navigation';

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
    const productData = await getBrandDetail(
        Number(page),
        Number(take),
        Number(idx),
        Number(sort),
    );

    if (!productData.productCount) {
        return notFound();
    }

    return (
        <>
            <BrandDetailComp brandList={brandList} productData={productData} />
        </>
    );
}
