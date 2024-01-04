import ShoppingMain from '@/component/shopping/main';
import { Props } from '@/types/type';
import PaginationComponent from '@/component/pagination';
import { getBrandList, getProductList } from '@/server_action';
import { notFound } from 'next/navigation';

export default async function Shopping({ params, searchParams }: Props) {
    const { page = '1', take = '12', cate_no = '' } = searchParams;

    if (!/^\d*$/g.test(String(page)) || !/^\d*$/g.test(String(take))) {
        return notFound();
    }

    const brandList = await getBrandList();
    const productData = await getProductList(
        Number(page),
        Number(take),
        String(cate_no),
    );

    return (
        <>
            <div className="shopping-wr">
                <ShoppingMain brandList={brandList} productData={productData} />
                <PaginationComponent
                    count={Number(productData.productCount)}
                    search={String(cate_no)}
                />
            </div>
        </>
    );
}
