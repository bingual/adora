import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSumAggregateInputType> = z
    .object({
        idx: z.literal(true).optional(),
        login_level: z.literal(true).optional(),
    })
    .strict();

export const UserSumAggregateInputObjectSchema = Schema;
