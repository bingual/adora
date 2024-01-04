import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => BrandScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(() => BrandScalarWhereWithAggregatesInputObjectSchema)
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => BrandScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => BrandScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(() => BrandScalarWhereWithAggregatesInputObjectSchema)
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
        description: z
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
        updated_at: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
                z.coerce.date(),
            ])
            .optional(),
    })
    .strict();

export const BrandScalarWhereWithAggregatesInputObjectSchema = Schema;
