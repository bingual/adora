'use server';
import { Props } from '@/types/type';
import { getProductList } from '@/server_action';
import RecommendComp from '@/component/recommend';

export default async function Recommend({ params, searchParams }: Props) {
    const brandList = [
        '메르고',
        '에드리엘로스',
        '판토폴라',
        '론트',
        '플랙',
        '더니트컴퍼니',
        '로스트가든',
        '노이어',
        '빅유니온',
        'TNGT',
        '로드존그레이',
        '파브레',
    ];

    const productDataList = brandList.map(async (res, idx) => {
        return getProductList(Number(1), Number(8), {
            brand_name: res,
            stock_quantity: 10,
            limit: 8,
        });
    });

    return (
        <>
            <div className={'recommend2-wr'}>
                <div className="title">
                    <p>ADORA PICK</p>
                    <h2>지금 사야하는 브랜드 상품 랭킹</h2>
                </div>
                {productDataList.map(async (res, pIdx) => {
                    const productData = await res;
                    return (
                        <RecommendComp key={pIdx} productData={productData} />
                    );
                })}
            </div>
        </>
    );
}
