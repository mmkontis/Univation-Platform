import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const LoginPopup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic
    console.log('Google login clicked');
  };

  const handleLinkedInLogin = () => {
    // Implement LinkedIn login logic
    console.log('LinkedIn login clicked');
  };

  const handleEmailLogin = () => {
    // Implement email login logic
    console.log('Email login clicked with:', email);
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-8 max-w-md w-full">
      <div className="w-full max-w-[320px] flex flex-col gap-5">
        <Button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 bg-black text-white rounded-lg h-11"
        >
          <Image src="/google-icon.svg" alt="Google" width={35} height={35} />
          Log in with Google
        </Button>

        <Button
          onClick={handleLinkedInLogin}
          className="flex items-center justify-center gap-2 bg-[#257FEF] text-white rounded-lg h-11"
        >
          <Image src="/linkedin-icon.svg" alt="LinkedIn" width={27} height={27} />
          Log in with LinkedIn
        </Button>

        <div className="flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">or with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
            className="rounded-lg border border-gray-300 h-11"
          />
        </div>

        <Button
          onClick={handleEmailLogin}
          className="bg-black bg-opacity-20 text-white font-semibold rounded-lg h-11"
        >
          Next
        </Button>
      </div>

      <div className="flex gap-2 mt-6">
        <span className="text-sm text-gray-600">Don't have an account?</span>
        <button className="text-sm font-bold text-black">Sign Up</button>
      </div>

      <a
        href="https://app.theunivation.com/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-xs text-white text-center tracking-wider bg-transparent px-5 py-2 rounded-lg"
      >
        By logging in, you accept Terms & Conditions.
      </a>
    </div>
  );
};

export default LoginPopup;