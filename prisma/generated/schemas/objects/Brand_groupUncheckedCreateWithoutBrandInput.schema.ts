import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupUncheckedCreateWithoutBrandInput> = z
    .object({
        idx: z.number().optional(),
        thumbnail: z.string(),
        created_at: z.coerce.date().optional(),
    })
    .strict();

export const Brand_groupUncheckedCreateWithoutBrandInputObjectSchema = Schema;
