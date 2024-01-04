import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BrandCountOrderByAggregateInputObjectSchema } from './BrandCountOrderByAggregateInput.schema';
import { BrandAvgOrderByAggregateInputObjectSchema } from './BrandAvgOrderByAggregateInput.schema';
import { BrandMaxOrderByAggregateInputObjectSchema } from './BrandMaxOrderByAggregateInput.schema';
import { BrandMinOrderByAggregateInputObjectSchema } from './BrandMinOrderByAggregateInput.schema';
import { BrandSumOrderByAggregateInputObjectSchema } from './BrandSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandOrderByWithAggregationInput> = z
    .object({
        idx: z.lazy(() => SortOrderSchema).optional(),
        brand_name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        thumbnail: z.lazy(() => SortOrderSchema).optional(),
        created_at: z.lazy(() => SortOrderSchema).optional(),
        updated_at: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => BrandCountOrderByAggregateInputObjectSchema)
            .optional(),
        _avg: z
            .lazy(() => BrandAvgOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => BrandMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => BrandMinOrderByAggregateInputObjectSchema)
            .optional(),
        _sum: z
            .lazy(() => BrandSumOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict();

export const BrandOrderByWithAggregationInputObjectSchema = Schema;
