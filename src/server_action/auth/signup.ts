'use server';
import 'server-only';
import db from '@/utils/db';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import { SignupFormTypes, StringArg } from '@/types/type';

export const signup = async (formData: SignupFormTypes) => {
    const { username, password, confirmPassword, name, email } = formData;

    // 패스워드
    const saltRound = 10; // 패스워드 자리수
    const salt = await bcrypt.genSalt(saltRound); // 패스워드 생성
    const hashedPassword = await bcrypt.hash(password.trim(), salt); // 패스워드 패턴

    await db.user.create({
        data: {
            username: username,
            name: name,
            email: email,
            password: hashedPassword,
        },
    });
    redirect('/member');
};

export const confirmUsername = async (username: StringArg) => {
    return !!(await db.user.findFirst({
        select: {
            username: true,
        },
        where: {
            username: username,
        },
    }));
};
