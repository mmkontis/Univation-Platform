'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { User } from '@supabase/supabase-js';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { BasicsTab } from './basics-tab';
import { BrandingTab } from './branding-tab';
import { TargetsTab } from './targets-tab';
import DoneTab from './done-tab';
import OrganizationPreview from '../../(dashboard)/components/OrganizationPreview';
import { useRouter } from 'next/navigation';
import { BlueButton } from '../../components/BlueButton';

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        const { data: userData, error } = await supabase
          .from('users')
          .select('onboarding_completed')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching user data:', error);
        } else if (userData?.onboarding_completed) {
          router.push('/dashboard');
          return;
        }
      } else {
        router.push('/login');
        return;
      }
      setIsLoading(false);
    };

    checkUser();
  }, [supabase, router]);

  const handleDone = async () => {
    if (!user) {
      console.error('No user found');
      return;
    }

    setIsLoading(true);
    try {
      console.log('Updating onboarding status for user:', user.id);
      const { data, error } = await supabase.auth.updateUser({
        data: { onboarding_completed: true }
      });

      if (error) throw error;

      console.log('Update result:', data);

      if (data.user && data.user.user_metadata.onboarding_completed) {
        console.log('Onboarding completed successfully, redirecting to root');
        // Force a refresh of the user data
        await supabase.auth.refreshSession();
        router.push('/');
      } else {
        throw new Error('Failed to update onboarding status');
      }
    } catch (error) {
      console.error('Error updating onboarding status:', error);
      setIsLoading(false);
      // Optionally, show an error message to the user
    }
  };

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
        return <DoneTab onDone={handleDone} />;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-10">
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
          <BlueButton 
            onClick={handleContinue}
            className="mt-6"
            variant="default"
            size="default"
          >
            Continue
          </BlueButton>
        )}
      </div>

      <div className="w-1/2 univation-blue-background p-16 flex items-center justify-center">
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