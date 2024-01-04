import { z } from 'zod';
import { BrandCreateInputObjectSchema } from './objects/BrandCreateInput.schema';
import { BrandUncheckedCreateInputObjectSchema } from './objects/BrandUncheckedCreateInput.schema';

export const BrandCreateOneSchema = z.object({
    data: z.union([
        BrandCreateInputObjectSchema,
        BrandUncheckedCreateInputObjectSchema,
    ]),
});
