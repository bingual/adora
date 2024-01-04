import { z } from 'zod';
import { Brand_groupCreateWithoutBrandInputObjectSchema } from './Brand_groupCreateWithoutBrandInput.schema';
import { Brand_groupUncheckedCreateWithoutBrandInputObjectSchema } from './Brand_groupUncheckedCreateWithoutBrandInput.schema';
import { Brand_groupCreateOrConnectWithoutBrandInputObjectSchema } from './Brand_groupCreateOrConnectWithoutBrandInput.schema';
import { Brand_groupCreateManyBrandInputEnvelopeObjectSchema } from './Brand_groupCreateManyBrandInputEnvelope.schema';
import { Brand_groupWhereUniqueInputObjectSchema } from './Brand_groupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupUncheckedCreateNestedManyWithoutBrandInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () => Brand_groupCreateWithoutBrandInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                Brand_groupCreateWithoutBrandInputObjectSchema,
                        )
                        .array(),
                    z.lazy(
                        () =>
                            Brand_groupUncheckedCreateWithoutBrandInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                Brand_groupUncheckedCreateWithoutBrandInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            Brand_groupCreateOrConnectWithoutBrandInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                Brand_groupCreateOrConnectWithoutBrandInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(() => Brand_groupCreateManyBrandInputEnvelopeObjectSchema)
                .optional(),
            connect: z
                .union([
                    z.lazy(() => Brand_groupWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => Brand_groupWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
        })
        .strict();

export const Brand_groupUncheckedCreateNestedManyWithoutBrandInputObjectSchema =
    Schema;
