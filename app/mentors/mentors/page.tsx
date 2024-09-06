import UnivationMentorsHeader from '../components/UnivationMentorsHeader';
import MentorList from '../../components/MentorList';
import SearchBar from '../../components/SearchBar';

export default function MentorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <UnivationMentorsHeader />

      <main className="flex-grow bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <section className="w-full max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Mentors</h1>
            <p className="text-gray-600 mb-8">
              Explore our diverse community of experienced mentors ready to guide and inspire you on your learning journey.
            </p>

            <div className="mb-8">
              <SearchBar />
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Featured Mentors</h2>
              <MentorList />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">All Mentors</h2>
              <MentorList />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}