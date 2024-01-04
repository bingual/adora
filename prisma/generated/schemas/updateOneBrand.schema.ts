import { z } from 'zod';
import { BrandUpdateInputObjectSchema } from './objects/BrandUpdateInput.schema';
import { BrandUncheckedUpdateInputObjectSchema } from './objects/BrandUncheckedUpdateInput.schema';
import { BrandWhereUniqueInputObjectSchema } from './objects/BrandWhereUniqueInput.schema';

export const BrandUpdateOneSchema = z.object({
    data: z.union([
        BrandUpdateInputObjectSchema,
        BrandUncheckedUpdateInputObjectSchema,
    ]),
    where: BrandWhereUniqueInputObjectSchema,
});
