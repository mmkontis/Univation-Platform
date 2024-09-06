import UnivationMentorsHeader from '../components/UnivationMentorsHeader';
import Link from 'next/link';

export default function MentorControlPanelPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <UnivationMentorsHeader />

      <main className="flex-grow bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-6">Mentor Control Panel</h1>
          {/* Add control panel content here */}
        </div>
      </main>
    </div>
  );
}