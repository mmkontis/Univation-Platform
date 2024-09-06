import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Upload, Infinity, Key, User } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Univation</h1>
      
      <div className="text-sm text-muted-foreground">
        Analytics of the past 30 days
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {['Total Impressions', 'Total Views', 'Total Clicks', 'Employer Page Visits'].map((title) => (
          <Card key={title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">—</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2 bg-emerald-500 text-white">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-2">Create an Opportunity</h2>
            <p className="mb-4">
              Effortlessly post job opportunities for 22 Greek Universities by utilizing the user-friendly employer portal,
              requiring just a few clicks to reach a wide pool of potential candidates.
            </p>
            <div className="flex space-x-2">
              <Button variant="secondary" className="bg-white text-emerald-500">
                <PlusCircle className="mr-2 h-4 w-4" /> Create
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-500">
                <Upload className="mr-2 h-4 w-4" /> Import from Atlas
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-indigo-500 text-white">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Month's availables</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Infinity className="mr-2 h-6 w-6" />
                <div>
                  <div className="font-bold text-2xl">∞</div>
                  <div className="text-sm">Posts</div>
                </div>
              </div>
              <div className="flex items-center">
                <Key className="mr-2 h-6 w-6" />
                <div>
                  <div className="font-bold text-2xl">0</div>
                  <div className="text-sm">Talent Unlocks</div>
                </div>
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-6 w-6" />
                <div>
                  <div className="font-bold text-2xl">0</div>
                  <div className="text-sm">Talent Invites</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground py-8">
            You haven't created any posts yet
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
