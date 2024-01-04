import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema';
import { Brand_groupListRelationFilterObjectSchema } from './Brand_groupListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => BrandWhereInputObjectSchema),
                z.lazy(() => BrandWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => BrandWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => BrandWhereInputObjectSchema),
                z.lazy(() => BrandWhereInputObjectSchema).array(),
            ])
            .optional(),
        idx: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        brand_name: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        description: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        thumbnail: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        created_at: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
            .optional(),
        updated_at: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
            .optional(),
        Products: z
            .lazy(() => ProductListRelationFilterObjectSchema)
            .optional(),
        brand_groups: z
            .lazy(() => Brand_groupListRelationFilterObjectSchema)
            .optional(),
    })
    .strict();

export const BrandWhereInputObjectSchema = Schema;
