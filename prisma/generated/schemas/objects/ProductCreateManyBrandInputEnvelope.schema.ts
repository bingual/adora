import { z } from 'zod';
import { ProductCreateManyBrandInputObjectSchema } from './ProductCreateManyBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateManyBrandInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ProductCreateManyBrandInputObjectSchema),
            z.lazy(() => ProductCreateManyBrandInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProductCreateManyBrandInputEnvelopeObjectSchema = Schema;
