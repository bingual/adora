import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupWhereUniqueInput> = z
    .object({
        idx: z.number().optional(),
    })
    .strict();

export const Brand_groupWhereUniqueInputObjectSchema = Schema;
