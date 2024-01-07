'use server';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import MemberMyPage from '@/component/member';
import { Props } from '@/types/type';
import { authOptions } from '@/utils/authOptions';

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
