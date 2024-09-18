import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

interface DoneTabProps {
  onDone: () => Promise<void>;
}

export default function DoneTab({ onDone }: DoneTabProps) {
  return (
    <div className="univation-blue-background min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-screen-xl mx-auto px-4 text-center mb-8">
        <Image 
          src="/logos/univation-white-logo.svg" 
          alt="Univation Logo" 
          width={200} 
          height={36} 
          className="mx-auto"
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-screen-xl mx-auto text-center">
        <FaCheckCircle className="text-green-500 text-6xl mb-4 mx-auto" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Congratulations!</h2>
        <p className="text-sm text-gray-600 mb-6">Welcome to the most innovative community for professors and mentors.</p>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-700">Your next step is to book a call with our team to get started.</p>
          
          {/* Google Calendar Appointment Scheduling */}
          <div className="w-full h-[500px]">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2ltQQursaouQLUAKOqmv5SFkm2XBjgQnR-tIRTfOaqKKYtYpLqLDDAi-yQQTSqzChtb2QZATe5?gv=true" 
              style={{border: 0, width: '100%', height: '100%'}} 
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}