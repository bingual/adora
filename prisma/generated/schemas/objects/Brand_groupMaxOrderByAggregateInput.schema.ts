import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupMaxOrderByAggregateInput> = z
    .object({
        idx: z.lazy(() => SortOrderSchema).optional(),
        brand_name: z.lazy(() => SortOrderSchema).optional(),
        thumbnail: z.lazy(() => SortOrderSchema).optional(),
        created_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const Brand_groupMaxOrderByAggregateInputObjectSchema = Schema;
