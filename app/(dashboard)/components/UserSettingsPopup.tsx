import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { useState } from 'react';

type UserSettingsPopupProps = {
  user: {
    name: string;
    email: string;
    image: string;
  };
  onClose: () => void;
};

export function UserSettingsPopup({ user, onClose }: UserSettingsPopupProps) {
  const [firstName, setFirstName] = useState(user.name.split(' ')[0]);
  const [lastName, setLastName] = useState(user.name.split(' ')[1] || '');

  const handleSave = () => {
    console.log('Saving user settings:', { firstName, lastName });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">User Settings</h2>
          <Button variant="ghost" onClick={onClose}>×</Button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={user.image}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input 
              id="firstName" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
              id="lastName" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <p className="text-sm text-gray-500">Your login details are managed by Google.</p>
          <Button className="w-full" onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  );
}