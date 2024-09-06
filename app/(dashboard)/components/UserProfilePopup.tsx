import React, { useState, useEffect } from 'react';
import { X, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

interface UserProfilePopupProps {
  user: {
    name: string;
    field: string;
    email?: string;
    languages: string[];
    interests: string[];
    image: string;
    universityLogo: string;
    universityName: string;
    grade: number;
    studies?: {
      institution?: string;
      department?: string;
      semester?: number;
      averageGrade?: number;
    };
  };
  onClose: () => void;
}

export function UserProfilePopup({ user, onClose }: UserProfilePopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShouldRender(false);
      onClose();
    }, 300); // Match this with the transition duration
  };

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Semi-transparent overlay with transition */}
      <div 
        className={`absolute inset-0 bg-gray-500 transition-opacity duration-300 ease-in-out ${
          isVisible ? 'opacity-75' : 'opacity-0'
        }`} 
        onClick={handleClose}
      ></div>

      {/* Popup content with slide-in effect */}
      <div 
        className={`absolute inset-y-0 right-0 w-[540px] bg-white shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="sticky top-0 bg-white z-10 p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <Button variant="ghost" size="icon" onClick={handleClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Image 
              src={user.image || `https://www.tapback.co/api/avatar/${encodeURIComponent(user.name)}`}
              alt={user.name} 
              width={80} 
              height={80} 
              className="rounded-full"
              onError={(e) => {
                e.currentTarget.src = '/default-avatar.png' // Make sure to add a default avatar image in your public folder
              }}
            />
            <div>
              <p className="font-semibold text-lg">{user.name}</p>
              <p className="text-gray-600">{user.field}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <Image src={user.universityLogo} alt={user.universityName} width={24} height={24} />
            <span>{user.universityName}</span>
          </div>

          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="bio">Bio</TabsTrigger>
              <TabsTrigger value="chat">Chat</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="space-y-4">
              {user.studies && (
                <div>
                  <h3 className="font-semibold">Studies</h3>
                  {user.studies.institution && <p>{user.studies.institution}</p>}
                  {user.studies.department && <p>{user.studies.department}</p>}
                  {user.studies.semester && <p>Semester: {user.studies.semester}</p>}
                  {user.studies.averageGrade && <p>Average Grade: {user.studies.averageGrade}</p>}
                </div>
              )}
              
              <div>
                <h3 className="font-semibold">Grade</h3>
                <p>{typeof user.grade === 'number' ? user.grade.toFixed(2) : 'N/A'}</p>
              </div>

              {user.email && (
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>{user.email}</p>
                </div>
              )}

              {user.languages.length > 0 && (
                <div>
                  <h3 className="font-semibold">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.languages.map((language, index) => (
                      <Badge key={index} variant="secondary">{language}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {user.interests.length > 0 && (
                <div>
                  <h3 className="font-semibold">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.interests.map((interest, index) => (
                      <Badge key={index} variant="outline">{interest}</Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">AI Match Score</h3>
                  <p className="text-2xl font-bold text-green-600">85%</p>
                </div>
                <div>
                  <h3 className="font-semibold">Skills Match</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Experience Level</h3>
                  <p>Entry Level</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bio">
              <div className="text-center py-8">
                <User className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Bio not available</p>
              </div>
            </TabsContent>

            <TabsContent value="chat">
              <div className="text-center py-8">
                <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Chat functionality coming soon</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="sticky bottom-0 bg-white p-4 border-t">
          <Button className="w-full">Unlock Full Profile</Button>
        </div>
      </div>
    </div>
  );
}