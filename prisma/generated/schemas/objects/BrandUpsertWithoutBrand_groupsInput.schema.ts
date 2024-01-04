import { z } from 'zod';
import { BrandUpdateWithoutBrand_groupsInputObjectSchema } from './BrandUpdateWithoutBrand_groupsInput.schema';
import { BrandUncheckedUpdateWithoutBrand_groupsInputObjectSchema } from './BrandUncheckedUpdateWithoutBrand_groupsInput.schema';
import { BrandCreateWithoutBrand_groupsInputObjectSchema } from './BrandCreateWithoutBrand_groupsInput.schema';
import { BrandUncheckedCreateWithoutBrand_groupsInputObjectSchema } from './BrandUncheckedCreateWithoutBrand_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandUpsertWithoutBrand_groupsInput> = z
    .object({
        update: z.union([
            z.lazy(() => BrandUpdateWithoutBrand_groupsInputObjectSchema),
            z.lazy(
                () => BrandUncheckedUpdateWithoutBrand_groupsInputObjectSchema,
            ),
        ]),
        create: z.union([
            z.lazy(() => BrandCreateWithoutBrand_groupsInputObjectSchema),
            z.lazy(
                () => BrandUncheckedCreateWithoutBrand_groupsInputObjectSchema,
            ),
        ]),
    })
    .strict();

export const BrandUpsertWithoutBrand_groupsInputObjectSchema = Schema;
