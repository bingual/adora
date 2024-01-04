import { z } from 'zod';
import { BrandWhereInputObjectSchema } from './BrandWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandRelationFilter> = z
    .object({
        is: z
            .lazy(() => BrandWhereInputObjectSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => BrandWhereInputObjectSchema)
            .optional()
            .nullable(),
    })
    .strict();

export const BrandRelationFilterObjectSchema = Schema;
