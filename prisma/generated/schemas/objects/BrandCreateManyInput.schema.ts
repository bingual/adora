import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandCreateManyInput> = z
    .object({
        idx: z.number().optional(),
        brand_name: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        created_at: z.coerce.date().optional(),
        updated_at: z.coerce.date().optional(),
    })
    .strict();

export const BrandCreateManyInputObjectSchema = Schema;
