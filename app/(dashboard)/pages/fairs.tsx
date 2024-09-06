import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function FairPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Fairs</h1>
        <Badge variant="secondary" className="text-sm">fairs.subtitle</Badge>
      </div>

      <h2 className="text-xl font-semibold">Connect with your candidate recruits and create meaningful interactions.</h2>
      
      <p className="text-muted-foreground">
        Extend your employer branding by hosting fairs. Promote and engage through the Univation platform and
        attract top tier talent for your organization.
      </p>

      <Card>
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
          </form>
        </CardContent>
      </Card>
    </div>
  );
}