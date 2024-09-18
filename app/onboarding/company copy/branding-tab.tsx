import Image from 'next/image';

type BrandingTabProps = {
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'coverPhoto') => void;
};

export function BrandingTab({ handleFileUpload }: BrandingTabProps) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Branding</h2>
      <p className="text-gray-600 mb-6">Upload your organization's logo and cover photo</p>
      <div className="space-y-6">
        {['logo', 'coverPhoto'].map((type) => (
          <div key={type}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {type === 'logo' ? 'Logo (1:1 ratio)' : 'Cover Photo (4:3 ratio)'}
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor={`${type}-upload`} className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                    <input id={`${type}-upload`} name={`${type}-upload`} type="file" className="sr-only" onChange={(e) => handleFileUpload(e, type as 'logo' | 'coverPhoto')} accept="image/*" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}