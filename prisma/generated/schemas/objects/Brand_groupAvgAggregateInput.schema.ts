import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupAvgAggregateInputType> = z
    .object({
        idx: z.literal(true).optional(),
    })
    .strict();

export const Brand_groupAvgAggregateInputObjectSchema = Schema;
