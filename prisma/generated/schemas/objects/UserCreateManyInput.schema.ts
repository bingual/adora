import { z } from 'zod';
import { ProviderSchema } from '../enums/Provider.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
    .object({
        idx: z.number().optional(),
        username: z.string(),
        password: z.string(),
        name: z.string(),
        email: z.string(),
        contact: z.string().optional().nullable(),
        avatar: z.string().optional().nullable(),
        provider: z.lazy(() => ProviderSchema).optional(),
        login_level: z.number().optional(),
        created_at: z.coerce.date().optional(),
        updated_at: z.coerce.date().optional(),
    })
    .strict();

export const UserCreateManyInputObjectSchema = Schema;
