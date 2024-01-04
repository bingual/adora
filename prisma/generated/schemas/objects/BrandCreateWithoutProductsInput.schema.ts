import { z } from 'zod';
import { Brand_groupCreateNestedManyWithoutBrandInputObjectSchema } from './Brand_groupCreateNestedManyWithoutBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandCreateWithoutProductsInput> = z
    .object({
        brand_name: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        created_at: z.coerce.date().optional(),
        updated_at: z.coerce.date().optional(),
        brand_groups: z
            .lazy(
                () => Brand_groupCreateNestedManyWithoutBrandInputObjectSchema,
            )
            .optional(),
    })
    .strict();

export const BrandCreateWithoutProductsInputObjectSchema = Schema;
