import { Provider } from '@prisma/client';
import { NextAuth } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      username: string;
      name: string;
      email: string;
      contact: string | null;
      avatar: string | null;
      provider: Provider;
      login_level: number;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    username: string;
    name: string;
    email: string;
    contact: string | null;
    avatar: string | null;
    provider: Provider;
    login_level: number;
  }
}
