'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Suspense, useEffect, useState } from 'react';
import Select from 'react-select';
import MentorsLoading from '../../loading';
import GeneralSectionHeader from '../components/GeneralSectionHeader';
import MentorCard from '../components/MentorCard';

interface Mentor {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  university: string;
}

interface University {
  value: string;
  label: string;
}

const mentors: Mentor[] = [
  { id: '1', name: 'John Doe', title: 'Software Engineer', imageUrl: '/path/to/john-doe.jpg', university: 'MIT' },
  { id: '2', name: 'Jane Smith', title: 'Data Scientist', imageUrl: '/path/to/jane-smith.jpg', university: 'Stanford' },
  // ... other mentors
];

export default function MentorsPage() {
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [universities, setUniversities] = useState<University[]>([]);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function testConnection() {
      console.log('Testing Supabase connection...');
      const { data, error } = await supabase.from('Universities').select('count');
      if (error) {
        console.error('Supabase connection error:', error);
      } else {
        console.log('Supabase connection successful. Row count:', data);
      }
    }

    testConnection();
  }, [supabase]);

  useEffect(() => {
    async function fetchUniversities() {
      console.log('Fetching universities...');
      try {
        const { data, error } = await supabase
          .from('Universities')
          .select('*');
        
        console.log('Supabase response:', { data, error });
        
        if (error) {
          console.error('Error fetching universities:', error);
        } else if (data && data.length > 0) {
          console.log('Universities data:', data);
          const formattedUniversities: University[] = data.map(uni => ({
            value: uni.id.toString(),
            label: uni.name || 'Unknown University'
          }));
          console.log('Formatted universities:', formattedUniversities);
          setUniversities(formattedUniversities);
        } else {
          console.log('No universities found in the database');
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    }

    fetchUniversities();
  }, [supabase]);

  console.log('Step 8: Rendering component');
  console.log('Current universities state:', universities);

  const filteredMentors = selectedUniversity
    ? mentors.filter(mentor => mentor.university === selectedUniversity.value)
    : mentors;

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <GeneralSectionHeader 
        title="Our Professors"
        description="Here are all your mentors"
        variant="default"
      />
      <div className="mt-6 mb-8">
        <Select<University>
          options={universities}
          onChange={(option) => setSelectedUniversity(option)}
          value={selectedUniversity}
          placeholder="Search for a university..."
          isClearable
          className="w-full max-w-md"
        />
      </div>
      <Suspense fallback={<MentorsLoading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMentors.map((mentor) => (
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
      </Suspense>
    </div>
  );
}