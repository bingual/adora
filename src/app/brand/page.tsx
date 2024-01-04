'use server';
import BrandMain from '@/component/brand';
import { getBrandList } from '@/server_action';
import { Props } from '@/types/type';

export default async function Brand({ params, searchParams }: Props) {
    const brandList = await getBrandList();
    return (
        <>
            <BrandMain brandList={brandList} />
        </>
    );
}
