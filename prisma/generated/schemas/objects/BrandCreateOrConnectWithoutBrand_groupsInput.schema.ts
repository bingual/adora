import { z } from 'zod';
import { BrandWhereUniqueInputObjectSchema } from './BrandWhereUniqueInput.schema';
import { BrandCreateWithoutBrand_groupsInputObjectSchema } from './BrandCreateWithoutBrand_groupsInput.schema';
import { BrandUncheckedCreateWithoutBrand_groupsInputObjectSchema } from './BrandUncheckedCreateWithoutBrand_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandCreateOrConnectWithoutBrand_groupsInput> = z
    .object({
        where: z.lazy(() => BrandWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BrandCreateWithoutBrand_groupsInputObjectSchema),
            z.lazy(
                () => BrandUncheckedCreateWithoutBrand_groupsInputObjectSchema,
            ),
        ]),
    })
    .strict();

export const BrandCreateOrConnectWithoutBrand_groupsInputObjectSchema = Schema;
