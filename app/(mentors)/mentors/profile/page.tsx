import UnivationMentorsHeader from '../components/UnivationMentorsHeader';
import Link from 'next/link';

export default function MentorProfileListPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <UnivationMentorsHeader />

      <main className="flex-grow">
        {/* ... rest of your content ... */}
      </main>
    </div>
  );
}