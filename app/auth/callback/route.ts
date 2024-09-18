import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error('Error exchanging code for session:', error);
      return NextResponse.redirect(new URL('/login', requestUrl.origin))
    }

    if (data.user) {
      const { user } = data
      const { user_metadata } = user

      // Check if the user signed in with Google and update their metadata
      if (user.app_metadata.provider === 'google') {
        const { data: updateData, error: updateError } = await supabase.auth.updateUser({
          data: {
            first_name: user_metadata.full_name?.split(' ')[0] || '',
            last_name: user_metadata.full_name?.split(' ').slice(1).join(' ') || '',
            avatar_url: user_metadata.avatar_url,
          }
        })

        if (updateError) {
          console.error('Error updating user metadata:', updateError)
        } else {
          console.log('User metadata updated successfully')
        }
      }

      // Check if user has completed onboarding
      if (user.user_metadata?.onboarding_completed) {
        console.log('Redirecting to root');
        return NextResponse.redirect(new URL('/', requestUrl.origin))
      } else {
        console.log('Redirecting to onboarding');
        return NextResponse.redirect(new URL('/onboarding', requestUrl.origin))
      }
    }
  }

  console.log('Redirecting to login');
  return NextResponse.redirect(new URL('/login', requestUrl.origin))
}