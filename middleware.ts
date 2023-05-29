import type { NextRequest, NextFetchEvent } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import path from 'path';

const secret = process.env.SECRET as string;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const session = await getToken({ req, secret, raw: true });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/login') || pathname.startsWith('/signUp')) {
    if (session) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
}

export const config = {
  matcher: ['/login', '/signUp', '/api/auth/signin', '/api/auth/signout'],
};
