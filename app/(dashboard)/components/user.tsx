'use client';

import { Button } from '@/components/ui/button';
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
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export function User() {
  const [session, setSession] = useState<any>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getSession() {
      const { data: { session } } = await supabase.auth.getSession();
      console.log('Fetched session data:', session);
      setSession(session);
    }
    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  const user = session?.user;
  console.log('User object:', user);

  const userImage = user?.image || user?.user_metadata?.avatar_url || '/placeholder-user.jpg';
  const userEmail = user?.email || '';
  console.log('User email:', userEmail);

  const toggleSettings = () => {
    const newState = !isSettingsOpen;
    setIsSettingsOpen(newState);
    if (newState) {
      window.location.hash = 'settings';
    } else {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
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
              src={userImage}
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {user ? (
            <>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">User Email:</p>
                  <p className="text-xs leading-none text-muted-foreground">{userEmail || 'No email available'}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
            </>
          ) : (
            <DropdownMenuLabel>Not signed in</DropdownMenuLabel>
          )}
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
            name: user.name || '',
            email: userEmail,
            image: userImage
          }}
          onClose={toggleSettings}
        />
      )}
    </div>
  );
}