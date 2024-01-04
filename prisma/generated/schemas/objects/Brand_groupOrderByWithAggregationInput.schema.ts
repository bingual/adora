import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { Brand_groupCountOrderByAggregateInputObjectSchema } from './Brand_groupCountOrderByAggregateInput.schema';
import { Brand_groupAvgOrderByAggregateInputObjectSchema } from './Brand_groupAvgOrderByAggregateInput.schema';
import { Brand_groupMaxOrderByAggregateInputObjectSchema } from './Brand_groupMaxOrderByAggregateInput.schema';
import { Brand_groupMinOrderByAggregateInputObjectSchema } from './Brand_groupMinOrderByAggregateInput.schema';
import { Brand_groupSumOrderByAggregateInputObjectSchema } from './Brand_groupSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupOrderByWithAggregationInput> = z
    .object({
        idx: z.lazy(() => SortOrderSchema).optional(),
        brand_name: z.lazy(() => SortOrderSchema).optional(),
        thumbnail: z.lazy(() => SortOrderSchema).optional(),
        created_at: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => Brand_groupCountOrderByAggregateInputObjectSchema)
            .optional(),
        _avg: z
            .lazy(() => Brand_groupAvgOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => Brand_groupMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => Brand_groupMinOrderByAggregateInputObjectSchema)
            .optional(),
        _sum: z
            .lazy(() => Brand_groupSumOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict();

export const Brand_groupOrderByWithAggregationInputObjectSchema = Schema;
