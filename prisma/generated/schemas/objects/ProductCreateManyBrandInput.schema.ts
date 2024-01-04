import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateManyBrandInput> = z
    .object({
        idx: z.number().optional(),
        product_name: z.string(),
        off_rate: z.number().optional(),
        price: z.number().optional(),
        origin_price: z.number().optional(),
        thumbnail: z.string(),
        category: z.string().optional().nullable(),
        stock_quantity: z.number().optional(),
        views: z.number().optional(),
        created_at: z.coerce.date().optional(),
        updated_at: z.coerce.date().optional(),
    })
    .strict();

export const ProductCreateManyBrandInputObjectSchema = Schema;
