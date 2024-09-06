import React from 'react';

interface OrganizationPreviewProps {
  organizationName: string;
  tagline: string;
  industry: string;
  numberOfEmployees: string;
}

export default function OrganizationPreview({
  organizationName,
  tagline,
  industry,
  numberOfEmployees,
}: OrganizationPreviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-80">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-purple-500 rounded-full mr-4"></div>
        <div>
          <h3 className="font-semibold">{organizationName || 'Your Organization'}</h3>
          <p className="text-sm text-gray-500">Organization</p>
        </div>
      </div>
      <div className="flex space-x-4 mb-4">
        <span className="text-purple-600">About</span>
        <span>Opportunities</span>
        <span>Events</span>
      </div>
      <div className="mb-4">
        <p className="text-sm font-medium">Industry</p>
        <p className="text-sm text-gray-600">{industry || 'Not specified'}</p>
      </div>
      <div className="mb-4">
        <p className="text-sm font-medium">Size</p>
        <p className="text-sm text-gray-600">{numberOfEmployees || 'Not specified'}</p>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">About {organizationName || 'Your Organization'}</p>
        <p className="text-sm text-gray-600">
          {tagline || 'Your organization description will appear here.'}
        </p>
      </div>
    </div>
  );
}