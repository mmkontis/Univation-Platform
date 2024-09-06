import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import OrganizationPreview from '../components/OrganizationPreview';

export default function OrganizationPage() {
  return (
    <div className="flex h-[calc(100vh-64px)]"> {/* Adjust 64px to match your header height */}
      <div className="w-2/3 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Organization</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Basic Details</CardTitle>
            <p className="text-sm text-gray-500">Those details are public and will be displayed on our apps.</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Organization Name</label>
                <Input defaultValue="Univation" />
              </div>
              <div>
                <label className="block mb-1">Tagline</label>
                <Input placeholder="Tagline" />
              </div>
              <div>
                <label className="block mb-1">Website</label>
                <Input defaultValue="https://theunivation.com" />
              </div>
              <div>
                <label className="block mb-1">Year of Establishment</label>
                <Input defaultValue="2022" />
              </div>
              <div>
                <label className="block mb-1">Industry</label>
                <Select defaultValue="Education">
                  <option value="Education">Education</option>
                  {/* Add more options */}
                </Select>
              </div>
              <div>
                <label className="block mb-1">Number of Employees</label>
                <Select defaultValue="1-10">
                  <option value="1-10">1-10</option>
                  {/* Add more options */}
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Logo</CardTitle>
            <p className="text-sm text-gray-500">Please consider the following guidelines:</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 mb-4">
              <li>Square image.</li>
              <li>Recommended size: 400x400 pixels.</li>
              <li>Make sure the content is visible on a white background.</li>
            </ul>
            <Button>Upload Logo</Button>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <p className="text-sm text-gray-500">Manage your organization's users and permissions.</p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <img src="/placeholder-avatar.jpg" alt="Minas Marios Kontis" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">Minas Marios Kontis</p>
                <p className="text-sm text-gray-500">minas@theunivation.com</p>
              </div>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">Admin</span>
            </div>
            <Button>+ Add User</Button>
          </CardContent>
        </Card>
      </div>

      <div className="w-1/3 bg-blue-100">
        <div className="h-full flex items-center justify-center">
          <div className="w-full max-w-md p-6">
            <OrganizationPreview
              organizationName="Your Organization"
              tagline="Organization"
              industry="Not specified"
              numberOfEmployees="Not specified"
            />
          </div>
        </div>
      </div>
    </div>
  );
}