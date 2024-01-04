import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductCountOrderByAggregateInputObjectSchema } from './ProductCountOrderByAggregateInput.schema';
import { ProductAvgOrderByAggregateInputObjectSchema } from './ProductAvgOrderByAggregateInput.schema';
import { ProductMaxOrderByAggregateInputObjectSchema } from './ProductMaxOrderByAggregateInput.schema';
import { ProductMinOrderByAggregateInputObjectSchema } from './ProductMinOrderByAggregateInput.schema';
import { ProductSumOrderByAggregateInputObjectSchema } from './ProductSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z
    .object({
        idx: z.lazy(() => SortOrderSchema).optional(),
        brand_name: z.lazy(() => SortOrderSchema).optional(),
        product_name: z.lazy(() => SortOrderSchema).optional(),
        off_rate: z.lazy(() => SortOrderSchema).optional(),
        price: z.lazy(() => SortOrderSchema).optional(),
        origin_price: z.lazy(() => SortOrderSchema).optional(),
        thumbnail: z.lazy(() => SortOrderSchema).optional(),
        category: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputObjectSchema),
            ])
            .optional(),
        stock_quantity: z.lazy(() => SortOrderSchema).optional(),
        views: z.lazy(() => SortOrderSchema).optional(),
        created_at: z.lazy(() => SortOrderSchema).optional(),
        updated_at: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => ProductCountOrderByAggregateInputObjectSchema)
            .optional(),
        _avg: z
            .lazy(() => ProductAvgOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => ProductMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => ProductMinOrderByAggregateInputObjectSchema)
            .optional(),
        _sum: z
            .lazy(() => ProductSumOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict();

export const ProductOrderByWithAggregationInputObjectSchema = Schema;
