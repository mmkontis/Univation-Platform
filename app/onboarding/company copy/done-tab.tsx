import { Button } from '@/components/ui/button';

interface DoneTabProps {
  onDone: () => Promise<void>;
}

export default function DoneTab({ onDone }: DoneTabProps) {
  return (
    <div>
      <h2>Onboarding Complete!</h2>
      <p>You're all set to start using our platform.</p>
      <Button onClick={onDone}>Go to Dashboard</Button>
    </div>
  );
}