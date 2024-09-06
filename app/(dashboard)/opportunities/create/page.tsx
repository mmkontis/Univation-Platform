'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CreateOpportunityPage() {
  const [opportunityType, setOpportunityType] = useState('academic');
  const [subCategory, setSubCategory] = useState('conference');

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <h1 className="text-3xl font-bold">New opportunity</h1>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">Draft</span>
      </div>

      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="analytics" disabled>Analytics</TabsTrigger>
          <TabsTrigger value="recommended-talents" disabled>Recommended Talents</TabsTrigger>
          <TabsTrigger value="applications" disabled>Applications</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Card>
            <CardContent className="space-y-6 pt-6">
              <div>
                <Label className="mb-2 block">What kind of opportunity do you want to create?</Label>
                <div className="flex space-x-2">
                  <Button
                    variant={opportunityType === 'academic' ? 'default' : 'outline'}
                    onClick={() => setOpportunityType('academic')}
                    className="w-32"
                  >
                    🎓 Academic
                  </Button>
                  <Button
                    variant={opportunityType === 'career' ? 'default' : 'outline'}
                    onClick={() => setOpportunityType('career')}
                    className="w-32"
                  >
                    👔 Career
                  </Button>
                </div>
              </div>

              <div>
                <Label className="mb-2 block">Choose Subcategory</Label>
                <div className="flex flex-wrap gap-2">
                  {['Conference', 'E-learning', 'Master', 'Minor', 'Scholarship', 'Workshop'].map((category) => (
                    <Button
                      key={category}
                      variant={subCategory === category.toLowerCase() ? 'default' : 'outline'}
                      onClick={() => setSubCategory(category.toLowerCase())}
                      className="px-4 py-2"
                    >
                      {category === 'Conference' && '🏢 '}
                      {category === 'E-learning' && '🌐 '}
                      {category === 'Master' && '📚 '}
                      {category === 'Minor' && '🎓 '}
                      {category === 'Scholarship' && '💰 '}
                      {category === 'Workshop' && '🛠️ '}
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Title" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Location" className="mt-1" />
              </div>

              <div className="space-y-2">
                <Label>Application Method</Label>
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex items-center space-x-2 flex-1 justify-start">
                    <Checkbox id="apply-univation" />
                    <Label htmlFor="apply-univation" className="font-normal">Apply through Univation</Label>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded ml-auto">Recommended</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 flex-1 justify-start">
                    <Checkbox id="apply-url" />
                    <Label htmlFor="apply-url" className="font-normal">Apply through a URL</Label>
                  </Button>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button className="bg-blue-600 hover:bg-blue-700">Publish</Button>
                <Button variant="outline">Save</Button>
                <Button variant="outline">Delete</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="fixed bottom-4 right-4 w-80">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Preview</h3>
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-sm text-gray-600 mb-2">Title</p>
            <p className="font-semibold mb-4">Univation | Location</p>
            <Button className="w-full">I am interested</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}