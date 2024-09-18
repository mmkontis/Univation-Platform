'use client';

import { Button } from '@/components/ui/button';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Preview from '../../(dashboard)/components/OrganizationPreview';
import { BasicsTab } from './basics-tab';
import { ClassTab } from './class-tab';
import DoneTab from './done-tab';
import { GoalsTab } from './goals-tab';
import { ProfileTab } from './profile-tab';

type Course = {
  id: string;
  name: string;
};

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);

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
    firstName: string;
    lastName: string;
    email: string;
    universityName: string;
    jobPosition: string;
    targets: string[];
    logo?: File;
    profilePhoto?: File;
    socialMedia: string;
    socialMediaValue: string;
    shortBio: string;
    phoneNumber: string;
    classPhoto?: File;
    courseId: string;
    classSize: string[];
    classLevels: string[];
    courses: string[];
  }>({
    firstName: '',
    lastName: '',
    email: '',
    universityName: '',
    jobPosition: '',
    targets: [],
    logo: undefined,
    profilePhoto: undefined,
    socialMedia: '',
    socialMediaValue: '',
    shortBio: '',
    phoneNumber: '',
    classPhoto: undefined,
    courseId: '',
    classSize: [],
    classLevels: [],
    courses: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | { target: { name: string; value: string | string[] } }) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'coverPhoto' | 'classPhoto' | 'profilePhoto') => {
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
      setStep('goals');
    } else if (step === 'goals' && validateGoals()) {
      setStep('class');
    } else if (step === 'class' && validateClass()) {
      setStep('profile');
    } else if (step === 'profile' && validateProfile()) {
      setStep('done');
    }
  };

  const validateBasics = () => {
    return (
      formData.firstName.trim() !== '' && 
      formData.lastName.trim() !== '' && 
      formData.email.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) &&
      formData.universityName.trim() !== '' && formData.universityName.trim().length >= 2 &&
      formData.jobPosition.trim() !== '' && formData.jobPosition.trim().length >= 2
    );
  };

  const validateGoals = () => {
    // Add validation logic for goals
    return goals.length > 0; // Ensure at least one goal is selected
  };

  const validateClass = () => {
    return (
      formData.classSize.length > 0 &&
      formData.classLevels.length > 0 &&
      formData.courses.length > 0
    );
  };

  const validateProfile = () => {
    // Add validation logic for profile
    return formData.shortBio.trim() !== '' && formData.phoneNumber.trim() !== '';
  };

  const isStepValid = () => {
    if (step === 'basics') {
      return validateBasics();
    } else if (step === 'goals') {
      return validateGoals();
    } else if (step === 'class') {
      return validateClass();
    } else if (step === 'profile') {
      return validateProfile();
    }
    return true;
  };

  const [goals, setGoals] = useState<string[]>([]);
  const [mentorsCount, setMentorsCount] = useState(1);
  const [currentlyBringMentors, setCurrentlyBringMentors] = useState(false);
  const [whyNotBringMentors, setWhyNotBringMentors] = useState('');
  const [idealMentors, setIdealMentors] = useState('');

  const handleGoalSelection = (goal: string) => {
    setGoals(prev => 
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  };

  const renderStepContent = () => {
    switch(step) {
      case 'basics':
        return (
          <BasicsTab 
            formData={formData} 
            handleInputChange={handleInputChange} 
            onContinue={handleContinue}
            courses={courses}
          />
        );
      case 'goals':
        return (
          <GoalsTab
            goals={goals}
            handleGoalSelection={handleGoalSelection}
            mentorsCount={mentorsCount}
            setMentorsCount={setMentorsCount}
            currentlyBringMentors={currentlyBringMentors}
            setCurrentlyBringMentors={setCurrentlyBringMentors}
            whyNotBringMentors={whyNotBringMentors}
            setWhyNotBringMentors={setWhyNotBringMentors}
            idealMentors={idealMentors}
            setIdealMentors={setIdealMentors}
          />
        );
      case 'class':
        return (
          <ClassTab
            formData={formData}
            handleInputChange={handleInputChange}
            handleFileUpload={handleFileUpload}
          />
        );
      case 'profile':
        return (
          <ProfileTab
            formData={formData}
            handleInputChange={handleInputChange}
            handleFileUpload={handleFileUpload}
          />
        );
      case 'done':
        return <DoneTab onDone={handleDone} />;
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        console.log('Raw response:', response);
        const text = await response.text();
        console.log('Response text:', text);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}, body: ${text}`);
        }
        
        const data = JSON.parse(text);
        setCourses(data);
        
        // Log courses instead of showing an alert
        console.log('Fetched courses:', data.map((course: Course) => course.name).join(', '));
      } catch (error) {
        console.error('Error fetching courses:', error);
        // Log error instead of showing an alert
        console.error(`Failed to fetch courses: ${error instanceof Error ? error.message : String(error)}`);
      }
    };

    fetchCourses();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const steps = ['basics', 'goals', 'class', 'profile'];
  const stepNames = ['Basics', 'Goals', 'Class', 'Profile'];

  const getProgressWidth = () => {
    const currentStepIndex = steps.indexOf(step);
    return `${(currentStepIndex + 1) / steps.length * 100}%`;
  };

  return (
    <div className="min-h-screen flex bg-gray-10">
      <div className="w-1/2 p-8">
        <div className="mb-8 flex items-center">
          <span className="text-sm text-gray-600">👋Welcome to Onboarding! Will take only 3 minutes.</span>
        </div>
        
        <div className="mb-8 relative">
          <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-500 ease-in-out"
              style={{ width: getProgressWidth() }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            {stepNames.map((name, index) => (
              <div key={name} className="relative" style={{ width: '25%' }}>
                <span 
                  className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${
                    index <= steps.indexOf(step) ? 'text-blue-600 font-semibold' : 'text-gray-400'
                  }`}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {renderStepContent()}

        {step !== 'done' && (
          <Button 
            onClick={handleContinue}
            className="mt-6 w-full bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isStepValid()}
          >
            Continue
          </Button>
        )}
      </div>

      <div className="w-1/2 univation-blue-background p-16 flex items-center justify-center">
        <Preview
          firstName={formData.firstName}
          lastName={formData.lastName}
          email={formData.email}
          universityName={formData.universityName}
          jobPosition={formData.jobPosition}
          profilePhoto={formData.profilePhoto ? URL.createObjectURL(formData.profilePhoto) : undefined}
        />
      </div>
    </div>
  );
}