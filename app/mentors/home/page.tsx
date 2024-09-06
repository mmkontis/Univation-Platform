import UnivationMentorsHeader from '../components/UnivationMentorsHeader';
import MentorList from '../../components/MentorList';
import Image from 'next/image';
import Link from 'next/link';

export default function MentorsHomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <UnivationMentorsHeader />

      <main className="flex-grow bg-gray-100">
        {/* ... rest of your content ... */}
      </main>
    </div>
  );
}