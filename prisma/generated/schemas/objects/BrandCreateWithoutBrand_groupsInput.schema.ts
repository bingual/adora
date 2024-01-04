import { z } from 'zod';
import { ProductCreateNestedManyWithoutBrandInputObjectSchema } from './ProductCreateNestedManyWithoutBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandCreateWithoutBrand_groupsInput> = z
    .object({
        brand_name: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        created_at: z.coerce.date().optional(),
        updated_at: z.coerce.date().optional(),
        Products: z
            .lazy(() => ProductCreateNestedManyWithoutBrandInputObjectSchema)
            .optional(),
    })
    .strict();

export const BrandCreateWithoutBrand_groupsInputObjectSchema = Schema;
