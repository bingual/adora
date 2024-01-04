import { z } from 'zod';
import { ProductCreateWithoutBrandInputObjectSchema } from './ProductCreateWithoutBrandInput.schema';
import { ProductUncheckedCreateWithoutBrandInputObjectSchema } from './ProductUncheckedCreateWithoutBrandInput.schema';
import { ProductCreateOrConnectWithoutBrandInputObjectSchema } from './ProductCreateOrConnectWithoutBrandInput.schema';
import { ProductCreateManyBrandInputEnvelopeObjectSchema } from './ProductCreateManyBrandInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedManyWithoutBrandInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ProductCreateWithoutBrandInputObjectSchema),
                z
                    .lazy(() => ProductCreateWithoutBrandInputObjectSchema)
                    .array(),
                z.lazy(
                    () => ProductUncheckedCreateWithoutBrandInputObjectSchema,
                ),
                z
                    .lazy(
                        () =>
                            ProductUncheckedCreateWithoutBrandInputObjectSchema,
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () => ProductCreateOrConnectWithoutBrandInputObjectSchema,
                ),
                z
                    .lazy(
                        () =>
                            ProductCreateOrConnectWithoutBrandInputObjectSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => ProductCreateManyBrandInputEnvelopeObjectSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => ProductWhereUniqueInputObjectSchema),
                z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict();

export const ProductCreateNestedManyWithoutBrandInputObjectSchema = Schema;
