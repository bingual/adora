import { z } from 'zod';
import { BrandUpdateWithoutProductsInputObjectSchema } from './BrandUpdateWithoutProductsInput.schema';
import { BrandUncheckedUpdateWithoutProductsInputObjectSchema } from './BrandUncheckedUpdateWithoutProductsInput.schema';
import { BrandCreateWithoutProductsInputObjectSchema } from './BrandCreateWithoutProductsInput.schema';
import { BrandUncheckedCreateWithoutProductsInputObjectSchema } from './BrandUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandUpsertWithoutProductsInput> = z
    .object({
        update: z.union([
            z.lazy(() => BrandUpdateWithoutProductsInputObjectSchema),
            z.lazy(() => BrandUncheckedUpdateWithoutProductsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BrandCreateWithoutProductsInputObjectSchema),
            z.lazy(() => BrandUncheckedCreateWithoutProductsInputObjectSchema),
        ]),
    })
    .strict();

export const BrandUpsertWithoutProductsInputObjectSchema = Schema;
