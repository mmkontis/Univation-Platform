import { Button } from '@/components/ui/button';

export function DoneTab() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">All Set!</h2>
      <p className="text-gray-600 mb-6">Your organization profile has been created successfully.</p>
      <Button onClick={() => console.log('Redirect to dashboard')}>Go to Dashboard</Button>
    </>
  );
}