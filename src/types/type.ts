import { z } from 'zod';

export const NumberArg = z.number();
export const StringArg = z.string();
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
        .regex(
            /^(?=.*[a-zA-Z])(?=.*[`~!@#$%^&*()_+=;:'",.<>/?-])(?=.*[0-9]).{7,14}\S$/g,
            {
                message:
                    '공백을 제외한 영문 숫자 특수기호 조합 8자리 이상 15자리 이하로 입력해주세요.',
            },
        )
        .trim(),
    confirmPassword: z
        .string()
        .regex(
            /^(?=.*[a-zA-Z])(?=.*[`~!@#$%^&*()_+=;:'",.<>/?-])(?=.*[0-9]).{7,19}\S$/g,
            {
                message:
                    '공백을 제외한 영문 숫자 특수기호 조합 8자리 이상 15자리 이하로 입력해주세요.',
            },
        )
        .trim(),
    name: z
        .string()
        .regex(/^[a-zA-Z-가-힣]+$/, {
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

export type NumberArg = z.infer<typeof NumberArg>;
export type StringArg = z.infer<typeof StringArg>;
export type SignupFormTypes = z.infer<typeof SignupFormSchema>;
export type LoginFormTypes = z.infer<typeof LoginFormSchema>;
