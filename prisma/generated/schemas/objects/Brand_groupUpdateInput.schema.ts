import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BrandUpdateOneRequiredWithoutBrand_groupsNestedInputObjectSchema } from './BrandUpdateOneRequiredWithoutBrand_groupsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupUpdateInput> = z
    .object({
        thumbnail: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        created_at: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        brand: z
            .lazy(
                () =>
                    BrandUpdateOneRequiredWithoutBrand_groupsNestedInputObjectSchema,
            )
            .optional(),
    })
    .strict();

export const Brand_groupUpdateInputObjectSchema = Schema;
