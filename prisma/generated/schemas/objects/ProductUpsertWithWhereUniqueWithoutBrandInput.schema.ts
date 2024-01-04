import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutBrandInputObjectSchema } from './ProductUpdateWithoutBrandInput.schema';
import { ProductUncheckedUpdateWithoutBrandInputObjectSchema } from './ProductUncheckedUpdateWithoutBrandInput.schema';
import { ProductCreateWithoutBrandInputObjectSchema } from './ProductCreateWithoutBrandInput.schema';
import { ProductUncheckedCreateWithoutBrandInputObjectSchema } from './ProductUncheckedCreateWithoutBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutBrandInput> =
    z
        .object({
            where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(() => ProductUpdateWithoutBrandInputObjectSchema),
                z.lazy(
                    () => ProductUncheckedUpdateWithoutBrandInputObjectSchema,
                ),
            ]),
            create: z.union([
                z.lazy(() => ProductCreateWithoutBrandInputObjectSchema),
                z.lazy(
                    () => ProductUncheckedCreateWithoutBrandInputObjectSchema,
                ),
            ]),
        })
        .strict();

export const ProductUpsertWithWhereUniqueWithoutBrandInputObjectSchema = Schema;
