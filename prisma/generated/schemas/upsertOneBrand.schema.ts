import { z } from 'zod';
import { BrandWhereUniqueInputObjectSchema } from './objects/BrandWhereUniqueInput.schema';
import { BrandCreateInputObjectSchema } from './objects/BrandCreateInput.schema';
import { BrandUncheckedCreateInputObjectSchema } from './objects/BrandUncheckedCreateInput.schema';
import { BrandUpdateInputObjectSchema } from './objects/BrandUpdateInput.schema';
import { BrandUncheckedUpdateInputObjectSchema } from './objects/BrandUncheckedUpdateInput.schema';

export const BrandUpsertSchema = z.object({
    where: BrandWhereUniqueInputObjectSchema,
    create: z.union([
        BrandCreateInputObjectSchema,
        BrandUncheckedCreateInputObjectSchema,
    ]),
    update: z.union([
        BrandUpdateInputObjectSchema,
        BrandUncheckedUpdateInputObjectSchema,
    ]),
});
