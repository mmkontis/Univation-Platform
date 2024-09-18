'use client';

import React from 'react';
import GeneralSectionHeader from '../components/GeneralSectionHeader';
import FilterBar from '../components/FilterBar';
import MentorCard from '../components/MentorCard';
import UnivationMentorsHeader from '../components/UnivationMentorsHeader';

const mentors = [
  { id: '1', name: 'John Doe', title: 'Software Engineer', imageUrl: '/path/to/john-doe.jpg' },
  { id: '2', name: 'Jane Smith', title: 'Data Scientist', imageUrl: '/path/to/jane-smith.jpg' },
  // ... other mentors
];

export default function MentorsProfilesPage() {
  return (
    <>
      <UnivationMentorsHeader currentPath="/mentors/profiles" />
      <div className="max-w-[1200px] mx-auto px-4">
        <GeneralSectionHeader 
          title="Your Mentors"
          description="Here are all your mentors"
          variant="default"
        />
        <FilterBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              variant="v1"
              name={mentor.name}
              title={mentor.title}
              imageUrl={mentor.imageUrl}
              id={mentor.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}