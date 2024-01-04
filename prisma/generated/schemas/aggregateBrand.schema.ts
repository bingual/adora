import { z } from 'zod';
import { BrandOrderByWithRelationInputObjectSchema } from './objects/BrandOrderByWithRelationInput.schema';
import { BrandWhereInputObjectSchema } from './objects/BrandWhereInput.schema';
import { BrandWhereUniqueInputObjectSchema } from './objects/BrandWhereUniqueInput.schema';
import { BrandCountAggregateInputObjectSchema } from './objects/BrandCountAggregateInput.schema';
import { BrandMinAggregateInputObjectSchema } from './objects/BrandMinAggregateInput.schema';
import { BrandMaxAggregateInputObjectSchema } from './objects/BrandMaxAggregateInput.schema';
import { BrandAvgAggregateInputObjectSchema } from './objects/BrandAvgAggregateInput.schema';
import { BrandSumAggregateInputObjectSchema } from './objects/BrandSumAggregateInput.schema';

export const BrandAggregateSchema = z.object({
    orderBy: z
        .union([
            BrandOrderByWithRelationInputObjectSchema,
            BrandOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
    where: BrandWhereInputObjectSchema.optional(),
    cursor: BrandWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
        .union([z.literal(true), BrandCountAggregateInputObjectSchema])
        .optional(),
    _min: BrandMinAggregateInputObjectSchema.optional(),
    _max: BrandMaxAggregateInputObjectSchema.optional(),
    _avg: BrandAvgAggregateInputObjectSchema.optional(),
    _sum: BrandSumAggregateInputObjectSchema.optional(),
});
