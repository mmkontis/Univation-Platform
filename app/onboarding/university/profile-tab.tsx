import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';

interface ProfileTabProps {
  formData: {
    profilePhoto?: File;
    socialMedia: string;
    socialMediaValue: string;
    shortBio: string;
    phoneNumber: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>, type: 'profilePhoto') => void;
}

export const ProfileTab: React.FC<ProfileTabProps> = ({ formData, handleInputChange, handleFileUpload }) => {
  const [showSocialMediaInput, setShowSocialMediaInput] = useState(false);

  const handleSocialMediaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleInputChange(e);
    setShowSocialMediaInput(e.target.value !== '');
  };

  return (
    <div >
      <h2 className="text-lg font-semibold">Your Profile on the Platform</h2>
      <p className="text-sm text-gray-600">Perfect your Profile to attract better and busier Mentors.</p>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Photo Profile</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileUpload(e, 'profilePhoto')}
          className="w-24 h-24 border border-gray-300 rounded-lg shadow-sm cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Social Media</label>
        <select
          name="socialMedia"
          value={formData.socialMedia}
          onChange={(e) => {
            handleInputChange(e);
            setShowSocialMediaInput(e.target.value !== '');
          }}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select social media platform</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Twitter">Twitter</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="YouTube">YouTube</option>
          <option value="TikTok">TikTok</option>
          <option value="Personal Site">Personal Site</option>
        </select>
        {showSocialMediaInput && (
          <Input
            type="text"
            name="socialMediaValue"
            value={formData.socialMediaValue}
            onChange={handleInputChange}
            placeholder="Enter your profile URL"
          />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Short Bio</label>
        <Textarea
          name="shortBio"
          value={formData.shortBio}
          onChange={handleInputChange}
          placeholder="e.g. John Doe is an Associate Professor in the Department of Computer Science at Stanford University..."
          rows={8}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Phone Number</label>
        <Input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="+1 555 123 4567"
        />
      </div>
    </div>
  );
};