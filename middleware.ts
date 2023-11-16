import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname);
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: '/category/remont-i-strojka',
};
