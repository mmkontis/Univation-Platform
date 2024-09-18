import { Button } from '@/components/ui/MentorsPlatformButton';
import { Input } from '@/components/ui/input';
import { AcademicCapIcon, BuildingOfficeIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import { useState } from 'react';

interface RegisterFormProps {
  onToggleForm: () => void;
  onAccountTypeChange: (type: AccountType | null) => void;
}

type AccountType = 'mentor' | 'university' | 'company';

export default function RegisterForm({ onToggleForm, onAccountTypeChange }: RegisterFormProps) {
  const [email, setEmail] = useState('');
  const [accountType, setAccountType] = useState<AccountType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClientComponentClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountType) {
      alert('Please select an account type');
      return;
    }
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: {
          account_type: accountType,
        },
      },
    });
    if (error) {
      console.error('Error signing up:', error);
      setIsLoading(false);
    } else {
      alert('Please check your email to confirm your account.');
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
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
    }
  };

  const handleLinkedInSignIn = async () => {
    // Implement LinkedIn sign-in logic here
    setIsLoading(true);
    // ... LinkedIn sign-in code ...
    setIsLoading(false);
  };

  const handleAccountTypeChange = (type: AccountType) => {
    setAccountType(type);
    onAccountTypeChange(type);
  };

  const AccountTypeButton = ({ type, label, icon: Icon }: { type: AccountType; label: string; icon: React.ElementType }) => (
    <button
      type="button"
      className={`flex-1 p-4 rounded-lg transition-all flex flex-col items-center justify-center ${
        accountType === type
          ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
      }`}
      onClick={() => handleAccountTypeChange(type)}
    >
      <Icon className="w-8 h-8 mb-2" />
      <span className="font-semibold text-sm">{label}</span>
    </button>
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Create your account</h2>

      <div className="flex space-x-4">
        <AccountTypeButton type="mentor" label="Mentor" icon={UserGroupIcon} />
        <AccountTypeButton type="university" label="University" icon={AcademicCapIcon} />
        <AccountTypeButton type="company" label="Company" icon={BuildingOfficeIcon} />
      </div>

      <div className="flex items-center justify-center">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-4 text-sm text-gray-500">Sign up with</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <div className="space-y-4">
        <Button 
          variant="blue"
          className="w-full h-12 text-black bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-[0_0_0_4px_rgba(0,102,255,0.15)] justify-center" 
          onClick={handleGoogleSignIn} 
          disabled={isLoading}
          leftIcon={<Image src="/logos/social-logos/google.svg" alt="Google" width={24} height={24} />}
        >
          Google
        </Button>
        <Button 
          variant="blue"
          className="w-full h-12 bg-[#0A66C2] text-white hover:bg-[#004182] justify-center" 
          onClick={handleLinkedInSignIn} 
          disabled={isLoading}
          leftIcon={<Image src="/logos/social-logos/linkedin.svg" alt="LinkedIn" width={24} height={24} />}
        >
          LinkedIn
        </Button>
      </div>
      
      <div className="flex items-center justify-center">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-4 text-sm text-gray-500">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input 
            id="email"
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-gray-100 transition-shadow duration-200 ease-in-out hover:shadow-[0_0_0_4px_rgba(0,0,0,0.15)] focus:shadow-[0_0_0_4px_rgba(0,0,0,0.15)] border-none"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit"
          className="w-full h-12 justify-center"
          variant="blue"
          size="default"
          disabled={isLoading || !email.trim() || !accountType}
        >
          Sign up with Email
        </Button>
      </form>

      <p className="text-sm text-center mt-4 text-gray-500">
        Already have an account? <button onClick={onToggleForm} className="text-gray-700 font-semibold hover:underline">Log in</button>
      </p>
    </div>
  );
}