'use server';

import { Props } from '@/types/type';
import { notFound } from 'next/navigation';
import { getBrandDetail, getBrandList } from '@/server_action';
import BrandDetailComp from '@/component/brand/brandDetail';

export default async function BrandList({ params, searchParams }: Props) {
    const { page = '1', take = '12', sort = '0' } = searchParams;

    if (
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
        undefined,
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
