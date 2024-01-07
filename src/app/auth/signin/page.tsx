'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

import { LoginFormTypes } from '@/types/type';

export default function AuthSignin() {
  const router = useRouter();
  const { data: session, status, update } = useSession();
  const { register, handleSubmit, reset } = useForm<LoginFormTypes>({
    mode: 'onSubmit',
  });

  const onValid: SubmitHandler<LoginFormTypes> = async (formData) => {
    const { username, password } = formData;
    const res = await signIn('credential', {
      username,
      password,
      redirect: false,
    });

    res?.status === 401 && alert('로그인 정보가 일치 하지 않습니다.');
    if (res?.status === 200) {
      await update();
      router.push('/member');
    }
  };
  return (
    <>
      <div className={'relative p-5'}>
        <div>
          <div className={'text-black dark:text-white mb-5'}>
            <h1 className={'text-lg font-bold mb-1'}>로그인</h1>
            <p className={'text-xs text-gray-900 dark:text-gray-300'}>
              아이디와 비밀번호 입력하기 귀찮으시죠?
            </p>
            <p className={'text-xs  text-gray-900 dark:text-gray-300'}>
              SNS 로그인으로 간편하게 로그인하세요.
            </p>
          </div>
          <div className={'mb-8'}>
            <Button
              type={'button'}
              onClick={async () => {
                await signIn('kakao', {
                  redirect: true,
                  callbackUrl: '/member',
                });
              }}
              className={
                'w-full bg-[#ffeb00] dark:bg-[#ffeb00 text-xs text-black enabled:hover:bg-#ffeb00 mb-2 dark:enabled:hover:bg-#ffeb0'
              }
              size={'sm'}
            >
              카카오 로그인 / 회원가입
            </Button>
            <Button
              type={'button'}
              onClick={async () => {
                await signIn('naver', {
                  redirect: true,
                  callbackUrl: '/member',
                });
              }}
              className={
                'w-full bg-[#26c826] dark:bg-[#26c826 text-xs text-white enabled:hover:bg-#26c826 dark:enabled:hover:bg-#26c826'
              }
              size={'sm'}
            >
              네이버 로그인 / 회원가입
            </Button>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onValid)} className="flex w-[calc(100%)] flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="아이디" />
              </div>
              <TextInput {...register('username')} id="username" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="비밀번호" />
              </div>
              <TextInput {...register('password')} id="password" type="password" required />
            </div>
            <div className={'mb-12'}>
              <Button className={'w-full'} type="submit" color={'dark'}>
                기존회원 로그인
              </Button>
            </div>
            <Link href={'/auth/signup'}>
              <Button className={'w-full'} type="button" color={'light'}>
                회원가입 하고 혜택받기
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
