import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema';
import { Brand_groupOrderByRelationAggregateInputObjectSchema } from './Brand_groupOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandOrderByWithRelationInput> = z
    .object({
        idx: z.lazy(() => SortOrderSchema).optional(),
        brand_name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        thumbnail: z.lazy(() => SortOrderSchema).optional(),
        created_at: z.lazy(() => SortOrderSchema).optional(),
        updated_at: z.lazy(() => SortOrderSchema).optional(),
        Products: z
            .lazy(() => ProductOrderByRelationAggregateInputObjectSchema)
            .optional(),
        brand_groups: z
            .lazy(() => Brand_groupOrderByRelationAggregateInputObjectSchema)
            .optional(),
    })
    .strict();

export const BrandOrderByWithRelationInputObjectSchema = Schema;
