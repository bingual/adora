'use server';
import MemberComponent from '@/component/member/page';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { redirect } from 'next/navigation';

export default async function Member() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return redirect('/auth/signin');
    }

    return (
        <>
            <MemberComponent />
        </>
    );
}
