import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/MentorsPlatformButton';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';

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

  const handleWriteWithAI = () => {
    console.log("Write with AI clicked");
  };

  const getSocialMediaPlaceholder = (platform: string) => {
    switch (platform) {
      case 'LinkedIn':
        return 'https://www.linkedin.com/in/yourprofile';
      case 'Twitter':
        return 'https://twitter.com/yourusername';
      case 'Facebook':
        return 'https://www.facebook.com/yourprofile';
      case 'Instagram':
        return 'https://www.instagram.com/yourusername';
      case 'YouTube':
        return 'https://www.youtube.com/c/yourchannel';
      case 'TikTok':
        return 'https://www.tiktok.com/@yourusername';
      case 'Personal Site':
        return 'https://www.yourpersonalsite.com';
      default:
        return 'Enter your profile URL';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Your Profile on the Platform</h2>
        <p className="text-sm text-gray-600 mt-1">Perfect your Profile to attract better and busier Mentors.</p>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Photo Profile</label>
        <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors overflow-hidden">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, 'profilePhoto')}
            className="hidden"
            id="profilePhotoInput"
          />
          {formData.profilePhoto ? (
            <img 
              src={URL.createObjectURL(formData.profilePhoto)} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          ) : (
            <label htmlFor="profilePhotoInput" className="cursor-pointer text-gray-500 text-sm text-center">
              Upload Photo
            </label>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Social Media</label>
        <div className="flex gap-2">
          <select
            name="socialMedia"
            value={formData.socialMedia}
            onChange={handleSocialMediaChange}
            className="flex-grow h-12 rounded-md bg-gray-100 px-3 py-2 text-sm transition-shadow duration-200 ease-in-out hover:shadow-[0_0_0_4px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-0"
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
              placeholder={getSocialMediaPlaceholder(formData.socialMedia)}
              className="flex-grow"
            />
          )}
        </div>
      </div>

      <div className="space-y-1 relative">
        <label className="text-sm font-medium">Short Bio</label>
        <Textarea
          name="shortBio"
          value={formData.shortBio}
          onChange={handleInputChange}
          placeholder="e.g. John Doe is an Associate Professor in the Department of Computer Science at Stanford University..."
          rows={4}
          className="h-24 bg-gray-100 transition-shadow duration-200 ease-in-out hover:shadow-[0_0_0_4px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-0 pr-12"
        />
        <div className="absolute bottom-2 right-2">
          <Button
            onClick={handleWriteWithAI}
            variant="black"
            size="sm"
            className="p-0 rounded-full overflow-hidden transition-all duration-300 ease-in-out group min-w-0 hover:pr-3"
          >
            <div className="flex items-center justify-center h-8">
              <FaRobot className="w-4 h-4 mx-2 flex-shrink-0" />
              <span className="overflow-hidden transition-all duration-300 ease-in-out w-0 group-hover:w-auto whitespace-nowrap">
                Write with AI
              </span>
            </div>
          </Button>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Phone Number</label>
        <p className="text-xs text-gray-500">Not publicly shared. Used for emergencies only.</p>
        <Input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="+1 555 123 4567"
          className="mt-1"
        />
      </div>
    </div>
  );
};