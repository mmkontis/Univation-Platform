"use client";

import React, { useRef, useState, useEffect } from 'react';
import GeneralSectionHeader from './GeneralSectionHeader';
import MentorCard from './MentorCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const mentors = [
  { name: "Erifili Gounari", title: "Founder & CEO at The Z Link", imageUrl: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3ff6c0f73a345f1694be463336f9036c.cdn.bubble.io%2Ff1720608938995x230060976610155550%2FIMG_6474.jpeg?w=128&h=128&auto=compress&dpr=1&fit=max" },
  { name: "Dimitris Dimosiaris", title: "General Manager at Founderhood", imageUrl: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3ff6c0f73a345f1694be463336f9036c.cdn.bubble.io%2Ff1721391951985x263548686893919420%2FDimosiaris_square.jpg?w=128&h=128&auto=compress&dpr=1&fit=max" },
  { name: "Sophia Chen", title: "CTO at TechInnovate", imageUrl: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "Liam O'Connor", title: "Product Manager at GlobalSoft", imageUrl: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Aisha Patel", title: "Data Scientist at AI Solutions", imageUrl: "https://randomuser.me/api/portraits/women/3.jpg" },
  { name: "Marcus Andersson", title: "UX Designer at DesignCraft", imageUrl: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Yuki Tanaka", title: "Blockchain Developer at CryptoTech", imageUrl: "https://randomuser.me/api/portraits/women/5.jpg" },
  { name: "Rafael Santos", title: "Marketing Director at BrandBoost", imageUrl: "https://randomuser.me/api/portraits/men/6.jpg" },
  { name: "Zoe Thompson", title: "Sustainability Consultant at EcoFuture", imageUrl: "https://randomuser.me/api/portraits/women/7.jpg" },
  { name: "Hassan Al-Farsi", title: "Fintech Entrepreneur at PayEase", imageUrl: "https://randomuser.me/api/portraits/men/8.jpg" },
  { name: "Ingrid Larsson", title: "Biotech Researcher at GenomeX", imageUrl: "https://randomuser.me/api/portraits/women/9.jpg" },
  { name: "Kwame Osei", title: "EdTech Innovator at LearnSphere", imageUrl: "https://randomuser.me/api/portraits/men/10.jpg" },
];

export default function NewMentors() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current && e.button === 0) { // Only trigger for left mouse button
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollContainerRef.current) {
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="w-full relative">
      <GeneralSectionHeader
        title="New Mentors"
        description="Explore profiles of leading mentors ready to inspire your students."
        variant="small"
      />
      <div className="relative mt-4">
        <div
          ref={scrollContainerRef}
          className={`flex overflow-x-auto gap-6 pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} scrollbar-hide`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {mentors.map((mentor, index) => (
            <div key={index}>
              <MentorCard
                variant="v2"
                name={mentor.name}
                title={mentor.title}
                imageUrl={mentor.imageUrl}
              />
            </div>
          ))}
        </div>
        {showLeftButton && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>
        )}
        {showRightButton && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
}