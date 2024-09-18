import { Button } from '@/components/ui/MentorsPlatformButton';
import { Input } from '@/components/ui/input';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import { useState } from 'react';

interface LoginFormProps {
  onToggleForm: () => void;
}

export default function LoginForm({ onToggleForm }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClientComponentClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      console.error('Error signing in with email:', error);
      setIsLoading(false);
    } else {
      alert('Please check your email for the login link.');
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

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Log in to your account</h2>

      <div className="flex space-x-4">
        <Button 
          variant="blue"
          className="flex-1 h-12 text-black bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-[0_0_0_4px_rgba(0,102,255,0.15)] justify-center" 
          onClick={handleGoogleSignIn} 
          disabled={isLoading}
          leftIcon={<Image src="/logos/social-logos/google.svg" alt="Google" width={24} height={24} />}
        >
          Log in with Google
        </Button>
        <Button 
          variant="blue"
          className="flex-1 h-12 bg-[#0A66C2] text-white hover:bg-[#004182] justify-center" 
          onClick={handleLinkedInSignIn} 
          disabled={isLoading}
          leftIcon={<Image src="/logos/social-logos/linkedin.svg" alt="LinkedIn" width={24} height={24} />}
        >
          Log in with LinkedIn
        </Button>
      </div>
      
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
        <Button 
          type="submit"
          className="w-full h-12 justify-center"
          variant="blue"
          size="default"
          disabled={isLoading || !email.trim()}
        >
          Log in with Email
        </Button>
      </form>

      <p className="text-sm text-center mt-4 text-gray-500">
        Don't have an account? <button onClick={onToggleForm} className="text-gray-700 font-semibold hover:underline">Sign up</button>
      </p>
    </div>
  );
}