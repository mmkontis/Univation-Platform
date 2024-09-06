import { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (session) {
      setUser(session.user)
    }
  }, [session])

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000',
      },
    })
    if (error) console.error('Error signing in:', error)
  }

  const router = useRouter()  

  const handleSignOut = async () => {
    console.log('Signing out')
    // First, sign out the user
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error)
      // Optionally, you could show an error message to the user here
    } else {
      // Only redirect if sign out was successful
      router.push('/login')
    }
  }

  return (
    <div>
      <h1>Google Sign-In App</h1>
      {!session ? (
        <button onClick={handleSignIn}>Sign in with Google</button>
      ) : (
        <div>
          <h2>Welcome, {user?.email}</h2>
          <p>User ID: {user?.id}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  )
}