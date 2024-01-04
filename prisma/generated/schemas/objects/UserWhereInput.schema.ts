import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumProviderFilterObjectSchema } from './EnumProviderFilter.schema';
import { ProviderSchema } from '../enums/Provider.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => UserWhereInputObjectSchema),
                z.lazy(() => UserWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => UserWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => UserWhereInputObjectSchema),
                z.lazy(() => UserWhereInputObjectSchema).array(),
            ])
            .optional(),
        idx: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        username: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        password: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        name: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        email: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        contact: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
            .optional()
            .nullable(),
        avatar: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
            .optional()
            .nullable(),
        provider: z
            .union([
                z.lazy(() => EnumProviderFilterObjectSchema),
                z.lazy(() => ProviderSchema),
            ])
            .optional(),
        login_level: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        created_at: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
            .optional(),
        updated_at: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
            .optional(),
    })
    .strict();

export const UserWhereInputObjectSchema = Schema;
