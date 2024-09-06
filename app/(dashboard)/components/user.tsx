'use client';

import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import Image from 'next/image';
import { UserSettingsPopup } from './UserSettingsPopup';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { handleSignOut } from '../actions';
import { useRouter } from 'next/navigation';

export function User() {
  const [session, setSession] = useState<any>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchSession() {
      const sessionData = await auth();
      setSession(sessionData);
    }
    fetchSession();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setIsSettingsOpen(window.location.hash === '#settings');
    };

    // Check hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const user = session?.user;

  const toggleSettings = () => {
    const newState = !isSettingsOpen;
    setIsSettingsOpen(newState);
    if (newState) {
      window.location.hash = 'settings';
    } else {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    console.log('Settings toggled:', newState);
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <Image
              src={user?.image ?? '/placeholder-user.jpg'}
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={toggleSettings}>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          {user ? (
            <DropdownMenuItem>
              <form action={handleSignOut}>
                <button type="submit">Sign Out</button>
              </form>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem>
              <Link href="/login">Sign In</Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      {isSettingsOpen && user && (
        <UserSettingsPopup
          user={{
            name: user.name ?? '',
            email: user.email ?? '',
            image: user.image ?? '/placeholder-user.jpg'
          }}
          onClose={toggleSettings}
        />
      )}
    </div>
  );
}