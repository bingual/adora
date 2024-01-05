'use client';
import { ProductListTypes } from '@/types/type';
import ProductList from '@/component/proudctList';

export default function HomeHotItem({
    productData,
}: {
    productData: ProductListTypes;
}) {
    const { productList } = productData;

    return (
        <>
            <div className={'main-product-02'}>
                <div className={'ec-base-product'}>
                    <h1>🔥 지금 제일 핫한 아이템</h1>
                    <div className={'prdList'}>
                        {productList.length > 0 &&
                            productList.map((prod, pIdx) => {
                                return <ProductList key={pIdx} prod={prod} />;
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}
