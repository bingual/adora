import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUpdateManyWithoutBrandNestedInputObjectSchema } from './ProductUpdateManyWithoutBrandNestedInput.schema';
import { Brand_groupUpdateManyWithoutBrandNestedInputObjectSchema } from './Brand_groupUpdateManyWithoutBrandNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandUpdateInput> = z
    .object({
        brand_name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        description: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
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
        updated_at: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        Products: z
            .lazy(() => ProductUpdateManyWithoutBrandNestedInputObjectSchema)
            .optional(),
        brand_groups: z
            .lazy(
                () => Brand_groupUpdateManyWithoutBrandNestedInputObjectSchema,
            )
            .optional(),
    })
    .strict();

export const BrandUpdateInputObjectSchema = Schema;
