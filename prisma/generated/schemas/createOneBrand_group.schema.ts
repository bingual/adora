import { z } from 'zod';
import { Brand_groupCreateInputObjectSchema } from './objects/Brand_groupCreateInput.schema';
import { Brand_groupUncheckedCreateInputObjectSchema } from './objects/Brand_groupUncheckedCreateInput.schema';

export const Brand_groupCreateOneSchema = z.object({
    data: z.union([
        Brand_groupCreateInputObjectSchema,
        Brand_groupUncheckedCreateInputObjectSchema,
    ]),
});
