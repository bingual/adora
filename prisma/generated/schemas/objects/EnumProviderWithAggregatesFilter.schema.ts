import { z } from 'zod';
import { ProviderSchema } from '../enums/Provider.schema';
import { NestedEnumProviderWithAggregatesFilterObjectSchema } from './NestedEnumProviderWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumProviderFilterObjectSchema } from './NestedEnumProviderFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumProviderWithAggregatesFilter> = z
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
                z.lazy(
                    () => NestedEnumProviderWithAggregatesFilterObjectSchema,
                ),
            ])
            .optional(),
        _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
        _min: z.lazy(() => NestedEnumProviderFilterObjectSchema).optional(),
        _max: z.lazy(() => NestedEnumProviderFilterObjectSchema).optional(),
    })
    .strict();

export const EnumProviderWithAggregatesFilterObjectSchema = Schema;
