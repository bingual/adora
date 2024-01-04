import { z } from 'zod';
import { Brand_groupWhereInputObjectSchema } from './objects/Brand_groupWhereInput.schema';
import { Brand_groupOrderByWithAggregationInputObjectSchema } from './objects/Brand_groupOrderByWithAggregationInput.schema';
import { Brand_groupScalarWhereWithAggregatesInputObjectSchema } from './objects/Brand_groupScalarWhereWithAggregatesInput.schema';
import { Brand_groupScalarFieldEnumSchema } from './enums/Brand_groupScalarFieldEnum.schema';

export const Brand_groupGroupBySchema = z.object({
    where: Brand_groupWhereInputObjectSchema.optional(),
    orderBy: z
        .union([
            Brand_groupOrderByWithAggregationInputObjectSchema,
            Brand_groupOrderByWithAggregationInputObjectSchema.array(),
        ])
        .optional(),
    having: Brand_groupScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(Brand_groupScalarFieldEnumSchema),
});
