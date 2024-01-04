import { z } from 'zod';
import { BrandCreateNestedOneWithoutProductsInputObjectSchema } from './BrandCreateNestedOneWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateInput> = z
    .object({
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
        Brand: z.lazy(
            () => BrandCreateNestedOneWithoutProductsInputObjectSchema,
        ),
    })
    .strict();

export const ProductCreateInputObjectSchema = Schema;
