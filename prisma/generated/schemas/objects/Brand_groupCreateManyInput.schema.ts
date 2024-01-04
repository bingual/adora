import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupCreateManyInput> = z
    .object({
        idx: z.number().optional(),
        brand_name: z.string(),
        thumbnail: z.string(),
        created_at: z.coerce.date().optional(),
    })
    .strict();

export const Brand_groupCreateManyInputObjectSchema = Schema;
