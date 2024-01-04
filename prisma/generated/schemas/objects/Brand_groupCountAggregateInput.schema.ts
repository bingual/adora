import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupCountAggregateInputType> = z
    .object({
        idx: z.literal(true).optional(),
        brand_name: z.literal(true).optional(),
        thumbnail: z.literal(true).optional(),
        created_at: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict();

export const Brand_groupCountAggregateInputObjectSchema = Schema;
