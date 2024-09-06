'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { FilterIcon, ZapIcon, FileText } from 'lucide-react';
import { UserProfilePopup } from '../components/UserProfilePopup';

const UserAvatar = ({ name }: { name: string }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-12 h-12 flex-shrink-0">
      <Image 
        src={imageError ? '/placeholder-avatar.png' : `https://www.tapback.co/api/avatar/${encodeURIComponent(name)}`}
        width={48}
        height={48}
        alt={name} 
        className="rounded-full shadow-md object-cover"
        onError={() => setImageError(true)}
      />
      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
        <Image src="/company-logo.png" width={16} height={16} alt="Company Logo" className="rounded-full" />
      </div>
    </div>
  );
};

const RadialProgress = ({ value, max }: { value: number; max: number }) => {
  const percentage = (value / max) * 100;
  const circumference = 2 * Math.PI * 18; // 18 is the radius of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-12 h-12 bg-gray-100 rounded-full">
      <svg className="w-12 h-12 transform -rotate-90">
        <circle
          className="text-gray-200"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
          r="18"
          cx="24"
          cy="24"
        />
        <circle
          className="text-purple-600"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="18"
          cx="24"
          cy="24"
        />
      </svg>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold">
        {value}
      </span>
    </div>
  );
};

export default function TalentRadar() {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  const talents = [
    { id: 1, name: 'ΠΟΛΥΞΕΝΗ Z.', field: 'THEOLOGY - INTRODUCTORY DIRECTION OF MUSLIM STUDIES', interests: [], languages: ['English C2', 'German (Germany) B2'], semester: 5, resumeRead: false },
    { id: 2, name: 'ΧΡΙΣΤΙΝΑ B.', field: 'TOURISM STUDIES', interests: ['Business & Entrepreneurship', 'Nature & Hiking', 'Travel & Cultures'], languages: ['English (United States) C2', 'Greek N8'], semester: 6, resumeRead: true },
  ];

  const handleUserClick = (user: { id: number; name: string; field: string; interests: string[]; languages: string[]; semester: number; resumeRead: boolean; image?: string }) => {
    setSelectedUser({
      ...user,
      image: user.image || `https://www.tapback.co/api/avatar/${encodeURIComponent(user.name)}`
    });
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Talent Radar</h1>
      
      <div className="flex justify-between mb-4">
        <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-md">
          <FilterIcon className="mr-2 h-4 w-4" />
          Add Filters
        </Button>
        <Button variant="outline" className="bg-white rounded-full shadow-md">
          <ZapIcon className="mr-2 h-4 w-4" />
          Flash Unlock
        </Button>
      </div>

      <div className="bg-white p-4 mb-4 rounded-md shadow-sm">
        <p className="text-gray-500">No filtering options selected</p>
      </div>

      <div className="bg-white rounded-md shadow-sm overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <p className="text-sm text-gray-500">Showing 1 - 10 of 35138</p>
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <span className="text-sm text-gray-500 mr-2">Page size</span>
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="border rounded-md px-2 py-1 h-8"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-md px-3 py-1 text-sm h-8 rounded-r-none"
            >
              Previous
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'default' : 'outline'}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 p-0 rounded-none ${
                  currentPage === page ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'
                } border-l-0 first:border-l`}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setCurrentPage(currentPage + 1)}
              className="rounded-md px-3 py-1 text-sm h-8 rounded-l-none border-l-0"
            >
              Next
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[50px]"><Checkbox /></TableHead>
              <TableHead>Talent</TableHead>
              <TableHead>Resume</TableHead>
              <TableHead>Interests</TableHead>
              <TableHead>Languages</TableHead>
              <TableHead>Semester</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {talents.map((talent, index) => (
              <TableRow 
                key={talent.id} 
                className={`${index % 2 === 0 ? 'bg-green-50' : 'bg-white'} cursor-pointer hover:bg-gray-100`}
                onClick={() => handleUserClick(talent)}
              >
                <TableCell><Checkbox /></TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <UserAvatar name={talent.name} />
                    <div>
                      <p className="font-semibold">{talent.name}</p>
                      <p className="text-sm text-gray-500">{talent.field}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button 
                    variant="outline" 
                    className="rounded-full px-4 py-2 hover:bg-blue-100 transition-colors duration-200"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    {talent.resumeRead ? 'Read' : 'Open'}
                  </Button>
                </TableCell>
                <TableCell>
                  {talent.interests.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {talent.interests.map((interest, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full shadow-sm">{interest}</span>
                      ))}
                    </div>
                  ) : (
                    <span>-</span>
                  )}
                </TableCell>
                <TableCell>
                  {talent.languages.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {talent.languages.map((language, index) => (
                        <span key={index} className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full shadow-sm">{language}</span>
                      ))}
                    </div>
                  ) : (
                    <span>-</span>
                  )}
                </TableCell>
                <TableCell>
                  <RadialProgress value={talent.semester} max={10} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-between items-center p-4 border-t">
          <Button variant="outline" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="rounded-full">Previous</Button>
          <Button variant="outline" onClick={() => setCurrentPage(currentPage + 1)} className="rounded-full">Next</Button>
        </div>
      </div>

      {selectedUser && (
        <UserProfilePopup user={selectedUser} onClose={handleClosePopup} />
      )}
    </div>
  );
}