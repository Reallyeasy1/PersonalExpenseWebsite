import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
 
// This function can be marked `async` if using `await` inside

export function middleware(request: NextRequest) {
    // if (cookies not found){
    //   return NextResponse.redirect(new URL('/home', request.url))
    // }
  return NextResponse.redirect(new URL('/login', request.url))
// return NextResponse.redirect('https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page')
}
 
// See "Matching Paths" below to learn more
export const config = {
//   matcher: '/about/:path*',
matcher: '/',
}