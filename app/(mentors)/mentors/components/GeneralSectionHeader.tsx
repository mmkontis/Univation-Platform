import { Button } from '@/components/ui/MentorsPlatformButton';
import { PlusIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface GeneralSectionHeaderProps {
  title: string;
  description: string;
  variant?: 'default' | 'small' | 'events';
}

const GeneralSectionHeader: React.FC<GeneralSectionHeaderProps> = ({ 
  title, 
  description, 
  variant = 'default'
}) => {
  return (
    <div className="mb-5">
      <div className={`flex flex-row items-center justify-between self-center min-w-0 max-w-[${variant === 'small' ? '1200' : '1120'}px] w-full border-b border-[#E3E8EF] pb-5 overflow-visible`}>
        <div className="flex flex-col items-start gap-1 flex-grow">
          {variant === 'default' || variant === 'events' ? (
            <h1 className="text-3xl font-semibold text-[#121926] leading-[1.5] font-roboto">{title}</h1>
          ) : (
            <h2 className="text-base font-semibold text-[#121926] leading-[1.5] font-roboto">{title}</h2>
          )}
          <p className="text-base font-normal text-[#4B5565] leading-[1.5] font-roboto">{description}</p>
        </div>
        
        {variant === 'events' && (
          <div className="flex flex-row items-center gap-5">
            <div className="font-roboto text-sm font-semibold text-[#0066FF] leading-[1.5] cursor-pointer">
              Past Events
            </div>
            <Button 
              variant="blue"
              leftIcon={<PlusIcon className="h-5 w-5" />}
            >
              Create New
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralSectionHeader;



