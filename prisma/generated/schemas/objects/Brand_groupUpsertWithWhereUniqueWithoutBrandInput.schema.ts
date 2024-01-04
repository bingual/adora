import { z } from 'zod';
import { Brand_groupWhereUniqueInputObjectSchema } from './Brand_groupWhereUniqueInput.schema';
import { Brand_groupUpdateWithoutBrandInputObjectSchema } from './Brand_groupUpdateWithoutBrandInput.schema';
import { Brand_groupUncheckedUpdateWithoutBrandInputObjectSchema } from './Brand_groupUncheckedUpdateWithoutBrandInput.schema';
import { Brand_groupCreateWithoutBrandInputObjectSchema } from './Brand_groupCreateWithoutBrandInput.schema';
import { Brand_groupUncheckedCreateWithoutBrandInputObjectSchema } from './Brand_groupUncheckedCreateWithoutBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupUpsertWithWhereUniqueWithoutBrandInput> =
    z
        .object({
            where: z.lazy(() => Brand_groupWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(() => Brand_groupUpdateWithoutBrandInputObjectSchema),
                z.lazy(
                    () =>
                        Brand_groupUncheckedUpdateWithoutBrandInputObjectSchema,
                ),
            ]),
            create: z.union([
                z.lazy(() => Brand_groupCreateWithoutBrandInputObjectSchema),
                z.lazy(
                    () =>
                        Brand_groupUncheckedCreateWithoutBrandInputObjectSchema,
                ),
            ]),
        })
        .strict();

export const Brand_groupUpsertWithWhereUniqueWithoutBrandInputObjectSchema =
    Schema;
