import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = z
    .object({
        idx: z.lazy(() => SortOrderSchema).optional(),
        login_level: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserSumOrderByAggregateInputObjectSchema = Schema;
