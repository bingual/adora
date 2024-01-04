import { z } from 'zod';
import { ProviderSchema } from '../enums/Provider.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumProviderFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => ProviderSchema).optional(),
    })
    .strict();

export const EnumProviderFieldUpdateOperationsInputObjectSchema = Schema;
