import GeneralSectionHeader from './GeneralSectionHeader';
import Image from 'next/image';

export default function UpcomingSessions() {
  return (
    <div className="flex flex-col items-center w-full">
      <GeneralSectionHeader
        title="Your Upcoming Sessions"
        description="View and manage your scheduled mentorship sessions here."
        variant="small"
      />
      <div className="flex flex-col items-center gap-2 mt-4">
        <Image 
          src="/ui-images/empty.png" 
          alt="No sessions" 
          width={176} 
          height={132} 
        />
        <p className="font-semibold">You haven't created any session yet</p>
        <p className="text-gray-600 text-center">Welcome, mentors! Prepare to share your expertise and make a meaningful impact on the next generation of learners.</p>
      </div>
      <button className="text-blue-600 font-semibold mt-4">Past Sessions</button>
    </div>
  );
}