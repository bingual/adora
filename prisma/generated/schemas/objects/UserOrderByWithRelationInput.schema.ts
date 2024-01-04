import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
    .object({
        idx: z.lazy(() => SortOrderSchema).optional(),
        username: z.lazy(() => SortOrderSchema).optional(),
        password: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        contact: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputObjectSchema),
            ])
            .optional(),
        avatar: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputObjectSchema),
            ])
            .optional(),
        provider: z.lazy(() => SortOrderSchema).optional(),
        login_level: z.lazy(() => SortOrderSchema).optional(),
        created_at: z.lazy(() => SortOrderSchema).optional(),
        updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
