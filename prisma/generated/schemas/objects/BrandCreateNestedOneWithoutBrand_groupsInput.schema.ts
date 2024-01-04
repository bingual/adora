import { z } from 'zod';
import { BrandCreateWithoutBrand_groupsInputObjectSchema } from './BrandCreateWithoutBrand_groupsInput.schema';
import { BrandUncheckedCreateWithoutBrand_groupsInputObjectSchema } from './BrandUncheckedCreateWithoutBrand_groupsInput.schema';
import { BrandCreateOrConnectWithoutBrand_groupsInputObjectSchema } from './BrandCreateOrConnectWithoutBrand_groupsInput.schema';
import { BrandWhereUniqueInputObjectSchema } from './BrandWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandCreateNestedOneWithoutBrand_groupsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => BrandCreateWithoutBrand_groupsInputObjectSchema),
                z.lazy(
                    () =>
                        BrandUncheckedCreateWithoutBrand_groupsInputObjectSchema,
                ),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(
                () => BrandCreateOrConnectWithoutBrand_groupsInputObjectSchema,
            )
            .optional(),
        connect: z.lazy(() => BrandWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const BrandCreateNestedOneWithoutBrand_groupsInputObjectSchema = Schema;
