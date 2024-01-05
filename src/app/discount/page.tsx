'use server';
import DiscountComp from '@/component/discount';
import { Props } from '@/types/type';

export default async function Discount({ params, searchParams }: Props) {
    return (
        <>
            <DiscountComp />
        </>
    );
}
