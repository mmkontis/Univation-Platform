import { Suspense } from 'react';

async function fetchMentors() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  return [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }];
}

async function MentorList() {
  const mentors = await fetchMentors();
  return (
    <ul>
      {mentors.map(mentor => (
        <li key={mentor.id}>{mentor.name}</li>
      ))}
    </ul>
  );
}

export default function MentorsPage() {
  return (
    <div>
      <h1>Mentors</h1>
      <Suspense fallback={<p>Loading mentors...</p>}>
        <MentorList />
      </Suspense>
    </div>
  );
}