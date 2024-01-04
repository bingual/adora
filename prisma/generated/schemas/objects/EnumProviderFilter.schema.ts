import { z } from 'zod';
import { ProviderSchema } from '../enums/Provider.schema';
import { NestedEnumProviderFilterObjectSchema } from './NestedEnumProviderFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumProviderFilter> = z
    .object({
        equals: z.lazy(() => ProviderSchema).optional(),
        in: z
            .union([
                z.lazy(() => ProviderSchema).array(),
                z.lazy(() => ProviderSchema),
            ])
            .optional(),
        notIn: z
            .union([
                z.lazy(() => ProviderSchema).array(),
                z.lazy(() => ProviderSchema),
            ])
            .optional(),
        not: z
            .union([
                z.lazy(() => ProviderSchema),
                z.lazy(() => NestedEnumProviderFilterObjectSchema),
            ])
            .optional(),
    })
    .strict();

export const EnumProviderFilterObjectSchema = Schema;
