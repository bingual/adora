import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
    'idx',
    'username',
    'password',
    'name',
    'email',
    'contact',
    'avatar',
    'provider',
    'login_level',
    'created_at',
    'updated_at',
]);
