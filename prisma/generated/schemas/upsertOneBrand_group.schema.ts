import { z } from 'zod';
import { Brand_groupWhereUniqueInputObjectSchema } from './objects/Brand_groupWhereUniqueInput.schema';
import { Brand_groupCreateInputObjectSchema } from './objects/Brand_groupCreateInput.schema';
import { Brand_groupUncheckedCreateInputObjectSchema } from './objects/Brand_groupUncheckedCreateInput.schema';
import { Brand_groupUpdateInputObjectSchema } from './objects/Brand_groupUpdateInput.schema';
import { Brand_groupUncheckedUpdateInputObjectSchema } from './objects/Brand_groupUncheckedUpdateInput.schema';

export const Brand_groupUpsertSchema = z.object({
    where: Brand_groupWhereUniqueInputObjectSchema,
    create: z.union([
        Brand_groupCreateInputObjectSchema,
        Brand_groupUncheckedCreateInputObjectSchema,
    ]),
    update: z.union([
        Brand_groupUpdateInputObjectSchema,
        Brand_groupUncheckedUpdateInputObjectSchema,
    ]),
});
