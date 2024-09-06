import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Billing</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <img src="/free-plan-icon.png" alt="Free Plan" className="w-8 h-8" />
              <CardTitle>Free</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Switch your subscription to a different type, such as a monthly plan or
              annual plan. Adapt it to your needs and unlock all the features that
              matter most to you.
            </p>
            <div className="bg-blue-50 text-blue-700 p-3 rounded-md mb-4">
              Your plan will renew on 11/9/2024
            </div>
            <Button>Change plan</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment method</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              This is where you will be charged for your subscription. We support all
              major credit cards and SEPA direct debit.
            </p>
            <div className="text-gray-500 mb-4">
              No default payment method was found
            </div>
            <Button variant="outline">+ New method</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Remaining Quota</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              You can see your remaining quota for each feature below.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Posts</h3>
                  <p className="text-sm text-gray-500">Unlimited Posts</p>
                </div>
                <span className="text-2xl">∞</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Talent Unlocks</h3>
                  <p className="text-sm text-gray-500">0 / 0 Unlocks</p>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-gray-200"></div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Talent Invites</h3>
                  <p className="text-sm text-gray-500">0 / 0 Invites</p>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-gray-200"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center space-x-2">
                <span>Autopilot</span>
                <Badge variant="secondary">New</Badge>
              </CardTitle>
              <Badge variant="outline" className="text-blue-600 border-blue-600">Available as an Add-on</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Enhance your talent acquisition strategy with Autopilot. As your billing cycle concludes, we'll
              proactively use any remaining credits to discover fresh and relevant talent tailored to your
              organization's needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Unlock new Talents</h3>
                  <p className="text-sm text-gray-500">
                    Automatically unlock new Talent profiles. They will be
                    available in the Available Talent section.
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Invite to Opportunities</h3>
                  <p className="text-sm text-gray-500">
                    Invite unlocked Talent to your published Opportunities.
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Billing details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            We will use these details to generate your invoices.
            You can change them at any time.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="country">Country</Label>
                <Input id="country" placeholder="Country" />
              </div>
              <div>
                <Label htmlFor="vat">VAT Number</Label>
                <Input id="vat" placeholder="VAT Number" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="legalName">Legal Name</Label>
                <Input id="legalName" placeholder="Legal Name" />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Address" />
              </div>
            </div>
            <div>
              <Label htmlFor="billingEmail">Billing Email</Label>
              <Input id="billingEmail" type="email" placeholder="Billing Email" />
            </div>
            <Button type="submit">Save</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Invoices are issued at the start of each billing period.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>DESCRIPTION</TableHead>
                <TableHead>AMOUNT</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>ISSUED AT</TableHead>
                <TableHead>SETTLED AT</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </Button>
                </TableCell>
                <TableCell>Free</TableCell>
                <TableCell>0 €</TableCell>
                <TableCell>
                  <Badge variant="secondary">Settled</Badge>
                </TableCell>
                <TableCell>11/8/2024, 11:20:15 μ.μ.</TableCell>
                <TableCell>11/8/2024, 11:20:16 μ.μ.</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">Download</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-500">Showing 1 - 1 of 1</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="outline" size="sm" disabled>Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}