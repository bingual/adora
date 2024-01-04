import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumProviderWithAggregatesFilterObjectSchema } from './EnumProviderWithAggregatesFilter.schema';
import { ProviderSchema } from '../enums/Provider.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(() => UserScalarWhereWithAggregatesInputObjectSchema)
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => UserScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(() => UserScalarWhereWithAggregatesInputObjectSchema)
                    .array(),
            ])
            .optional(),
        idx: z
            .union([
                z.lazy(() => IntWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
        username: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        password: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        name: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        email: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        contact: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
        avatar: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
        provider: z
            .union([
                z.lazy(() => EnumProviderWithAggregatesFilterObjectSchema),
                z.lazy(() => ProviderSchema),
            ])
            .optional(),
        login_level: z
            .union([
                z.lazy(() => IntWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
        created_at: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
                z.coerce.date(),
            ])
            .optional(),
        updated_at: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
                z.coerce.date(),
            ])
            .optional(),
    })
    .strict();

export const UserScalarWhereWithAggregatesInputObjectSchema = Schema;
