import React from 'react';
import Card from './UI/WhiteContainerCard';
import Link from 'next/link';

interface EventItemProps {
  date: string;
  title: string;
  imageUrl: string;
  isOnline: boolean;
  slots: number;
  slug: string; // Add this prop
}

export default function EventItem({ date, title, imageUrl, isOnline, slots, slug }: EventItemProps) {
  return (
    <Link href={`/mentors/events/${slug}`} className="block">
      <Card>
        <div className="relative h-48 rounded-t-lg overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs font-semibold py-1 px-2 rounded shadow">
            {date}
          </div>
        </div>
        <div className="p-4">
          <div 
            className="bubble-element Text cnaCvaM"
            style={{
              alignSelf: 'center',
              minWidth: '200px',
              order: 1,
              minHeight: '0px',
              maxHeight: '46px',
              width: '200px',
              flexGrow: 1,
              height: 'max-content',
              margin: '0px',
              zIndex: 2,
              whiteSpace: 'pre-wrap',
              overflow: 'visible',
              fontFamily: 'var(--font_default)',
              fontSize: '18px',
              fontWeight: 600,
              color: 'rgb(18, 25, 38)',
              lineHeight: 1.5,
              borderRadius: '0px',
              opacity: 1,
            }}
          >
            <div>{title}</div>
          </div>
          {isOnline && (
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2 mt-2">
              Online
            </span>
          )}
          {slots !== undefined && (
            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mt-2">
              {slots} slots
            </span>
          )}
        </div>
      </Card>
    </Link>
  );
}