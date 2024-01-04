import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupUncheckedUpdateManyWithoutBrand_groupsInput> =
    z
        .object({
            idx: z
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
            created_at: z
                .union([
                    z.coerce.date(),
                    z.lazy(
                        () => DateTimeFieldUpdateOperationsInputObjectSchema,
                    ),
                ])
                .optional(),
        })
        .strict();

export const Brand_groupUncheckedUpdateManyWithoutBrand_groupsInputObjectSchema =
    Schema;
