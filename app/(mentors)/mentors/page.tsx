import React from 'react';
import WelcomeSection from './components/WelcomeSection';
import UpcomingSessions from './components/UpcomingSessions';
import NewMentors from './components/NewMentors';
import SessionIdeas from './components/SessionIdeas';
import WorkshopIdeas from './components/WorkshopIdeas';
import UnivationMentorsHeader from './components/UnivationMentorsHeader';

export default function MentorsHomePage() {
  return (
    <>
      <UnivationMentorsHeader currentPath="/mentors" />
      <WelcomeSection />
      <UpcomingSessions />
      <NewMentors />
      <SessionIdeas />
      <WorkshopIdeas />
    </>
  );
}