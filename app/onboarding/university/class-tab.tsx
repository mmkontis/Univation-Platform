import { Course, fetchCourses } from '@/lib/supabase_db/fetch_courses';
import React, { useEffect, useState } from 'react';

interface ClassTabProps {
  formData: {
    classPhoto?: File;
    socialMedia: string;
    socialMediaValue: string;
    shortBio: string;
    phoneNumber: string;
    classSize: string[];
    classLevels: string[];
    courses: string[];
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | { target: { name: string; value: string | string[] } }) => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>, type: 'classPhoto') => void;
}

export const ClassTab: React.FC<ClassTabProps> = ({ formData, handleInputChange, handleFileUpload }) => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const loadCourses = async () => {
      const fetchedCourses = await fetchCourses();
      setCourses(fetchedCourses);
    };

    loadCourses();
  }, []);

  // Ensure classLevels, courses, and classSize are always arrays
  const classLevels = formData.classLevels || [];
  const selectedCourses = formData.courses || [];
  const selectedClassSizes = formData.classSize || [];

  const classSizes = ["1-20", "21-50", "51-100", "101-500", "501+"];
  const classLevelOptions = ['Bachelor', 'Master', 'PhD', 'Executive/Graduate'];

  const handleTagSelection = (name: string, value: string) => {
    const currentValues = formData[name as keyof typeof formData] as string[] || [];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    handleInputChange({ target: { name, value: updatedValues } } as any);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Your Class Details</h2>
      <p className="text-gray-600 mb-6">Provide information about your classes to help us match you with suitable mentors.</p>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Class Size</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {classSizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => handleTagSelection('classSize', size)}
              className={`px-3 py-1 rounded-md text-sm font-medium border ${
                selectedClassSizes.includes(size)
                  ? 'bg-blue-100 text-blue-800 border-blue-300'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Class Levels</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {classLevelOptions.map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => handleTagSelection('classLevels', level)}
              className={`px-3 py-1 rounded-md text-sm font-medium border ${
                classLevels.includes(level)
                  ? 'bg-blue-100 text-blue-800 border-blue-300'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Your Courses</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {courses.map((course) => (
            <button
              key={course.id}
              type="button"
              onClick={() => handleTagSelection('courses', course.course_name)}
              className={`px-3 py-1 rounded-full text-sm font-medium border ${
                selectedCourses.includes(course.course_name)
                  ? 'bg-blue-100 text-blue-800 border-blue-300'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {course.icon && <span className="mr-1">{course.icon}</span>}
              {course.course_name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};