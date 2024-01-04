'use server';
import BrandMain from '@/component/brand/main';
import { getBrandList } from '@/server_action';

export default async function Brand() {
    const brandList = await getBrandList();
    return (
        <>
            <BrandMain brandList={brandList} />
        </>
    );
}
