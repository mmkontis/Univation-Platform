'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { User } from '@supabase/supabase-js';
import { BlueButton } from '../components/BlueButton';

export default function ClientLoginPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        console.log('User found:', user);
        if (user.user_metadata.onboarding_completed) {
          console.log('Redirecting to root');
          router.push('/');
        } else {
          console.log('Redirecting to onboarding');
          router.push('/onboarding');
        }
      } else {
        console.log('No user found');
        setIsLoading(false);
      }
    };

    checkUser();
  }, [supabase, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        shouldCreateUser: true, // Change this to true to create a new user if they don't exist
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      console.error('Error signing in with email:', error);
      setIsLoading(false);
    } else {
      // Show a message to check email for OTP
      alert('Please check your email for the login link.');
      // Keep loading state active as user will be redirected once they use the email link
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });

    if (error) {
      console.error('Error signing in with Google:', error);
      setIsLoading(false);
    } else if (data) {
      // The user will be redirected to Google for authentication
      console.log('Redirecting to Google for authentication');
    }
  };

  const handleLinkedInSignIn = async () => {
    // Implement LinkedIn sign-in logic here
    setIsLoading(true);
    // ... LinkedIn sign-in code ...
    // Don't forget to setIsLoading(false) if there's an error
  };

  if (isLoading) {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  }

  return (
    <div className="min-h-screen flex relative">
      {/* Univation circle logo in upper left corner */}
      <div className="absolute top-4 left-4">
        <Image src="/logos/univation-circle-logo.svg" alt="Univation" width={40} height={40} />
      </div>

      <div className="w-1/2 p-8 flex flex-col">
        <div className="mb-8">
        </div>
        <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
          <h2 className="text-xl font-semibold mb-6">Connect with university students in seconds.</h2>
          <div className="space-y-4">
            <BlueButton 
              variant="default"
              className="w-full h-12 text-black hover:bg-gray-100 bg-white pl-12" 
              onClick={handleGoogleSignIn} 
              disabled={isLoading}
              leftIcon={<Image src="/logos/social-logos/google.svg" alt="Google" width={20} height={20} />}
            >
              Sign in with Google
            </BlueButton>
            <BlueButton 
              variant="default"
              className="w-full h-12 bg-[#0A66C2] text-white hover:bg-[#004182] pl-12" 
              onClick={handleLinkedInSignIn} 
              disabled={isLoading}
              leftIcon={<Image src="/logos/social-logos/linkedin.svg" alt="LinkedIn" width={20} height={20} />}
            >
              Sign in with LinkedIn
            </BlueButton>
            
            <div className="flex items-center justify-center">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-4 text-sm text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-gray-100 transition-shadow duration-200 ease-in-out hover:shadow-[0_0_0_4px_rgba(0,0,0,0.15)] focus:shadow-[0_0_0_4px_rgba(0,0,0,0.15)] border-none"
                disabled={isLoading}
              />
              <BlueButton 
                type="submit"
                className="w-full mt-4"
                variant="default"
                size="default"
                isUnclickable={isLoading || !email.trim()} // Use isUnclickable prop
              >
                Sign In
              </BlueButton>
            </form>
            <p className="text-sm text-center mt-4">
              Don't have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 text-white p-16 flex flex-col justify-center univation-blue-background" >
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