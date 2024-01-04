import { z } from 'zod';
import { Brand_groupWhereUniqueInputObjectSchema } from './Brand_groupWhereUniqueInput.schema';
import { Brand_groupUpdateWithoutBrandInputObjectSchema } from './Brand_groupUpdateWithoutBrandInput.schema';
import { Brand_groupUncheckedUpdateWithoutBrandInputObjectSchema } from './Brand_groupUncheckedUpdateWithoutBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupUpdateWithWhereUniqueWithoutBrandInput> =
    z
        .object({
            where: z.lazy(() => Brand_groupWhereUniqueInputObjectSchema),
            data: z.union([
                z.lazy(() => Brand_groupUpdateWithoutBrandInputObjectSchema),
                z.lazy(
                    () =>
                        Brand_groupUncheckedUpdateWithoutBrandInputObjectSchema,
                ),
            ]),
        })
        .strict();

export const Brand_groupUpdateWithWhereUniqueWithoutBrandInputObjectSchema =
    Schema;
