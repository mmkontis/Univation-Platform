"use client";

import { User } from '@/app/(dashboard)/components/user';
import { ArrowTopRightOnSquareIcon, EnvelopeIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import styles from './UnivationMentorsHeader.module.css';

interface UnivationMentorsHeaderProps {
  currentPath: string;
}

export default function UnivationMentorsHeader({ currentPath }: UnivationMentorsHeaderProps) {
  const getLinkClassName = (href: string) => {
    const isActive = 
      (href === '/mentors' && currentPath === '/mentors') ||
      (href === '/mentors/profiles' && currentPath === '/mentors/profiles');
    return `text-[16px] font-semibold ${isActive ? 'text-[#121926] bg-[#F8FAFC]' : 'text-[#364152] hover:bg-[#F8FAFC]'} text-center leading-[1.5] px-3 py-2 rounded-md transition-colors`;
  };

  return (
    <header className={`${styles['univation-mentors-header']} font-roboto`}>
      <div className={styles['header-content']}>
        <div className={`${styles['left-section']} flex items-center`}>
          <Link href="/mentors" className="mr-8">
            <Image src="/logos/univation-blue-logo.svg" alt="Univation" width={160} height={21} />
          </Link>
          <nav className="flex justify-center gap-x-1">
            <Link href="/mentors" className={getLinkClassName('/mentors')}>Home</Link>
            <Link href="/mentors/profiles" className={getLinkClassName('/mentors/profiles')}>Mentors</Link>
            <Link href="/mentors/professors" className={getLinkClassName('/mentors/professors')}>Professors</Link>
            <Link href="/mentors/events" className={getLinkClassName('/mentors/events')}>Events</Link>
            <Link href="/mentors/platforms" target="_blank" rel="noopener noreferrer" className={`${getLinkClassName('/mentors/platforms')} flex items-center`}>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              All Platforms
            </Link>
            <Link href="/mentors/control-panel" className={getLinkClassName('/mentors/control-panel')}>Control Panel</Link>
          </nav>
        </div>
        <div className={styles['right-section']}>
          <div className="flex items-center gap-6">
            <button className="flex items-center px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm">
              <EnvelopeIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              Chat
            </button>
            <QuestionMarkCircleIcon className="w-6 h-6 text-gray-500 cursor-pointer" aria-hidden="true" />
            <User />
          </div>
        </div>
      </div>
    </header>
  );
}