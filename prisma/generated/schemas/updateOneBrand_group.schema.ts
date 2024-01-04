import { z } from 'zod';
import { Brand_groupUpdateInputObjectSchema } from './objects/Brand_groupUpdateInput.schema';
import { Brand_groupUncheckedUpdateInputObjectSchema } from './objects/Brand_groupUncheckedUpdateInput.schema';
import { Brand_groupWhereUniqueInputObjectSchema } from './objects/Brand_groupWhereUniqueInput.schema';

export const Brand_groupUpdateOneSchema = z.object({
    data: z.union([
        Brand_groupUpdateInputObjectSchema,
        Brand_groupUncheckedUpdateInputObjectSchema,
    ]),
    where: Brand_groupWhereUniqueInputObjectSchema,
});
