import { z } from 'zod';

export const BrandScalarFieldEnumSchema = z.enum([
    'idx',
    'brand_name',
    'description',
    'thumbnail',
    'created_at',
    'updated_at',
]);
