import { z } from 'zod';
import { Brand_groupScalarWhereInputObjectSchema } from './Brand_groupScalarWhereInput.schema';
import { Brand_groupUpdateManyMutationInputObjectSchema } from './Brand_groupUpdateManyMutationInput.schema';
import { Brand_groupUncheckedUpdateManyWithoutBrand_groupsInputObjectSchema } from './Brand_groupUncheckedUpdateManyWithoutBrand_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupUpdateManyWithWhereWithoutBrandInput> =
    z
        .object({
            where: z.lazy(() => Brand_groupScalarWhereInputObjectSchema),
            data: z.union([
                z.lazy(() => Brand_groupUpdateManyMutationInputObjectSchema),
                z.lazy(
                    () =>
                        Brand_groupUncheckedUpdateManyWithoutBrand_groupsInputObjectSchema,
                ),
            ]),
        })
        .strict();

export const Brand_groupUpdateManyWithWhereWithoutBrandInputObjectSchema =
    Schema;
