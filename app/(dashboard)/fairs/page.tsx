'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';


// Mock data for existing fairs
const existingFairs = [
  {
    id: 1,
    title: "Tech Career Expo 2023",
    date: "2023-11-15",
    time: "10:00 AM - 4:00 PM",
    type: "in-person",
    image: "https://picsum.photos/400/200?random=1"
  },
  {
    id: 2,
    title: "Virtual Job Fair: Software Engineering",
    date: "2023-12-01",
    time: "9:00 AM - 2:00 PM",
    type: "virtual",
    image: "https://picsum.photos/400/200?random=2"
  },
  // Add more mock fairs as needed
];

export default function FairPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Fairs</h1>
        <Button
          onClick={() => document.getElementById('create-fair-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Create New Fair
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {existingFairs.map((fair) => (
          <Card key={fair.id} className="overflow-hidden">
            <Image
              src={fair.image}
              alt={fair.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{fair.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{fair.date} | {fair.time}</p>
              <Badge variant={fair.type === 'virtual' ? 'secondary' : 'default'}>
                {fair.type === 'virtual' ? 'Virtual' : 'In-Person'}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card id="create-fair-form">
        <CardHeader>
          <CardTitle>Create New Fair</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-6">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="How to build a rocket 🚀: A workshop for the fundamentals of rocket science" />
            </div>

            <div>
              <Label>Format</Label>
              <RadioGroup defaultValue="on-campus">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="on-campus" id="on-campus" />
                  <Label htmlFor="on-campus">On-campus: The event will be hosted in a University campus</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="off-campus" id="off-campus" />
                  <Label htmlFor="off-campus">Off-campus: The event will be hosted outside a University campus</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="virtual" id="virtual" />
                  <Label htmlFor="virtual">Virtual: The event will be hosted online</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Universities</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">University of Crete</Badge>
                <Badge variant="secondary">Hellenic Mediterranean University</Badge>
              </div>
            </div>

            <div>
              <Label>Location</Label>
              <div className="mt-2 h-64 bg-gray-200 rounded-md overflow-hidden">
                <Image
                  src="/map-placeholder.png"
                  alt="Map"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <Button type="submit">Create Fair</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}