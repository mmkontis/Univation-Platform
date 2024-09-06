import Image from 'next/image';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Image
        src="/logos/univation-blue-logo.svg"
        alt="Univation Blue Logo"
        width={1515}
        height={270}
      />
      {/* Rest of your dashboard content */}
    </div>
  );
}

export default Dashboard;