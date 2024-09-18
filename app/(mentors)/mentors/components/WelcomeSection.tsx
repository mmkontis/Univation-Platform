'use client';

import { Button } from '@/components/ui/MentorsPlatformButton';
import { ComputerDesktopIcon, UsersIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <div className="flex flex-row justify-between items-center w-full overflow-visible border-b border-[#E3E8EF] pb-5 font-roboto">
      <div className="flex items-center gap-5">
        <div className="relative w-[100px] h-[100px]">
          <Image
            src="https://lh3.googleusercontent.com/a/ACg8ocLHYL33wMrKzbI9YWBD6dutNJDU6u2S61DdaQ0VthsFUn5urffm=s96-c"
            alt="Profile"
            layout="fill"
            className="rounded-full"
          />
          <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-[url('https://logo.clearbit.com/theunivation.com')] bg-cover bg-center shadow-[rgba(170,170,170,0.1)_2px_8px_8px_-4px]"></div>
        </div>
        <div className="flex flex-col gap-2.5">
          <h1 className="text-3xl font-semibold text-[#121926]">Welcome, Minas Marios!</h1>
          <div className="flex gap-2">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Univation</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Mentor</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Univation Admin</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <p className="text-gray-600">Here are your Stats:</p>
        <div className="flex gap-5">
          <Button variant="blue" leftIcon={<ComputerDesktopIcon className="h-5 w-5" />}>
            10 Sessions
          </Button>
          <Button variant="blue" leftIcon={<UsersIcon className="h-5 w-5" />}>
            2000 Mentees
          </Button>
        </div>
      </div>
    </div>
  );
}