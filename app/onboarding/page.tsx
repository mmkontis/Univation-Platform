'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { BasicsTab } from './basics-tab';
import { BrandingTab } from './branding-tab';
import { TargetsTab } from './targets-tab';
import { DoneTab } from './done-tab';
import OrganizationPreview from '../(dashboard)/components/OrganizationPreview';

export default function OnboardingPage() {
  const [step, setStep] = useState('basics');
  const [formData, setFormData] = useState<{
    organizationName: string;
    tagline: string;
    website: string;
    yearEstablished: string;
    industry: string;
    numberOfEmployees: string;
    logo: File | null;
    coverPhoto: File | null;
    targets: string[];
  }>({
    organizationName: '',
    tagline: '',
    website: '',
    yearEstablished: '',
    industry: '',
    numberOfEmployees: '',
    logo: null,
    coverPhoto: null,
    targets: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'coverPhoto') => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        alert(`File size exceeds 10MB limit. Please choose a smaller file.`);
        return;
      }
      setFormData(prevData => ({ ...prevData, [type]: file }));
    }
  };

  const handleTargetSelection = (target: string) => {
    setFormData(prevData => ({
      ...prevData,
      targets: prevData.targets.includes(target)
        ? prevData.targets.filter(t => t !== target)
        : [...prevData.targets, target]
    }));
  };

  const handleContinue = () => {
    if (step === 'basics' && validateBasics()) {
      setStep('branding');
    } else if (step === 'branding' && validateBranding()) {
      setStep('targets');
    } else if (step === 'targets' && validateTargets()) {
      setStep('done');
    }
  };

  const validateBasics = () => {
    // Add validation logic for basic fields
    return true; // Return true if valid, false otherwise
  };

  const validateBranding = () => {
    // Add validation logic for branding fields
    return true; // Return true if valid, false otherwise
  };

  const validateTargets = () => {
    // Add validation logic for targets
    return true; // Return true if valid, false otherwise
  };

  const renderStepContent = () => {
    switch(step) {
      case 'basics':
        return <BasicsTab formData={formData} handleInputChange={handleInputChange} />;
      case 'branding':
        return <BrandingTab handleFileUpload={handleFileUpload} />;
      case 'targets':
        return <TargetsTab targets={formData.targets} handleTargetSelection={handleTargetSelection} />;
      case 'done':
        return <DoneTab />;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-1/2 p-8">
        <div className="mb-8 flex items-center">
          <Link href="/" className="text-sm text-gray-600 hover:underline">← All Organizations</Link>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-sm text-gray-600">New Organization</span>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {['basics', 'branding', 'targets', 'done'].map((s, index) => (
              <div key={s} className={`w-1/4 h-1 ${step === s || index < ['basics', 'branding', 'targets', 'done'].indexOf(step) ? 'bg-blue-600' : 'bg-gray-300'} rounded`}></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            {['Basics', 'Branding', 'Targets', 'Done'].map(s => (
              <span key={s} className={step.toLowerCase() === s.toLowerCase() ? 'text-blue-600 font-semibold' : 'text-gray-400'}>{s}</span>
            ))}
          </div>
        </div>

        {renderStepContent()}

        {step !== 'done' && (
          <Button onClick={handleContinue} className="mt-6">Continue</Button>
        )}
      </div>

      <div className="w-1/2 bg-blue-100 p-16 flex items-center justify-center">
        <OrganizationPreview
          organizationName={formData.organizationName}
          tagline={formData.tagline}
          industry={formData.industry}
          numberOfEmployees={formData.numberOfEmployees}
        />
      </div>
    </div>
  );
}