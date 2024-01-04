import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutBrandInputObjectSchema } from './ProductUpdateWithoutBrandInput.schema';
import { ProductUncheckedUpdateWithoutBrandInputObjectSchema } from './ProductUncheckedUpdateWithoutBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutBrandInput> =
    z
        .object({
            where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
            data: z.union([
                z.lazy(() => ProductUpdateWithoutBrandInputObjectSchema),
                z.lazy(
                    () => ProductUncheckedUpdateWithoutBrandInputObjectSchema,
                ),
            ]),
        })
        .strict();

export const ProductUpdateWithWhereUniqueWithoutBrandInputObjectSchema = Schema;
