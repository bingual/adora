import { z } from 'zod';
import { BrandCreateNestedOneWithoutBrand_groupsInputObjectSchema } from './BrandCreateNestedOneWithoutBrand_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupCreateInput> = z
    .object({
        thumbnail: z.string(),
        created_at: z.coerce.date().optional(),
        brand: z.lazy(
            () => BrandCreateNestedOneWithoutBrand_groupsInputObjectSchema,
        ),
    })
    .strict();

export const Brand_groupCreateInputObjectSchema = Schema;
