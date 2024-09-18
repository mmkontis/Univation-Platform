import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

// Assuming you have a type for your event data
type Event = {
  title: string;
  date: Date;
  description: string;
  speaker: string;
  imageUrl: string;
  location: string;
};

// This would be replaced with actual data fetching logic
const getEventData = async (slug: string): Promise<Event> => {
  // Placeholder data
  return {
    title: "Talk/Lecture with Dimitris Dimosiaris",
    date: new Date("2024-07-25T12:00:00"),
    description: "Join us for an insightful talk with Dimitris Dimosiaris on the future of technology and entrepreneurship.",
    speaker: "Dimitris Dimosiaris",
    imageUrl: "https://example.com/event-image.jpg",
    location: "Univation Auditorium",
  };
};

export default async function EventPage({ params }: { params: { slug: string } }) {
  const event = await getEventData(params.slug);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src={event.imageUrl}
            alt={event.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold text-center">{event.title}</h1>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-lg font-semibold">{format(event.date, "EEEE, d MMM, yyyy 'at' HH:mm")}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg">{event.location}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">{event.description}</p>
          <div className="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-lg font-semibold">Speaker: {event.speaker}</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Register for Event
          </button>
        </div>
      </div>
    </div>
  );
}
