import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function CatchAll() {
  const supabase = createServerComponentClient({ cookies })
  
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    const { data: userData } = await supabase
      .from('users')
      .select('onboarding_completed')
      .eq('id', session.user.id)
      .single()

    if (!userData?.onboarding_completed) {
      redirect('/onboarding')
    }
  }

  // If we get here, either there's no session or onboarding is completed
  // You can handle the actual route here or redirect as needed
}