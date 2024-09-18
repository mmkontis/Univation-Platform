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

  const handleClassSizeChange = (size: string) => {
    const updatedSizes = selectedClassSizes.includes(size)
      ? selectedClassSizes.filter(s => s !== size)
      : [...selectedClassSizes, size];
    handleInputChange({ target: { name: 'classSize', value: updatedSizes } } as any);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Your Profile on the Platform</h2>
      <p className="text-sm text-gray-600">Perfect your Profile to attract better and busier Mentors.</p>

      <div>
        <label className="block text-sm font-medium text-gray-700">Class Size</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {classSizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => handleClassSizeChange(size)}
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

      <div>
        <label className="block text-sm font-medium text-gray-700">Class Levels</label>
        <div className="space-y-2">
          {['Bachelor', 'Master', 'PhD', 'Executive/Graduate'].map((level) => (
            <div key={level} className="flex items-center">
              <input
                type="checkbox"
                id={`level-${level}`}
                name="classLevels"
                value={level}
                checked={classLevels.includes(level)}
                onChange={(e) => {
                  const updatedLevels = e.target.checked
                    ? [...classLevels, level]
                    : classLevels.filter(l => l !== level);
                  handleInputChange({ target: { name: 'classLevels', value: updatedLevels } } as any);
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={`level-${level}`} className="ml-2 block text-sm text-gray-900">
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Your Courses</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {courses.map((course) => (
            <button
              key={course.id}
              type="button"
              onClick={() => {
                const updatedCourses = selectedCourses.includes(course.course_name)
                  ? selectedCourses.filter(c => c !== course.course_name)
                  : [...selectedCourses, course.course_name];
                handleInputChange({ target: { name: 'courses', value: updatedCourses } } as any);
              }}
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