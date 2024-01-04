import { z } from 'zod';
import { Brand_groupCreateManyInputObjectSchema } from './objects/Brand_groupCreateManyInput.schema';

export const Brand_groupCreateManySchema = z.object({
    data: z.union([
        Brand_groupCreateManyInputObjectSchema,
        z.array(Brand_groupCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
});
