import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ProductScalarWhereInputObjectSchema),
                z.lazy(() => ProductScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => ProductScalarWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ProductScalarWhereInputObjectSchema),
                z.lazy(() => ProductScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        idx: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        brand_name: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        product_name: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        off_rate: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        price: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        origin_price: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        thumbnail: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        category: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
            .optional()
            .nullable(),
        stock_quantity: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        views: z
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

export const ProductScalarWhereInputObjectSchema = Schema;
