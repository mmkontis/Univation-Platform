'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function ClientLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        console.log('User signed in:', session?.user);
        router.push('/dashboard'); // Redirect to dashboard or home page after sign in
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email/password sign in
    // You'll need to implement this functionality
  };

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) console.error('Error signing in with Google:', error);
  };

  const handleLinkedInSignIn = async () => {
    // Implement LinkedIn sign-in logic here
  };

  return (
    <div className="min-h-screen flex relative">
      {/* Univation circle logo in upper left corner */}
      <div className="absolute top-4 left-4">
        <Image src="/logos/univation-circle-logo.svg" alt="Univation" width={40} height={40} />
      </div>

      <div className="w-1/2 p-8 flex flex-col">
        <div className="mb-8">
          <Image src="/logos/univation-blue-logo.svg" alt="Univation" width={200} height={40} />
        </div>
        <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
          <h2 className="text-xl font-semibold mb-6">Connect with university students in seconds.</h2>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start h-12" onClick={handleGoogleSignIn}>
              <Image src="/logos/social-logos/google.svg" alt="Google" width={20} height={20} className="mr-2" />
              <span className="ml-2">Sign in with Google</span>
            </Button>
            <Button variant="outline" className="w-full justify-start h-12 bg-[#0A66C2] text-white hover:bg-[#004182]" onClick={handleLinkedInSignIn}>
              <Image src="/logos/social-logos/linkedin.svg" alt="LinkedIn" width={20} height={20} className="mr-2" />
              <span className="ml-2">Sign in with LinkedIn</span>
            </Button>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-gray-100"
              />
              <Input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-gray-100"
              />
              <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white">Sign in</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-600 text-white p-16 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-8">Attract the right talent, faster, smarter.</h1>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center">
            <CheckCircleIcon className="w-7 h-7 mr-2 scale-125" />
            #1 university platform for students
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="w-7 h-7 mr-2 scale-125" />
            35+ large companies hiring on Univation
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="w-7 h-7 mr-2 scale-125" />
            10x increased applications
          </li>
        </ul>
        <div className="mt-16">
          <Image src="/logos/univation-white-logo.svg" alt="Univation" width={200} height={36} />
        </div>
      </div>
    </div>
  );
}