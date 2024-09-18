'use client';

import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import { loginPageContent } from '@/lib/pageContent';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type AccountType = 'mentor' | 'university' | 'company';

export default function ClientLoginPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [accountType, setAccountType] = useState<AccountType>('company');
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

  if (isLoading) {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  }

  const content = showLogin 
    ? loginPageContent.login 
    : loginPageContent.register[accountType];

  return (
    <div className="min-h-screen flex relative">
      <div className="absolute top-4 left-4">
        <Image src="/logos/univation-circle-logo.svg" alt="Univation" width={40} height={40} />
      </div>

      <div className="w-1/2 p-8 flex flex-col">
        <div className="mb-8">
        </div>
        <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
          {showLogin ? (
            <LoginForm onToggleForm={() => setShowLogin(false)} />
          ) : (
            <RegisterForm 
              onToggleForm={() => setShowLogin(true)} 
              onAccountTypeChange={(type) => setAccountType(type || 'company')}
            />
          )}
        </div>
      </div>
      
      <div className="w-1/2 text-white p-16 flex flex-col justify-center univation-blue-background relative" >
        <h1 className="text-5xl font-bold mb-8">{content.title}</h1>
        <ul className="space-y-4 text-lg">
          {content.points.map((point, index) => (
            <li key={index} className="flex items-center">
              <CheckCircleIcon className="w-7 h-7 mr-2 scale-125" />
              {point}
            </li>
          ))}
        </ul>
        
        {/* Updated "Trusted by" section with larger images */}
        <div className="mt-8 flex items-center">
          <Image alt="Avatar 1" src="https://tapback.co/api/avatar?name=John" width={48} height={48} className="rounded-full w-12 h-12 -ms-4 border-3 border-solid border-white" />
          <Image alt="Avatar 2" src="https://tapback.co/api/avatar?name=Jane" width={48} height={48} className="rounded-full w-12 h-12 -ms-4 border-3 border-solid border-white" />
          <Image alt="Avatar 3" src="https://tapback.co/api/avatar?name=Alex" width={48} height={48} className="rounded-full w-12 h-12 -ms-4 border-3 border-solid border-white" />
          <span className="ml-4 text-lg font-bold tracking-tight text-slate-50">Trusted by more than 170K students</span>
        </div>
        
        <div className="absolute bottom-8 right-8">
          <Image src="/logos/univation-white-logo.svg" alt="Univation" width={200} height={36} />
        </div>
      </div>
    </div>
  );
}