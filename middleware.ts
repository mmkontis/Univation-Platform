import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Add the updateUser function here
async function updateUser(supabase: any, userId: string, data: any) {
  const { error } = await supabase
    .from('users')
    .update(data)
    .eq('id', userId)

  if (error) {
    console.error('Error updating user:', error)
    throw error
  }
}

export async function middleware(req: NextRequest) {
  // Allow favicon and logo requests to pass through
  if (req.nextUrl.pathname.includes('favicon.ico') || req.nextUrl.pathname.includes('univation-circle-logo.svg')) {
    return NextResponse.next()
  }

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

    // Example of using updateUser function (uncomment if needed)
    // try {
    //   await updateUser(supabase, session.user.id, { some_field: 'some_value' })
    // } catch (error) {
    //   console.error('Error updating user:', error)
    // }
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)'],
}
