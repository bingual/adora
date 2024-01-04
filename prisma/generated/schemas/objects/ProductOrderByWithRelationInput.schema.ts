import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BrandOrderByWithRelationInputObjectSchema } from './BrandOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z
    .object({
        idx: z.lazy(() => SortOrderSchema).optional(),
        brand_name: z.lazy(() => SortOrderSchema).optional(),
        product_name: z.lazy(() => SortOrderSchema).optional(),
        off_rate: z.lazy(() => SortOrderSchema).optional(),
        price: z.lazy(() => SortOrderSchema).optional(),
        origin_price: z.lazy(() => SortOrderSchema).optional(),
        thumbnail: z.lazy(() => SortOrderSchema).optional(),
        category: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputObjectSchema),
            ])
            .optional(),
        stock_quantity: z.lazy(() => SortOrderSchema).optional(),
        views: z.lazy(() => SortOrderSchema).optional(),
        created_at: z.lazy(() => SortOrderSchema).optional(),
        updated_at: z.lazy(() => SortOrderSchema).optional(),
        Brand: z
            .lazy(() => BrandOrderByWithRelationInputObjectSchema)
            .optional(),
    })
    .strict();

export const ProductOrderByWithRelationInputObjectSchema = Schema;
