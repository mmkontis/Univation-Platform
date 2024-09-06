'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email/password sign in
    // You'll need to implement this functionality
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 p-8 flex flex-col">
        <div className="mb-8">
          <Image src="/univation-logo.svg" alt="Univation Logo" width={200} height={40} />
        </div>
        <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
          <h2 className="text-xl font-semibold mb-6">Connect with university students in seconds.</h2>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start h-12" onClick={() => signIn('google')}>
              <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
              Sign in with Google
            </Button>
            <Button variant="outline" className="w-full justify-start h-12" onClick={() => signIn('linkedin')}>
              <Image src="/linkedin-icon.svg" alt="LinkedIn" width={20} height={20} className="mr-2" />
              Sign in with LinkedIn
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">or</span>
              </div>
            </div>
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
              <div className="flex justify-between items-center text-sm">
                <Link href="/forgot-password" className="text-blue-600 hover:underline">
                  Forgot your password?
                </Link>
                <Link href="/signup" className="text-blue-600 hover:underline">
                  Don't have an account? Sign up
                </Link>
              </div>
              <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white">Sign in</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-600 text-white p-16 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-8">Attract the right talent, faster, smarter.</h1>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center">
            <Image src="/check-icon.svg" alt="Check" width={24} height={24} className="mr-2" />
            #1 university platform for students
          </li>
          <li className="flex items-center">
            <Image src="/check-icon.svg" alt="Check" width={24} height={24} className="mr-2" />
            35+ large companies hiring on Univation
          </li>
          <li className="flex items-center">
            <Image src="/check-icon.svg" alt="Check" width={24} height={24} className="mr-2" />
            10x increased applications
          </li>
        </ul>
        <div className="mt-8 flex items-center">
          <div className="flex -space-x-2 mr-4">
            <Image src="/avatar1.jpg" alt="Avatar" width={40} height={40} className="rounded-full border-2 border-white" />
            <Image src="/avatar2.jpg" alt="Avatar" width={40} height={40} className="rounded-full border-2 border-white" />
            <Image src="/avatar3.jpg" alt="Avatar" width={40} height={40} className="rounded-full border-2 border-white" />
          </div>
          <p>Trusted by more than 170K students</p>
        </div>
        <div className="mt-16">
          <Image src="/graduation-cap.svg" alt="Graduation Cap" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
