'use server';
import MemberMyPage from '@/component/member';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { redirect } from 'next/navigation';
import { Props } from '@/types/type';

export default async function Member({ params, searchParams }: Props) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return redirect('/auth/signin');
    }

    return (
        <>
            <MemberMyPage />
        </>
    );
}
