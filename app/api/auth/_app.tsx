import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

const ClientSessionProvider = dynamic(
  () => import('../components/ClientSessionProvider'),
  { ssr: false }
)

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <ClientSessionProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <Component {...pageProps} />
    </ClientSessionProvider>
  )
}

export default MyApp