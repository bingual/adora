import { z } from 'zod';
import { BrandCreateWithoutProductsInputObjectSchema } from './BrandCreateWithoutProductsInput.schema';
import { BrandUncheckedCreateWithoutProductsInputObjectSchema } from './BrandUncheckedCreateWithoutProductsInput.schema';
import { BrandCreateOrConnectWithoutProductsInputObjectSchema } from './BrandCreateOrConnectWithoutProductsInput.schema';
import { BrandWhereUniqueInputObjectSchema } from './BrandWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandCreateNestedOneWithoutProductsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => BrandCreateWithoutProductsInputObjectSchema),
                z.lazy(
                    () => BrandUncheckedCreateWithoutProductsInputObjectSchema,
                ),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => BrandCreateOrConnectWithoutProductsInputObjectSchema)
            .optional(),
        connect: z.lazy(() => BrandWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const BrandCreateNestedOneWithoutProductsInputObjectSchema = Schema;
