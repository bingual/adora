import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupAvgOrderByAggregateInput> = z
    .object({
        idx: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const Brand_groupAvgOrderByAggregateInputObjectSchema = Schema;
