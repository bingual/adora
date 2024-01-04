import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandWhereUniqueInput> = z
    .object({
        idx: z.number().optional(),
        brand_name: z.string().optional(),
    })
    .strict();

export const BrandWhereUniqueInputObjectSchema = Schema;
