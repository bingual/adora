import { z } from 'zod';
import { BrandWhereUniqueInputObjectSchema } from './objects/BrandWhereUniqueInput.schema';

export const BrandDeleteOneSchema = z.object({
    where: BrandWhereUniqueInputObjectSchema,
});
