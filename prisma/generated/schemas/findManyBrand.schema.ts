import { z } from 'zod';
import { BrandOrderByWithRelationInputObjectSchema } from './objects/BrandOrderByWithRelationInput.schema';
import { BrandWhereInputObjectSchema } from './objects/BrandWhereInput.schema';
import { BrandWhereUniqueInputObjectSchema } from './objects/BrandWhereUniqueInput.schema';
import { BrandScalarFieldEnumSchema } from './enums/BrandScalarFieldEnum.schema';

export const BrandFindManySchema = z.object({
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
    distinct: z.array(BrandScalarFieldEnumSchema).optional(),
});
