import { z } from 'zod';
import { Brand_groupOrderByWithRelationInputObjectSchema } from './objects/Brand_groupOrderByWithRelationInput.schema';
import { Brand_groupWhereInputObjectSchema } from './objects/Brand_groupWhereInput.schema';
import { Brand_groupWhereUniqueInputObjectSchema } from './objects/Brand_groupWhereUniqueInput.schema';
import { Brand_groupCountAggregateInputObjectSchema } from './objects/Brand_groupCountAggregateInput.schema';
import { Brand_groupMinAggregateInputObjectSchema } from './objects/Brand_groupMinAggregateInput.schema';
import { Brand_groupMaxAggregateInputObjectSchema } from './objects/Brand_groupMaxAggregateInput.schema';
import { Brand_groupAvgAggregateInputObjectSchema } from './objects/Brand_groupAvgAggregateInput.schema';
import { Brand_groupSumAggregateInputObjectSchema } from './objects/Brand_groupSumAggregateInput.schema';

export const Brand_groupAggregateSchema = z.object({
    orderBy: z
        .union([
            Brand_groupOrderByWithRelationInputObjectSchema,
            Brand_groupOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
    where: Brand_groupWhereInputObjectSchema.optional(),
    cursor: Brand_groupWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
        .union([z.literal(true), Brand_groupCountAggregateInputObjectSchema])
        .optional(),
    _min: Brand_groupMinAggregateInputObjectSchema.optional(),
    _max: Brand_groupMaxAggregateInputObjectSchema.optional(),
    _avg: Brand_groupAvgAggregateInputObjectSchema.optional(),
    _sum: Brand_groupSumAggregateInputObjectSchema.optional(),
});
