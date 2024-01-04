import { z } from 'zod';
import { Brand_groupUpdateManyMutationInputObjectSchema } from './objects/Brand_groupUpdateManyMutationInput.schema';
import { Brand_groupWhereInputObjectSchema } from './objects/Brand_groupWhereInput.schema';

export const Brand_groupUpdateManySchema = z.object({
    data: Brand_groupUpdateManyMutationInputObjectSchema,
    where: Brand_groupWhereInputObjectSchema.optional(),
});
