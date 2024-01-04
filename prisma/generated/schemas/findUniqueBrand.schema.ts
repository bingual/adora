import { z } from 'zod';
import { BrandWhereUniqueInputObjectSchema } from './objects/BrandWhereUniqueInput.schema';

export const BrandFindUniqueSchema = z.object({
    where: BrandWhereUniqueInputObjectSchema,
});
