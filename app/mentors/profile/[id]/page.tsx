import UnivationMentorsHeader from '../../components/UnivationMentorsHeader';
import Image from 'next/image';
import Link from 'next/link';
import ClientComponent from './ClientComponent';

export default function MentorProfilePage({ params }: { params: { id: string } }) {
  const mentorId = params.id;

  return (
    <div className="flex flex-col min-h-screen">
      <UnivationMentorsHeader />

      <main className="flex-grow bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-6">Mentor Profile: {mentorId}</h1>
          {/* Add more profile content here */}
          <ClientComponent mentorId={mentorId} />
        </div>
      </main>
    </div>
  );
}