import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductSumAggregateInputType> = z
    .object({
        idx: z.literal(true).optional(),
        off_rate: z.literal(true).optional(),
        price: z.literal(true).optional(),
        origin_price: z.literal(true).optional(),
        stock_quantity: z.literal(true).optional(),
        views: z.literal(true).optional(),
    })
    .strict();

export const ProductSumAggregateInputObjectSchema = Schema;
