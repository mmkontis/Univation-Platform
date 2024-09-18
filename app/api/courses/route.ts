import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  console.log('API route hit');
  try {
    console.log('Attempting to fetch courses...');
    console.log('Prisma instance:', prisma);
    const courses = await prisma.course.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    console.log('Courses fetched successfully:', courses);
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch courses', 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}