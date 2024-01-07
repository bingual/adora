import { notFound } from 'next/navigation';

import PaginationComp from '@/component/pagination';
import ShoppingComp from '@/component/shopping';
import ShoppingProdComp from '@/component/shopping/prod';
import { Props } from '@/types/type';

import { getBrandList, getProductList } from '@/server_action';

export default async function Shopping({ params, searchParams }: Props) {
  const { page = '1', take = '12', cate_no = '' } = searchParams;

  if (!/^\d*$/g.test(String(page)) || !/^\d*$/g.test(String(take))) {
    return notFound();
  }

  const brandData = await getBrandList();
  const shoppingData = await getProductList(Number(page), Number(take), {
    category: String(cate_no),
  });

  if (!shoppingData.productCount) {
    return notFound();
  }

  return (
    <>
      <div className="shopping-wr">
        <ShoppingComp brandList={brandData} />
        <ShoppingProdComp productData={shoppingData} />
        <PaginationComp count={Number(shoppingData.productCount)} search={String(cate_no)} />
      </div>
    </>
  );
}
