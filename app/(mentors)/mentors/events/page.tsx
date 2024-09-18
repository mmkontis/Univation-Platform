import UnivationMentorsHeader from '../components/UnivationMentorsHeader';
import GeneralSectionHeader from '../components/GeneralSectionHeader';
import EventItem from '../components/EventItem';

// Mock data - replace with actual data fetching logic
const events = [
  {
    slug: 'from-student-to-entrepreneur',
    date: "Friday, 19 Jul, 2024 at 11:00",
    title: "From Student to Entrepreneur",
    imageUrl: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3ff6c0f73a345f1694be463336f9036c.cdn.bubble.io%2Ff1713955483856x505274220358671100%2FDALL%25C2%25B7E%25202024-04-24%252013.24.07%2520-%2520A%2520digitally%2520illustrated%2520depiction%2520of%2520%2527Personal%2520Career%2520Development%2520Path%2527%2520with%2520a%2520greenish%2520hue%252C%2520symbolizing%2520growth%2520and%2520renewal.%2520The%2520scene%2520traces%2520a%2520studen.webp?w=512&h=&auto=compress&dpr=1&fit=max",
    isOnline: true,
    slots: 20,
  },
  // ... other events
];

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GeneralSectionHeader
        title="Events"
        description="Discover and participate in upcoming events, workshops, and webinars designed to enhance your skills and expand your network."
        variant="events"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {events.map((event) => (
          <EventItem
            key={event.slug}
            slug={event.slug}
            date={event.date}
            title={event.title}
            imageUrl={event.imageUrl}
            isOnline={event.isOnline}
            slots={event.slots}
          />
        ))}
      </div>
    </div>
  );
}