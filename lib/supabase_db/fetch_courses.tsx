import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uhubnmzrbjeuzofuncng.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodWJubXpyYmpldXpvZnVuY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1NzY4NTMsImV4cCI6MjA0MTE1Mjg1M30.xLs7N6ipSWijA7_ThRV7bEBsZKdT_43lsHKAHNSSfgs';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface Course {
  id: number;
  course_name: string;
  icon?: string;
}

export async function fetchCourses(): Promise<Course[]> {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*');

    if (error) {
      throw error;
    }

    return data as Course[];
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
}