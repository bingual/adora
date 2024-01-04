import { z } from 'zod';
import { Brand_groupWhereInputObjectSchema } from './Brand_groupWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupListRelationFilter> = z
    .object({
        every: z.lazy(() => Brand_groupWhereInputObjectSchema).optional(),
        some: z.lazy(() => Brand_groupWhereInputObjectSchema).optional(),
        none: z.lazy(() => Brand_groupWhereInputObjectSchema).optional(),
    })
    .strict();

export const Brand_groupListRelationFilterObjectSchema = Schema;
