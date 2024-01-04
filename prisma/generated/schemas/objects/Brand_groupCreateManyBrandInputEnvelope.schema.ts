import { z } from 'zod';
import { Brand_groupCreateManyBrandInputObjectSchema } from './Brand_groupCreateManyBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupCreateManyBrandInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => Brand_groupCreateManyBrandInputObjectSchema),
            z.lazy(() => Brand_groupCreateManyBrandInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const Brand_groupCreateManyBrandInputEnvelopeObjectSchema = Schema;
