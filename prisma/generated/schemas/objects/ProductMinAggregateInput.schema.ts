import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductMinAggregateInputType> = z
    .object({
        idx: z.literal(true).optional(),
        brand_name: z.literal(true).optional(),
        product_name: z.literal(true).optional(),
        off_rate: z.literal(true).optional(),
        price: z.literal(true).optional(),
        origin_price: z.literal(true).optional(),
        thumbnail: z.literal(true).optional(),
        category: z.literal(true).optional(),
        stock_quantity: z.literal(true).optional(),
        views: z.literal(true).optional(),
        created_at: z.literal(true).optional(),
        updated_at: z.literal(true).optional(),
    })
    .strict();

export const ProductMinAggregateInputObjectSchema = Schema;
