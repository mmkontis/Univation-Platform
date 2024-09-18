import React from 'react';

async function fetchProfessorsData() {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
  // Fetch professors data here
  return [{ id: 1, name: 'Professor 1' }, { id: 2, name: 'Professor 2' }]; // Example data
}

async function ProfessorsList() {
  const professors = await fetchProfessorsData();
  return (
    <ul>
      {professors.map(professor => (
        <li key={professor.id}>{professor.name}</li>
      ))}
    </ul>
  );
}

export default function ProfessorsPage() {
  return (
    <div>
      <React.Suspense fallback={<p>Loading professors...</p>}>
        <ProfessorsList />
      </React.Suspense>
    </div>
  );
}