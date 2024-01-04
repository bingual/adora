import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutBrandInputObjectSchema } from './ProductCreateWithoutBrandInput.schema';
import { ProductUncheckedCreateWithoutBrandInputObjectSchema } from './ProductUncheckedCreateWithoutBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutBrandInput> = z
    .object({
        where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => ProductCreateWithoutBrandInputObjectSchema),
            z.lazy(() => ProductUncheckedCreateWithoutBrandInputObjectSchema),
        ]),
    })
    .strict();

export const ProductCreateOrConnectWithoutBrandInputObjectSchema = Schema;
