import { cn } from '@/lib/utils';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';
import { useState } from 'react';

type GoalsTabProps = {
  goals: string[];
  handleGoalSelection: (goal: string) => void;
  mentorsCount: number;
  setMentorsCount: (count: number) => void;
  currentlyBringMentors: boolean;
  setCurrentlyBringMentors: (value: boolean) => void;
  whyNotBringMentors: string;
  setWhyNotBringMentors: (value: string) => void;
  idealMentors: string;
  setIdealMentors: (value: string) => void;
};

export function GoalsTab({
  goals,
  handleGoalSelection,
  mentorsCount,
  setMentorsCount,
  currentlyBringMentors,
  setCurrentlyBringMentors,
  whyNotBringMentors,
  setWhyNotBringMentors,
  idealMentors,
  setIdealMentors,
}: GoalsTabProps) {
  const [showIdealMentors, setShowIdealMentors] = useState(false);
  const [radioSelected, setRadioSelected] = useState<string | null>(null);
  const [howToInvite, setHowToInvite] = useState('');

  const goalOptions = [
    'Bringing amazing Mentors into my Lectures',
    'Connecting my students to Companies and Job opportunities',
    'Interested in giving Lectures at other Universities',
    'Looking to connect personally and network with Mentors',
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Goals using the Platform</h2>
        <p className="text-gray-600 mb-6">Give us some feedback to provide you with the best experience!</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-1">
          <label className="text-sm font-medium">
            How many mentors or workshops would you like to be inviting?
          </label>
          <div className="bg-gray-100 p-4 rounded-md">
            <Input
              type="range"
              min={1}
              max={10}
              value={mentorsCount}
              onChange={(e) => setMentorsCount(parseInt(e.target.value))}
              className="w-full h-12 focus:outline-none focus:ring-0 hover:shadow-[0_0_0_0_rgba(0,0,0,0.15)]"
            />
            <p className="text-xs text-gray-500 mt-1">At least {mentorsCount} per Semester</p>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">
            What is your goal using the platform?
          </label>
          <div className="space-y-2">
            {goalOptions.map((goal) => (
              <div key={goal} className="flex items-center">
                <input
                  type="checkbox"
                  id={`goal-${goal}`}
                  checked={goals.includes(goal)}
                  onChange={() => handleGoalSelection(goal)}
                  className={cn(
                    'h-5 w-5 text-indigo-600 bg-white transition-shadow duration-200 ease-in-out hover:shadow-[0_0_0_4px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-0',
                    'rounded'
                  )}
                />
                <label htmlFor={`goal-${goal}`} className="ml-2 text-sm text-gray-700">
                  {goal}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">
            Do you currently bring Mentors to your Lectures?
          </label>
          <div className="flex space-x-4 mt-1">
            {['Yes', 'No'].map((option) => (
              <label key={option} className="inline-flex items-center">
                <input
                  type="radio"
                  className={cn(
                    'h-5 w-5 text-indigo-600 bg-white transition-shadow duration-200 ease-in-out hover:shadow-[0_0_0_4px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-0',
                    'rounded-full'
                  )}
                  name="bringMentors"
                  value={option.toLowerCase()}
                  checked={radioSelected === option}
                  onChange={() => {
                    setCurrentlyBringMentors(option === 'Yes');
                    setShowIdealMentors(option === 'Yes');
                    setRadioSelected(option);
                  }}
                />
                <span className="ml-2 text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {radioSelected === 'No' && (
          <div className="space-y-1">
            <label className="text-sm font-medium">
              Why you don't bring mentors to your lectures?
            </label>
            <Textarea
              value={whyNotBringMentors}
              onChange={(e) => setWhyNotBringMentors(e.target.value)}
              placeholder='e.g. "It takes too much time to/ There is no need/..."'
              className="w-full mt-1"
            />
          </div>
        )}

        {radioSelected === 'No' && whyNotBringMentors.trim() !== '' && (
          <div className="space-y-1">
            <label className="text-sm font-medium">
              How would you like us to invite mentors to your lectures?
            </label>
            <Textarea
              value={howToInvite}
              onChange={(e) => setHowToInvite(e.target.value)}
              placeholder="e.g. Provide a list of potential mentors, help with outreach..."
              className="w-full mt-1"
            />
          </div>
        )}

        {radioSelected === 'Yes' && (
          <div className="space-y-1">
            <label className="text-sm font-medium">
              What mentors have you invited?
            </label>
            <Textarea
              value={idealMentors}
              onChange={(e) => setIdealMentors(e.target.value)}
              placeholder="e.g. 1) Sam Altman, OpenAI's CEO, 2) Tim Cook, Apple's CEO..."
              className="w-full mt-1"
            />
          </div>
        )}
      </div>
    </div>
  );
}