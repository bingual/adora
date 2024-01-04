import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandMaxAggregateInputType> = z
    .object({
        idx: z.literal(true).optional(),
        brand_name: z.literal(true).optional(),
        description: z.literal(true).optional(),
        thumbnail: z.literal(true).optional(),
        created_at: z.literal(true).optional(),
        updated_at: z.literal(true).optional(),
    })
    .strict();

export const BrandMaxAggregateInputObjectSchema = Schema;
