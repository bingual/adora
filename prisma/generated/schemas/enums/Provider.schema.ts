import { z } from 'zod';

export const ProviderSchema = z.enum(['Credentials', 'kakao', 'naver']);
