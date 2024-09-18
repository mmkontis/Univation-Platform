import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function MentorProfilePage1() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mentorData, setMentorData] = useState<any>(null);
  const params = useParams();
  const mentorId = params?.id as string;

  useEffect(() => {
    async function fetchMentorData() {
      try {
        setLoading(true);
        // Replace this with your actual API call
        const response = await fetch(`/api/mentors/${mentorId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch mentor data');
        }
        const data = await response.json();
        setMentorData(data);
      } catch (err) {
        setError('Error fetching mentor data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (mentorId) {
      fetchMentorData();
    }
  }, [mentorId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!mentorData) {
    return <div>No mentor data found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{mentorData.name}</h1>
      <p className="text-xl mb-2">{mentorData.title}</p>
      <img 
        src={mentorData.imageUrl} 
        alt={mentorData.name} 
        className="w-32 h-32 rounded-full mb-4"
      />
      <p className="mb-4">{mentorData.bio}</p>
      <h2 className="text-2xl font-semibold mb-2">Expertise</h2>
      <ul className="list-disc list-inside mb-4">
        {mentorData.expertise.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Mentor ID: {mentorId}</p>
    </div>
  );
}