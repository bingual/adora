import ProductList from '@/component/proudctList';
import { ProductListTypes } from '@/types/type';

export default function ShoppingProdComp({ productData }: { productData: ProductListTypes }) {
  const { productList } = productData;
  return (
    <>
      <div className={'ec-base-product'}>
        <div className={'prdList'}>
          {productList.length > 0 &&
            productList.map((prod, pIdx) => {
              return <ProductList key={pIdx} prod={prod} />;
            })}
        </div>
      </div>
    </>
  );
}
