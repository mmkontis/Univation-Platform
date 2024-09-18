import { Metadata } from 'next';
import UnivationMentorsHeader from './mentors/components/UnivationMentorsHeader';
import NavigationLoader from './NavigationLoader';

export const metadata: Metadata = {
  title: 'Univation Mentors',
  description: 'Connect with mentors at Univation',
};

export default function MentorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[rgb(250,250,250)] min-h-screen">
      <UnivationMentorsHeader currentPath={''} />
      <NavigationLoader />
      <div className="pt-[88px] px-6 pb-6">
        <div className="max-w-[1200px] mx-auto space-y-[20px]">
          {children}
        </div>
      </div>
    </div>
  );
}