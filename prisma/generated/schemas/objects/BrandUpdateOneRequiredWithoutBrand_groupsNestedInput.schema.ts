import { z } from 'zod';
import { BrandCreateWithoutBrand_groupsInputObjectSchema } from './BrandCreateWithoutBrand_groupsInput.schema';
import { BrandUncheckedCreateWithoutBrand_groupsInputObjectSchema } from './BrandUncheckedCreateWithoutBrand_groupsInput.schema';
import { BrandCreateOrConnectWithoutBrand_groupsInputObjectSchema } from './BrandCreateOrConnectWithoutBrand_groupsInput.schema';
import { BrandUpsertWithoutBrand_groupsInputObjectSchema } from './BrandUpsertWithoutBrand_groupsInput.schema';
import { BrandWhereUniqueInputObjectSchema } from './BrandWhereUniqueInput.schema';
import { BrandUpdateWithoutBrand_groupsInputObjectSchema } from './BrandUpdateWithoutBrand_groupsInput.schema';
import { BrandUncheckedUpdateWithoutBrand_groupsInputObjectSchema } from './BrandUncheckedUpdateWithoutBrand_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandUpdateOneRequiredWithoutBrand_groupsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () => BrandCreateWithoutBrand_groupsInputObjectSchema,
                    ),
                    z.lazy(
                        () =>
                            BrandUncheckedCreateWithoutBrand_groupsInputObjectSchema,
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () =>
                        BrandCreateOrConnectWithoutBrand_groupsInputObjectSchema,
                )
                .optional(),
            upsert: z
                .lazy(() => BrandUpsertWithoutBrand_groupsInputObjectSchema)
                .optional(),
            connect: z.lazy(() => BrandWhereUniqueInputObjectSchema).optional(),
            update: z
                .union([
                    z.lazy(
                        () => BrandUpdateWithoutBrand_groupsInputObjectSchema,
                    ),
                    z.lazy(
                        () =>
                            BrandUncheckedUpdateWithoutBrand_groupsInputObjectSchema,
                    ),
                ])
                .optional(),
        })
        .strict();

export const BrandUpdateOneRequiredWithoutBrand_groupsNestedInputObjectSchema =
    Schema;
