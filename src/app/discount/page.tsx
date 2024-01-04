'use server';
import DiscountMain from '@/component/discount';
import { Props } from '@/types/type';

export default async function Discount({ params, searchParams }: Props) {
    return (
        <>
            <DiscountMain />
        </>
    );
}
