import { z } from 'zod';
import { Brand_groupWhereUniqueInputObjectSchema } from './Brand_groupWhereUniqueInput.schema';
import { Brand_groupCreateWithoutBrandInputObjectSchema } from './Brand_groupCreateWithoutBrandInput.schema';
import { Brand_groupUncheckedCreateWithoutBrandInputObjectSchema } from './Brand_groupUncheckedCreateWithoutBrandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupCreateOrConnectWithoutBrandInput> = z
    .object({
        where: z.lazy(() => Brand_groupWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => Brand_groupCreateWithoutBrandInputObjectSchema),
            z.lazy(
                () => Brand_groupUncheckedCreateWithoutBrandInputObjectSchema,
            ),
        ]),
    })
    .strict();

export const Brand_groupCreateOrConnectWithoutBrandInputObjectSchema = Schema;
