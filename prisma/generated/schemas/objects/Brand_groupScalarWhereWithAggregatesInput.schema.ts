import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(
                    () => Brand_groupScalarWhereWithAggregatesInputObjectSchema,
                ),
                z
                    .lazy(
                        () =>
                            Brand_groupScalarWhereWithAggregatesInputObjectSchema,
                    )
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => Brand_groupScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(
                    () => Brand_groupScalarWhereWithAggregatesInputObjectSchema,
                ),
                z
                    .lazy(
                        () =>
                            Brand_groupScalarWhereWithAggregatesInputObjectSchema,
                    )
                    .array(),
            ])
            .optional(),
        idx: z
            .union([
                z.lazy(() => IntWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
        brand_name: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        thumbnail: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        created_at: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
                z.coerce.date(),
            ])
            .optional(),
    })
    .strict();

export const Brand_groupScalarWhereWithAggregatesInputObjectSchema = Schema;
