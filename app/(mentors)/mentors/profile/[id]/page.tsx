import MentorCard from "@/app/(mentors)/mentors/components/MentorCard";
import { Button } from "@/app/components/MentorsPlatformButton";
import YouTubePlayer from "@/components/YouTubePlayer";
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

// Mock data - replace with actual data fetching logic
const mentorData: Record<string, any> = {
  "jane-smith": {
    name: "Dr. Jane Smith",
    field: "Computer Science",
    university: "MIT",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    bio: "Dr. Jane Smith is a renowned expert in Artificial Intelligence and Machine Learning.",
    expertise: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    birthYear: 1985,
    lifePath: [
      { stage: "Early Career", description: "Started as a research assistant at Stanford AI Lab", year: 2010, icon: "mdi:school" },
      { stage: "Industry Experience", description: "Joined Google as a Machine Learning Engineer", year: 2015, icon: "mdi:briefcase" },
      { stage: "Personal Growth", description: "Took a year-long sabbatical to travel and learn meditation", year: 2018, icon: "mdi:heart" },
      { stage: "Financial Milestone", description: "Successfully exited a tech startup, securing financial independence", year: 2019, icon: "mdi:cash" },
      { stage: "Academic Leadership", description: "Became Associate Professor at MIT", year: 2020, icon: "mdi:teach" },
    ],
    speeches: [
      { title: "The Future of AI", year: 2022, youtubeId: "Q_0-1f-40sM", default: true, description: "Explore the latest advancements and future possibilities in the field of Artificial Intelligence." },
      { title: "Ethics in Machine Learning", year: 2021, youtubeId: "dQw4w9WgXcQ", description: "Discuss the ethical implications and responsible use of Machine Learning technologies." },
    ],
  },
  // ... other mentor data
};

// Simulated related mentors
const relatedMentors = [
  { id: "john-doe", name: "Prof. John Doe", title: "Business Administration", imageUrl: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: "emily-brown", name: "Dr. Emily Brown", title: "Engineering", imageUrl: "https://randomuser.me/api/portraits/women/2.jpg" },
];

function getRandomBackgroundImage() {
  const images = [
    "https://source.unsplash.com/1600x900/?university,lecture",
    "https://source.unsplash.com/1600x900/?classroom,education",
    "https://source.unsplash.com/1600x900/?library,study"
  ];
  return images[Math.floor(Math.random() * images.length)];
}

// Add these type definitions
type Expertise = string;
type LifePathStage = {
  stage: string;
  description: string;
  year: number;
  icon: string;
};
type Speech = {
  title: string;
  year: number;
  youtubeId: string;
  default?: boolean;
  description: string;
};

export default function MentorProfilePage({ params }: { params: { id: string } }) {
  const mentor = mentorData[params.id] || null;

  if (!mentor) {
    return (
      <div className="content-wrapper max-w-[900px] mx-auto">
        <h1 className="h1_univation">Mentor Not Found</h1>
        <p className="h1_univation_subheader">Sorry, we couldn't find a mentor with the slug: {params.id}</p>
        <Link href="/mentors" className="buttonRoundBlue">Back to Mentors</Link>
      </div>
    );
  }
  return (
    <>
      <div className="univation-blue-background overlay">
        <main className="container mx-auto px-4">
          <div className="max-w-[900px] mx-auto">
            <div className="hero-container relative max-w-[900px] mx-auto rounded-background">
              <div className="hero" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${getRandomBackgroundImage()}')`}}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                  <div className="univation-youtube-player-wrapper z-10">
                    <YouTubePlayer videos={mentor.speeches} />
                  </div>
                </div>
              </div>
              <Link href="/mentors" className="back-button" id="back-to-mentors">
                <Icon icon="mdi:arrow-left" className="h-5 w-5 mr-2" />
                Back
              </Link>
            </div>
          </div>
          
          <div className="main-content max-w-[900px] mx-auto mt-8">
            <div className="content-wrapper mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-6">
                  <Image src={mentor.image} alt={mentor.name} width={100} height={100} className="mentor-image rounded-full" />
                  <div>
                    <h2 className="h2_univation">{mentor.name}</h2>
                    <p className="h2_univation_subheader">{mentor.field}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="primary" size="sm" className="shimmer-button">
                    <span className="shimmer-text">Book Mentor</span>
                  </Button>
                  <div className="tag-white inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full border border-gray-200">
                    <Image src="/path/to/university-logo.png" alt="University Logo" width={24} height={24} className="object-contain" />
                    <span className="text-sm font-semibold text-gray-800">{mentor.university}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <ul className="tag-list">
                  {mentor.expertise.map((area: Expertise, index: number) => (
                    <li key={index} className="tag-trans-white">{area}</li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-700">{mentor.bio}</p>
            </div>

            <div className="content-wrapper mb-8">
              <h2 className="h2_univation mb-4">Life Path</h2>
              <ul className="life-path-list">
                {mentor.lifePath.map((stage: LifePathStage, index: number) => (
                  <li key={index} className="mb-8 relative">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full mr-4 flex items-center justify-center text-white">
                        <Icon icon={stage.icon} className="w-6 h-6" />
                      </div>
                      <div>
                        <strong className="h2_univation_subheader">{stage.stage}</strong>
                        <span className="text-sm text-gray-500 ml-2">Age: {stage.year - mentor.birthYear}</span>
                      </div>
                    </div>
                    <p className="ml-14 text-gray-700">{stage.description}</p>
                    <p className="ml-14 text-sm text-gray-500">{stage.year}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-wrapper mb-8">
              <h2 className="h2_univation mb-6">Speeches</h2>
              <div id="youtube-player-container" className="mb-8">
                <YouTubePlayer videos={mentor.speeches} />
              </div>
              <div className="anime-grid mb-6">
                {mentor.speeches.map((speech: Speech, index: number) => (
                  <div
                    key={index}
                    className={`speech-card cursor-pointer transition-all duration-300 ${index === 0 ? 'active' : ''}`}
                    data-index={index}
                  >
                    <div className="relative rounded-lg overflow-hidden">
                      <Image
                        src={`https://img.youtube.com/vi/${speech.youtubeId}/mqdefault.jpg`}
                        alt={`Thumbnail for ${speech.title}`}
                        width={320}
                        height={180}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-sm font-semibold mt-2 line-clamp-2">{speech.title}</h3>
                  </div>
                ))}
              </div>
              <div id="active-speech-info" className="bg-[#f5f5f5] rounded-lg p-6 shadow-sm">
                <h3 className="h2_univation mb-3">{mentor.speeches[0].title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{mentor.speeches[0].description || "No description available."}</p>
              </div>
            </div>

            <div className="content-wrapper mt-12">
              <h2 className="h2_univation mb-8">Related Mentors</h2>
              <div className="content-wrapper mb-8">
                <div className="anime-grid">
                  {relatedMentors.map((relatedMentor) => (
                    <MentorCard
                      key={relatedMentor.id}
                      variant="v2"
                      name={relatedMentor.name}
                      title={relatedMentor.title}
                      imageUrl={relatedMentor.imageUrl}
                      id={relatedMentor.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <style jsx>{`
font-size: 1.125rem;
line-height: 1.75rem;
}
.md\:text-xl{
font-size: 1.25rem;
line-height: 1.75rem;
}
.md\:ring-1{
--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); 
box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.md\:ring-inset{
--tw-ring-inset: inset;
}
.md\:ring-border{
--tw-ring-color: hsl(var(--border));
}
}
@media (min-width: 1024px){
.lg\:order-1{
order: 1;
}
.lg\:order-2{
order: 2;
}
.lg\:col-span-2{
grid-column: span 2 / span 2;
}
.lg\:col-span-3{
grid-column: span 3 / span 3;
}
.lg\:-m-4{
margin: -1rem;
}
.lg\:mt-28{
margin-top: 7rem;
}
.lg\:block{
display: block;
}
.lg\:flex{
display: flex;
}
.lg\:grid{
display: grid;
}
.lg\:hidden{
display: none;
}
.lg\:w-60{
width: 15rem;
}
.lg\:w-\[500px\]{
width: 500px;
}
.lg\:w-\[600px\]{
width: 600px;
}
.lg\:w-full{
width: 100%;
}
.lg\:max-w-5xl{
max-width: 64rem;
}
.lg\:max-w-none{
max-width: none;
}
.lg\:basis-56{
flex-basis: 14rem;
}
.lg\:translate-x-0{
--tw-translate-x: 0px;
transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.lg\:columns-3{
-moz-columns: 3;
     columns: 3;
}
.lg\:grid-cols-2{
grid-template-columns: repeat(2, minmax(0, 1fr));
}
.lg\:grid-cols-3{
grid-template-columns: repeat(3, minmax(0, 1fr));
}
.lg\:grid-cols-4{
grid-template-columns: repeat(4, minmax(0, 1fr));
}
.lg\:grid-cols-\[\.75fr_1fr\]{
grid-template-columns: .75fr 1fr;
}
.lg\:grid-cols-\[1fr_300px\]{
grid-template-columns: 1fr 300px;
}
.lg\:grid-cols-\[240px_1fr\]{
grid-template-columns: 240px 1fr;
}
.lg\:items-center{
align-items: center;
}
.lg\:gap-10{
gap: 2.5rem;
}
.lg\:gap-x-7{
-moz-column-gap: 1.75rem;
     column-gap: 1.75rem;
}
.lg\:gap-x-8{
-moz-column-gap: 2rem;
     column-gap: 2rem;
}
.lg\:gap-y-16{
row-gap: 4rem;
}
.lg\:space-y-6 > :not([hidden]) ~ :not([hidden]){
--tw-space-y-reverse: 0;
margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}
.lg\:overflow-visible{
overflow: visible;
}
.lg\:px-0{
padding-left: 0px;
padding-right: 0px;
}
.lg\:px-3{
padding-left: 0.75rem;
padding-right: 0.75rem;
}
.lg\:px-6{
padding-left: 1.5rem;
padding-right: 1.5rem;
}
.lg\:px-8{
padding-left: 2rem;
padding-right: 2rem;
}
.lg\:py-10{
padding-top: 2.5rem;
padding-bottom: 2.5rem;
}
.lg\:py-20{
padding-top: 5rem;
padding-bottom: 5rem;
}
.lg\:py-24{
padding-top: 6rem;
padding-bottom: 6rem;
}
.lg\:py-32{
padding-top: 8rem;
padding-bottom: 8rem;
}
.lg\:py-8{
padding-top: 2rem;
padding-bottom: 2rem;
}
.lg\:text-\[40px\]{
font-size: 40px;
}
.lg\:text-\[66px\]{
font-size: 66px;
}
}
@media (min-width: 1280px){
.xl\:col-span-1{
grid-column: span 1 / span 1;
}
.xl\:block{
display: block;
}
.xl\:grid{
display: grid;
}
.xl\:hidden{
display: none;
}
.xl\:h-\[28rem\]{
height: 28rem;
}
.xl\:max-w-\[80rem\]{
max-width: 80rem;
}
.xl\:columns-4{
-moz-columns: 4;
     columns: 4;
}
.xl\:grid-cols-4{
grid-template-columns: repeat(4, minmax(0, 1fr));
}
.xl\:grid-cols-\[1fr_300px\]{
grid-template-columns: 1fr 300px;
}
.xl\:gap-20{
gap: 5rem;
}
.xl\:px-6{
padding-left: 1.5rem;
padding-right: 1.5rem;
}
.xl\:py-48{
padding-top: 12rem;
padding-bottom: 12rem;
}
.xl\:text-6xl\/none{
font-size: 3.75rem;
line-height: 1;
}
}
@media (min-width: 1536px) {
  .\32xl\:block {
    display: block;
  }
  .\32xl\:hidden {
    display: none;
  }
}
.\2xl\:px-0 {
  padding-left: 0px;
  padding-right: 0px;
}
.\[\&\:not\(\:first-child\)\]\:mt-6:not(:first-child){
margin-top: 1.5rem;
}
.\[\&\>\*\]\:text-muted-foreground>*{
color: hsl(var(--muted-foreground));
}
.\[\&\>h3\]\:\!mt-0>h3{
margin-top: 0px !important;
}
.\[\&\>h4\]\:\!mt-0>h4{
margin-top: 0px !important;
}
.\[\&\>p\]\:text-muted-foreground>p{
color: hsl(var(--muted-foreground));
}
.\[\&\[align\=center\]\]\:text-center[align=center]{
text-align: center;
}
.\[\&\[align\=right\]\]\:text-right[align=right]{
text-align: right;
}
.\[\&\[data-state\=open\]\>svg\]\:rotate-180[data-state=open]>svg{
--tw-rotate: 180deg;
transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}</style>
<style data-vite-dev-id="C:/Users/mmkon/Desktop/Univation Landing Page/node_modules/.pnpm/astro@4.15.3_rollup@4.21.2_typescript@5.5.4/node_modules/astro/components/ViewTransitions.astro?astro&amp;type=style&amp;index=0&amp;lang.css">/* Route announcer */
    .astro-route-announcer {
            position: absolute;
            left: 0;
            top: 0;
            clip: rect(0 0 0 0);
            -webkit-clip-path: inset(50%);
                    clip-path: inset(50%);
            overflow: hidden;
            white-space: nowrap;
            width: 1px;
            height: 1px;      `}</style>
    </>
  );
}