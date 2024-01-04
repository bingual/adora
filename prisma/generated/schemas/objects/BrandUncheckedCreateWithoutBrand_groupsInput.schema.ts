import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutBrandInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandUncheckedCreateWithoutBrand_groupsInput> = z
    .object({
        idx: z.number().optional(),
        brand_name: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        created_at: z.coerce.date().optional(),
        updated_at: z.coerce.date().optional(),
        Products: z
            .lazy(
                () =>
                    ProductUncheckedCreateNestedManyWithoutBrandInputObjectSchema,
            )
            .optional(),
    })
    .strict();

export const BrandUncheckedCreateWithoutBrand_groupsInputObjectSchema = Schema;
