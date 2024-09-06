'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function AIRecruiterPage() {
  const [jobDescription, setJobDescription] = useState('');
  const [candidateProfile, setCandidateProfile] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setAiResponse(`Based on the job description and candidate profile provided, here's my analysis:

1. Skill Match: 85%
2. Cultural Fit: 90%
3. Experience Level: Senior

Recommendation: This candidate appears to be a strong match for the position. Their skills align well with the job requirements, and their background suggests they would integrate well with the company culture. I recommend proceeding to the interview stage.

Next Steps:
1. Conduct a technical interview to verify their claimed skills.
2. Arrange a team culture fit interview.
3. Request references from previous employers.

Remember to discuss the candidate's long-term career goals to ensure they align with the opportunities your company can offer.`);
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Recruiter</h1>
      <p className="text-muted-foreground">Let our AI assist you in finding the perfect match for your job openings.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Job Description</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              value={jobDescription}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setJobDescription(e.target.value)}
              placeholder="Enter the job description here..."
              className="min-h-[100px] w-full p-2 border rounded-md"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Candidate Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              value={candidateProfile}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCandidateProfile(e.target.value)}
              placeholder="Enter the candidate's profile here..."
              className="min-h-[100px] w-full p-2 border rounded-md"
            />
          </CardContent>
        </Card>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" /> Analyze Match
            </>
          )}
        </Button>
      </form>

      {aiResponse && (
        <Card>
          <CardHeader>
            <CardTitle>AI Recruiter Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="whitespace-pre-wrap">{aiResponse}</div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}