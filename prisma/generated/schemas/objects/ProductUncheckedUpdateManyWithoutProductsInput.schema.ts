import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutProductsInput> =
    z
        .object({
            idx: z
                .union([
                    z.number(),
                    z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            product_name: z
                .union([
                    z.string(),
                    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            off_rate: z
                .union([
                    z.number(),
                    z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            price: z
                .union([
                    z.number(),
                    z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            origin_price: z
                .union([
                    z.number(),
                    z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            thumbnail: z
                .union([
                    z.string(),
                    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            category: z
                .union([
                    z.string(),
                    z.lazy(
                        () =>
                            NullableStringFieldUpdateOperationsInputObjectSchema,
                    ),
                ])
                .optional()
                .nullable(),
            stock_quantity: z
                .union([
                    z.number(),
                    z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            views: z
                .union([
                    z.number(),
                    z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            created_at: z
                .union([
                    z.coerce.date(),
                    z.lazy(
                        () => DateTimeFieldUpdateOperationsInputObjectSchema,
                    ),
                ])
                .optional(),
            updated_at: z
                .union([
                    z.coerce.date(),
                    z.lazy(
                        () => DateTimeFieldUpdateOperationsInputObjectSchema,
                    ),
                ])
                .optional(),
        })
        .strict();

export const ProductUncheckedUpdateManyWithoutProductsInputObjectSchema =
    Schema;
