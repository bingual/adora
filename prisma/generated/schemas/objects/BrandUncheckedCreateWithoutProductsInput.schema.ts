import { z } from 'zod';
import { Brand_groupUncheckedCreateNestedManyWithoutBrandInputObjectSchema } from './Brand_groupUncheckedCreateNestedManyWithoutBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandUncheckedCreateWithoutProductsInput> = z
    .object({
        idx: z.number().optional(),
        brand_name: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        created_at: z.coerce.date().optional(),
        updated_at: z.coerce.date().optional(),
        brand_groups: z
            .lazy(
                () =>
                    Brand_groupUncheckedCreateNestedManyWithoutBrandInputObjectSchema,
            )
            .optional(),
    })
    .strict();

export const BrandUncheckedCreateWithoutProductsInputObjectSchema = Schema;
