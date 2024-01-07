import { Prisma } from '@prisma/client';
import { z } from 'zod';

import { getBrandDetail, getBrandList, getProductList } from '@/server_action';

export const SignupFormSchema = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z0-9]*$/, {
      message: '숫자와 영문만 입력해주세요.',
    })
    .min(5, { message: '5자리 이상 입력해주세요.' })
    .max(15, { message: '15자리 이하로 입력해주세요.' })
    .trim(),
  password: z
    .string()
    .regex(/^(?=.*[a-zA-Z])(?=.*[`~!@#$%^&*()_+=;:'",.<>/?-])(?=.*[0-9]).{7,14}\S$/g, {
      message: '공백을 제외한 영문 숫자 특수기호 조합 8자리 이상 15자리 이하로 입력해주세요.',
    })
    .trim(),
  confirmPassword: z
    .string()
    .regex(/^(?=.*[a-zA-Z])(?=.*[`~!@#$%^&*()_+=;:'",.<>/?-])(?=.*[0-9]).{7,14}\S$/g, {
      message: '공백을 제외한 영문 숫자 특수기호 조합 8자리 이상 15자리 이하로 입력해주세요.',
    })
    .trim(),
  name: z
    .string()
    .regex(/^[a-zA-Z가-힣]+$/, {
      message: '한글과 영문만 입력해주세요.',
    })
    .min(2, { message: '2자리 이상 입력해주세요.' })
    .max(15, { message: '15자리 이하로 입력해주세요.' })
    .trim(),
  email: z
    .string()
    .email('이메일 형식을 확인해주세요.')
    .max(50, { message: '50자리 이하로 입력해주세요.' })
    .trim(),
});

export const LoginFormSchema = z.object({
  username: z.string().trim(),
  password: z.string().trim(),
});

const Props = z.object({
  params: z.object({
    idx: z.string(),
  }),
  searchParams: z.record(z.union([z.string(), z.array(z.string())]).or(z.undefined())),
});

export type SignupFormTypes = z.infer<typeof SignupFormSchema>;
export type LoginFormTypes = z.infer<typeof LoginFormSchema>;
export type Props = z.infer<typeof Props>;

export type ProductListTypes = Prisma.PromiseReturnType<typeof getProductList>;
export type BrandListTypes = Prisma.PromiseReturnType<typeof getBrandList>;
export type BrandDetailTypes = Prisma.PromiseReturnType<typeof getBrandDetail>;
