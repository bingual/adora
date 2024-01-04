import { z } from 'zod';
import { Brand_groupOrderByWithRelationInputObjectSchema } from './objects/Brand_groupOrderByWithRelationInput.schema';
import { Brand_groupWhereInputObjectSchema } from './objects/Brand_groupWhereInput.schema';
import { Brand_groupWhereUniqueInputObjectSchema } from './objects/Brand_groupWhereUniqueInput.schema';
import { Brand_groupScalarFieldEnumSchema } from './enums/Brand_groupScalarFieldEnum.schema';

export const Brand_groupFindFirstSchema = z.object({
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
    distinct: z.array(Brand_groupScalarFieldEnumSchema).optional(),
});
