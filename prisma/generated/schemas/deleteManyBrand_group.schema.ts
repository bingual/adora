import { z } from 'zod';
import { Brand_groupWhereInputObjectSchema } from './objects/Brand_groupWhereInput.schema';

export const Brand_groupDeleteManySchema = z.object({
    where: Brand_groupWhereInputObjectSchema.optional(),
});
