import { z } from 'zod';
import { BrandWhereInputObjectSchema } from './objects/BrandWhereInput.schema';
import { BrandOrderByWithAggregationInputObjectSchema } from './objects/BrandOrderByWithAggregationInput.schema';
import { BrandScalarWhereWithAggregatesInputObjectSchema } from './objects/BrandScalarWhereWithAggregatesInput.schema';
import { BrandScalarFieldEnumSchema } from './enums/BrandScalarFieldEnum.schema';

export const BrandGroupBySchema = z.object({
    where: BrandWhereInputObjectSchema.optional(),
    orderBy: z
        .union([
            BrandOrderByWithAggregationInputObjectSchema,
            BrandOrderByWithAggregationInputObjectSchema.array(),
        ])
        .optional(),
    having: BrandScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(BrandScalarFieldEnumSchema),
});
