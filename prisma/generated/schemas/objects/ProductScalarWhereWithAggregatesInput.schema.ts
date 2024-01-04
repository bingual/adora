import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(
                        () => ProductScalarWhereWithAggregatesInputObjectSchema,
                    )
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(
                        () => ProductScalarWhereWithAggregatesInputObjectSchema,
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
        product_name: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        off_rate: z
            .union([
                z.lazy(() => IntWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
        price: z
            .union([
                z.lazy(() => IntWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
        origin_price: z
            .union([
                z.lazy(() => IntWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
        thumbnail: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        category: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
        stock_quantity: z
            .union([
                z.lazy(() => IntWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
        views: z
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

export const ProductScalarWhereWithAggregatesInputObjectSchema = Schema;
