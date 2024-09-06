import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

export default function PlansPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Subscriptions</h1>
      
      <p className="text-gray-600 text-center">
        You can choose between the following plans, depending on your needs. If you are not
        covered by any of them, contact us to offer you a personalized solution.
      </p>

      <div className="flex justify-center items-center space-x-4 mb-8">
        <span>Monthly subscription</span>
        <Switch />
        <span>Annual subscription</span>
        <Badge variant="secondary" className="bg-purple-100 text-purple-600">16% Discount</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Free', 'Basic Annual', 'Premium Annual'].map((plan, index) => (
          <Card key={plan} className={index === 0 ? 'border-purple-500 border-2' : ''}>
            <CardContent className="p-6">
              {index === 0 && (
                <Badge className="mb-4 bg-purple-500 text-white">Current plan</Badge>
              )}
              <h2 className="text-2xl font-bold mb-4">{plan}</h2>
              <div className="text-4xl font-bold mb-4">
                € {index === 0 ? '0' : index === 1 ? '125' : '250'}
                <span className="text-sm font-normal text-gray-500">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Unlimited posts
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {index === 0 ? '0' : index === 1 ? '50' : '100'} Talent unlocks per month
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Performance indicators
                </li>
                <li className="flex items-center">
                  {index === 0 ? (
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  ) : (
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  )}
                  Target academic background
                </li>
                <li className="flex items-center">
                  {index === 2 ? (
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  )}
                  Employer page
                </li>
              </ul>
              {index !== 0 && (
                <Button className="w-full">Subscribe</Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-8">
        The prices do not include Sales Tax (VAT 24%).
      </p>
    </div>
  );
}