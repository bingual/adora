import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BrandRelationFilterObjectSchema } from './BrandRelationFilter.schema';
import { BrandWhereInputObjectSchema } from './BrandWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => Brand_groupWhereInputObjectSchema),
                z.lazy(() => Brand_groupWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => Brand_groupWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => Brand_groupWhereInputObjectSchema),
                z.lazy(() => Brand_groupWhereInputObjectSchema).array(),
            ])
            .optional(),
        idx: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        brand_name: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        thumbnail: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        created_at: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
            .optional(),
        brand: z
            .union([
                z.lazy(() => BrandRelationFilterObjectSchema),
                z.lazy(() => BrandWhereInputObjectSchema),
            ])
            .optional(),
    })
    .strict();

export const Brand_groupWhereInputObjectSchema = Schema;
