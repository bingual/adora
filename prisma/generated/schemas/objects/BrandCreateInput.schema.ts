import { z } from 'zod';
import { ProductCreateNestedManyWithoutBrandInputObjectSchema } from './ProductCreateNestedManyWithoutBrandInput.schema';
import { Brand_groupCreateNestedManyWithoutBrandInputObjectSchema } from './Brand_groupCreateNestedManyWithoutBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandCreateInput> = z
    .object({
        brand_name: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        created_at: z.coerce.date().optional(),
        updated_at: z.coerce.date().optional(),
        Products: z
            .lazy(() => ProductCreateNestedManyWithoutBrandInputObjectSchema)
            .optional(),
        brand_groups: z
            .lazy(
                () => Brand_groupCreateNestedManyWithoutBrandInputObjectSchema,
            )
            .optional(),
    })
    .strict();

export const BrandCreateInputObjectSchema = Schema;
