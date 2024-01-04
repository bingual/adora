import { z } from 'zod';
import { BrandWhereUniqueInputObjectSchema } from './BrandWhereUniqueInput.schema';
import { BrandCreateWithoutProductsInputObjectSchema } from './BrandCreateWithoutProductsInput.schema';
import { BrandUncheckedCreateWithoutProductsInputObjectSchema } from './BrandUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandCreateOrConnectWithoutProductsInput> = z
    .object({
        where: z.lazy(() => BrandWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BrandCreateWithoutProductsInputObjectSchema),
            z.lazy(() => BrandUncheckedCreateWithoutProductsInputObjectSchema),
        ]),
    })
    .strict();

export const BrandCreateOrConnectWithoutProductsInputObjectSchema = Schema;
