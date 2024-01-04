import { z } from 'zod';
import { Brand_groupWhereUniqueInputObjectSchema } from './objects/Brand_groupWhereUniqueInput.schema';

export const Brand_groupDeleteOneSchema = z.object({
    where: Brand_groupWhereUniqueInputObjectSchema,
});
