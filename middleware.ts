import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    // Fetch user data
    const { data: userData, error } = await supabase
      .from('users')
      .select('onboarding_completed')
      .eq('id', session.user.id)
      .single()

    if (error) {
      console.error('Error fetching user data:', error)
      return res
    }

    // If onboarding is not completed, redirect to onboarding page
    if (!userData?.onboarding_completed && req.nextUrl.pathname !== '/onboarding') {
      return NextResponse.redirect(new URL('/onboarding', req.url))
    }
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
