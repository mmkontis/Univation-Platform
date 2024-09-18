type TargetsTabProps = {
    targets: string[];
    handleTargetSelection: (target: string) => void;
  };
  
  export function TargetsTab({ targets, handleTargetSelection }: TargetsTabProps) {
    return (
      <>
        <h2 className="text-2xl font-semibold mb-4">Choose Your Targets</h2>
        <p className="text-gray-600 mb-6">Select the types of opportunities you're interested in</p>
        <div className="space-y-4">
          {['Internships', 'Entry-level jobs', 'Mid-level positions', 'Senior roles', 'Part-time work', 'Freelance projects'].map(target => (
            <div key={target} className="flex items-center">
              <input
                type="checkbox"
                id={`target-${target}`}
                checked={targets.includes(target)}
                onChange={() => handleTargetSelection(target)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={`target-${target}`} className="ml-2 block text-sm text-gray-900">
                {target}
              </label>
            </div>
          ))}
        </div>
      </>
    );
  }