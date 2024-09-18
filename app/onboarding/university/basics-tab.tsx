import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

// Remove or comment out the Course import if it's not needed
// import { Course } from '@/types/course';

type BasicsTabProps = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    universityName: string;
    jobPosition: string;
    courseId: string;
    // ... other fields
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onContinue: () => void;
  courses: Course[];
};

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Retail',
  'Hospitality',
  'Entertainment',
  'Agriculture',
  'Energy'
];

const employeeRanges = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '501-1000',
  '1000+'
];

// Define Course type inline if it's not imported
type Course = {
  id: string;
  name: string;
  // ... other properties
};

const jobPositions = [
  'Rector',
  'Vice Rector',
  'Dean',
  'Professor',
  'Associate Professor',
  'Assistant Professor',
  'Lecturer',
  'Researcher',
  'Administrator',
  'Student Club Leader'
].sort((a, b) => {
  const order = [
    'Rector',
    'Vice Rector',
    'Dean',
    'Professor',
    'Associate Professor',
    'Assistant Professor',
    'Lecturer',
    'Researcher',
    'Administrator',
    'Student Club Leader'
  ];
  return order.indexOf(a) - order.indexOf(b);
});

export function BasicsTab({ formData, handleInputChange, onContinue }: BasicsTabProps) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleAutofill = () => {
      if (formRef.current) {
        const inputs = formRef.current.querySelectorAll('input');
        inputs.forEach((input) => {
          if (input.value !== formData[input.name as keyof typeof formData]) {
            const event = new Event('change', { bubbles: true });
            input.dispatchEvent(event);
          }
        });
      }
    };

    // Check for autofill on component mount and after a short delay
    handleAutofill();
    const timeoutId = setTimeout(handleAutofill, 100);

    return () => clearTimeout(timeoutId);
  }, [formData]);

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Let's start with the basics</h2>
      <p className="text-gray-600 mb-6">Please fill out the following fields to continue</p>
      <form ref={formRef} className="space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="John"
            />
          </div>
          <div className="w-1/2">
            <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Academic Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="jdoe@stanford.edu"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <Label htmlFor="universityName" className="block text-sm font-medium text-gray-700 mb-1">
              University Name
            </Label>
            <Input
              id="universityName"
              name="universityName"
              value={formData.universityName}
              onChange={handleInputChange}
              placeholder="Stanford University"
            />
          </div>
          <div className="w-1/2">
            <Label htmlFor="jobPosition" className="block text-sm font-medium text-gray-700 mb-1">
              Job Position
            </Label>
            <select
              id="jobPosition"
              name="jobPosition"
              value={formData.jobPosition}
              onChange={handleInputChange}
              className={cn(
                'flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 h-12 bg-gray-100 transition-shadow duration-200 ease-in-out hover:shadow-[0_0_0_4px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-0',
                'invalid:border-0 invalid:border-none invalid:shadow-[0_0_0_4px_rgba(239,68,68,0.5)]',
                'appearance-none bg-gray-100'
              )}
            >
              <option value="">Select a position</option>
              {jobPositions.map((position) => (
                <option key={position} value={position}>
                  {position}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ... other fields */}
      </form>
    </>
  );
}

// Add this CSS somewhere in your global styles