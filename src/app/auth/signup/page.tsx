'use client';
import { Button, Label, TextInput } from 'flowbite-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { confirmUsername, signup } from '@/server_action/auth/signup';
import { useState } from 'react';
import { NumberArg, SignupFormSchema, SignupFormTypes } from '@/types/type';

export default function AuthSignup() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, dirtyFields },
        setError,
        clearErrors,
        getValues,
    } = useForm<SignupFormTypes>({
        resolver: zodResolver(SignupFormSchema),
        mode: 'all',
    });

    const [usernameState, setUsernameState] = useState(2);
    const [passwordState, setPasswordState] = useState(false);

    const [usernameErrorMessage, setUsernameErrorMessage] =
        useState('이미 존재하는 아이디입니다.');
    const [passwordErrorMessage, setPasswordErrorMessage] =
        useState('비밀번호가 일치하지 않습니다.');

    const setErrors = (state: NumberArg) => {
        state === 0 &&
            setError('username', {
                type: 'UQ_username',
                message: usernameErrorMessage,
            });

        state === 1 &&
            setError('confirmPassword', {
                type: 'EQ_password',
                message: passwordErrorMessage,
            });
    };

    const onValid: SubmitHandler<SignupFormTypes> = async (formData) => {
        const { password, confirmPassword } = formData;

        if (usernameState !== 1) {
            alert('아이디 중복확인을 확인 해주세요.');
            return;
        }

        if (password !== confirmPassword) {
            setErrors(1);
            return;
        }

        await signup(formData);
        alert('회원가입 완료.');
        reset();
    };

    return (
        <>
            <div className={'flex justify-center p-5'}>
                <form
                    onSubmit={handleSubmit(onValid)}
                    className="flex w-[calc(100%)] flex-col gap-4"
                >
                    <div className="mb-5">
                        <div className="mb-2 block">
                            <div className={'flex justify-between '}>
                                <div>
                                    <Label
                                        htmlFor="username"
                                        value={'아이디'}
                                    />
                                    <span className={'text-red-600'}> * </span>
                                </div>
                                <Button
                                    onClick={async () => {
                                        const username = getValues('username');
                                        const res =
                                            await confirmUsername(username);

                                        if (res) {
                                            setErrors(0);
                                            setUsernameState(0);
                                        } else {
                                            setUsernameState(1);
                                        }
                                    }}
                                    disabled={
                                        ((!errors.username &&
                                            getValues('username')?.length) ||
                                            0) < 5
                                    }
                                    color={'dark'}
                                    size={'sm'}
                                >
                                    중복확인
                                </Button>
                            </div>
                        </div>

                        <TextInput
                            {...register('username', {
                                onChange: () => {
                                    clearErrors('username');
                                    setUsernameState(2);
                                },
                            })}
                            id="username"
                            type="text"
                            color={
                                errors.username || usernameState === 0
                                    ? 'failure'
                                    : usernameState === 1
                                      ? 'success'
                                      : undefined
                            }
                            helperText={
                                <>
                                    <span className="font-medium">
                                        {errors.username?.message ||
                                            (dirtyFields.username &&
                                                usernameState === 1 &&
                                                '사용 가능한 아이디 입니다.')}
                                    </span>
                                </>
                            }
                        />
                    </div>
                    <div className="mb-2">
                        <div className="mb-2 block">
                            <Label htmlFor="password" value={'비밀번호'} />
                            <span className={'text-red-600'}> * </span>
                        </div>

                        <TextInput
                            {...register('password', {
                                onBlur: (e) => {
                                    const password = e.target.value;
                                    const confirmPassword =
                                        getValues('confirmPassword');
                                    if (password === confirmPassword) {
                                        setPasswordState(true);
                                    } else {
                                        setPasswordState(false);
                                    }
                                },
                                onChange: (e) => {
                                    const password = e.target.value;
                                    const confirmPassword =
                                        getValues('confirmPassword');
                                    if (password === confirmPassword) {
                                        setPasswordState(true);
                                    } else {
                                        setPasswordState(false);
                                    }
                                },
                            })}
                            id="password"
                            type="password"
                            color={
                                errors.password
                                    ? 'failure'
                                    : dirtyFields.password
                                      ? 'success'
                                      : undefined
                            }
                            helperText={
                                <>
                                    <span className="font-medium">
                                        {errors.password?.message ||
                                            (dirtyFields.password &&
                                                '사용 가능한 비밀번호 입니다.')}
                                    </span>
                                </>
                            }
                        />
                    </div>
                    <div className="mb-5">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="confirmPassword"
                                value={'비밀번호 확인'}
                            />
                            <span className={'text-red-600'}> * </span>
                        </div>
                        <TextInput
                            {...register('confirmPassword', {
                                onBlur: (e) => {
                                    const password = getValues('password');
                                    const confirmPassword = e.target.value;
                                    if (password === confirmPassword) {
                                        setPasswordState(true);
                                    } else {
                                        setPasswordState(false);
                                    }
                                },
                                onChange: (e) => {
                                    const password = getValues('password');
                                    const confirmPassword = e.target.value;
                                    if (password === confirmPassword) {
                                        setPasswordState(true);
                                    } else {
                                        setPasswordState(false);
                                    }
                                },
                            })}
                            id="confirmPassword"
                            type="password"
                            color={
                                errors.confirmPassword ||
                                (dirtyFields.confirmPassword && !passwordState)
                                    ? 'failure'
                                    : dirtyFields.confirmPassword
                                      ? 'success'
                                      : undefined
                            }
                            helperText={
                                <>
                                    <span className="font-medium">
                                        {errors.confirmPassword?.message ||
                                            (dirtyFields.confirmPassword &&
                                                !passwordState &&
                                                passwordErrorMessage) ||
                                            (dirtyFields.confirmPassword &&
                                                '비밀번호가 일치 합니다.')}
                                    </span>
                                </>
                            }
                        />
                    </div>
                    <div className="mb-5">
                        <div className="mb-2 block">
                            <Label htmlFor="name" value={'이름'} />
                            <span className={'text-red-600'}> * </span>
                        </div>
                        <TextInput
                            {...register('name', {
                                required: {
                                    message: '필수 입력사항입니다.',
                                    value: true,
                                },
                            })}
                            id="name"
                            type="text"
                            color={
                                errors.name
                                    ? 'failure'
                                    : dirtyFields.name
                                      ? 'success'
                                      : undefined
                            }
                            helperText={
                                <>
                                    <span className="font-medium">
                                        {errors.name?.message ||
                                            (dirtyFields.name &&
                                                '멋진 이름이네요!')}
                                    </span>
                                </>
                            }
                        />
                    </div>
                    <div className="mb-5">
                        <div className="mb-2 block">
                            <Label htmlFor="email" value={'이메일'} />
                            <span className={'text-red-600'}> * </span>
                        </div>
                        <TextInput
                            {...register('email')}
                            id="email"
                            type="text"
                            color={
                                errors.email
                                    ? 'failure'
                                    : dirtyFields.email
                                      ? 'success'
                                      : undefined
                            }
                            helperText={
                                <>
                                    <span className="font-medium">
                                        {errors.email?.message ||
                                            (dirtyFields.email &&
                                                '이메일 형식이 일치합니다.')}
                                    </span>
                                </>
                            }
                        />
                    </div>
                    <Button type="submit" color={'dark'}>
                        회원가입
                    </Button>
                </form>
            </div>
        </>
    );
}
