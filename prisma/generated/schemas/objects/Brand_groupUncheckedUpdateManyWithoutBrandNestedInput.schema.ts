import { z } from 'zod';
import { Brand_groupCreateWithoutBrandInputObjectSchema } from './Brand_groupCreateWithoutBrandInput.schema';
import { Brand_groupUncheckedCreateWithoutBrandInputObjectSchema } from './Brand_groupUncheckedCreateWithoutBrandInput.schema';
import { Brand_groupCreateOrConnectWithoutBrandInputObjectSchema } from './Brand_groupCreateOrConnectWithoutBrandInput.schema';
import { Brand_groupUpsertWithWhereUniqueWithoutBrandInputObjectSchema } from './Brand_groupUpsertWithWhereUniqueWithoutBrandInput.schema';
import { Brand_groupCreateManyBrandInputEnvelopeObjectSchema } from './Brand_groupCreateManyBrandInputEnvelope.schema';
import { Brand_groupWhereUniqueInputObjectSchema } from './Brand_groupWhereUniqueInput.schema';
import { Brand_groupUpdateWithWhereUniqueWithoutBrandInputObjectSchema } from './Brand_groupUpdateWithWhereUniqueWithoutBrandInput.schema';
import { Brand_groupUpdateManyWithWhereWithoutBrandInputObjectSchema } from './Brand_groupUpdateManyWithWhereWithoutBrandInput.schema';
import { Brand_groupScalarWhereInputObjectSchema } from './Brand_groupScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Brand_groupUncheckedUpdateManyWithoutBrandNestedInput> =
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
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            Brand_groupUpsertWithWhereUniqueWithoutBrandInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                Brand_groupUpsertWithWhereUniqueWithoutBrandInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(() => Brand_groupCreateManyBrandInputEnvelopeObjectSchema)
                .optional(),
            set: z
                .union([
                    z.lazy(() => Brand_groupWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => Brand_groupWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => Brand_groupWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => Brand_groupWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => Brand_groupWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => Brand_groupWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => Brand_groupWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => Brand_groupWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () =>
                            Brand_groupUpdateWithWhereUniqueWithoutBrandInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                Brand_groupUpdateWithWhereUniqueWithoutBrandInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            Brand_groupUpdateManyWithWhereWithoutBrandInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                Brand_groupUpdateManyWithWhereWithoutBrandInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => Brand_groupScalarWhereInputObjectSchema),
                    z
                        .lazy(() => Brand_groupScalarWhereInputObjectSchema)
                        .array(),
                ])
                .optional(),
        })
        .strict();

export const Brand_groupUncheckedUpdateManyWithoutBrandNestedInputObjectSchema =
    Schema;
