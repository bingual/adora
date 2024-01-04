import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum([
    'idx',
    'brand_name',
    'product_name',
    'off_rate',
    'price',
    'origin_price',
    'thumbnail',
    'category',
    'stock_quantity',
    'views',
    'created_at',
    'updated_at',
]);
