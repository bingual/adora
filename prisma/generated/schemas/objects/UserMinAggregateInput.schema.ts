import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMinAggregateInputType> = z
    .object({
        idx: z.literal(true).optional(),
        username: z.literal(true).optional(),
        password: z.literal(true).optional(),
        name: z.literal(true).optional(),
        email: z.literal(true).optional(),
        contact: z.literal(true).optional(),
        avatar: z.literal(true).optional(),
        provider: z.literal(true).optional(),
        login_level: z.literal(true).optional(),
        created_at: z.literal(true).optional(),
        updated_at: z.literal(true).optional(),
    })
    .strict();

export const UserMinAggregateInputObjectSchema = Schema;
