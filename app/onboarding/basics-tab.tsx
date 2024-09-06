import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type BasicsTabProps = {
  formData: {
    organizationName: string;
    tagline: string;
    website: string;
    yearEstablished: string;
    industry: string;
    numberOfEmployees: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
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

export function BasicsTab({ formData, handleInputChange }: BasicsTabProps) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Let's start with the basics</h2>
      <p className="text-gray-600 mb-6">Please fill out the following fields in order to continue</p>
      <form className="space-y-4">
        {['organizationName', 'tagline', 'website', 'yearEstablished'].map((field) => (
          <div key={field}>
            <Label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
            </Label>
            <Input
              id={field}
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleInputChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
            />
          </div>
        ))}
        
        <div className="flex space-x-4">
          <div className="w-1/2">
            <Label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry</Label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select an industry</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
          
          <div className="w-1/2">
            <Label htmlFor="numberOfEmployees" className="block text-sm font-medium text-gray-700 mb-1">Number of Employees</Label>
            <select
              id="numberOfEmployees"
              name="numberOfEmployees"
              value={formData.numberOfEmployees}
              onChange={handleInputChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select range</option>
              {employeeRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </>
  );
}