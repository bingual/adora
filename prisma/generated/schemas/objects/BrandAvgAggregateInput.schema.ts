import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandAvgAggregateInputType> = z
    .object({
        idx: z.literal(true).optional(),
    })
    .strict();

export const BrandAvgAggregateInputObjectSchema = Schema;
