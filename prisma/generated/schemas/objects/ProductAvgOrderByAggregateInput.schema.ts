import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z
    .object({
        idx: z.lazy(() => SortOrderSchema).optional(),
        off_rate: z.lazy(() => SortOrderSchema).optional(),
        price: z.lazy(() => SortOrderSchema).optional(),
        origin_price: z.lazy(() => SortOrderSchema).optional(),
        stock_quantity: z.lazy(() => SortOrderSchema).optional(),
        views: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ProductAvgOrderByAggregateInputObjectSchema = Schema;
