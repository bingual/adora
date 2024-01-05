'use server';
import BrandComp from '@/component/brand';
import { getBrandList } from '@/server_action';
import { Props } from '@/types/type';

export default async function Brand({ params, searchParams }: Props) {
    const brandList = await getBrandList();
    return (
        <>
            <BrandComp brandList={brandList} />
        </>
    );
}
