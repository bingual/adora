import { z } from 'zod';
import { BrandCreateWithoutProductsInputObjectSchema } from './BrandCreateWithoutProductsInput.schema';
import { BrandUncheckedCreateWithoutProductsInputObjectSchema } from './BrandUncheckedCreateWithoutProductsInput.schema';
import { BrandCreateOrConnectWithoutProductsInputObjectSchema } from './BrandCreateOrConnectWithoutProductsInput.schema';
import { BrandUpsertWithoutProductsInputObjectSchema } from './BrandUpsertWithoutProductsInput.schema';
import { BrandWhereUniqueInputObjectSchema } from './BrandWhereUniqueInput.schema';
import { BrandUpdateWithoutProductsInputObjectSchema } from './BrandUpdateWithoutProductsInput.schema';
import { BrandUncheckedUpdateWithoutProductsInputObjectSchema } from './BrandUncheckedUpdateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandUpdateOneRequiredWithoutProductsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BrandCreateWithoutProductsInputObjectSchema),
                    z.lazy(
                        () =>
                            BrandUncheckedCreateWithoutProductsInputObjectSchema,
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () => BrandCreateOrConnectWithoutProductsInputObjectSchema,
                )
                .optional(),
            upsert: z
                .lazy(() => BrandUpsertWithoutProductsInputObjectSchema)
                .optional(),
            connect: z.lazy(() => BrandWhereUniqueInputObjectSchema).optional(),
            update: z
                .union([
                    z.lazy(() => BrandUpdateWithoutProductsInputObjectSchema),
                    z.lazy(
                        () =>
                            BrandUncheckedUpdateWithoutProductsInputObjectSchema,
                    ),
                ])
                .optional(),
        })
        .strict();

export const BrandUpdateOneRequiredWithoutProductsNestedInputObjectSchema =
    Schema;
