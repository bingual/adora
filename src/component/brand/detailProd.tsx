import ProductList from '@/component/proudctList';
import { BrandDetailTypes } from '@/types/type';

export default function BrandDetailProdComp({
    productData,
}: {
    productData: BrandDetailTypes;
}) {
    const { productList } = productData;
    return (
        <>
            <div className={'ec-base-product'}>
                <div className={'prdList'}>
                    {productList.map((prod, pIdx) => {
                        return <ProductList key={pIdx} prod={prod} />;
                    })}
                </div>
            </div>
        </>
    );
}
