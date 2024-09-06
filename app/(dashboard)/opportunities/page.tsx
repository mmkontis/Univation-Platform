'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { PlusCircle, FileText, FilterIcon } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

// Mock data for job listings (expanded with more fields)
const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    department: "Engineering",
    location: "Athens, Greece",
    type: "Full-time",
    applicants: 45,
    postedDate: "2023-07-01",
    status: "Active",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    applicants: 32,
    postedDate: "2023-07-05",
    status: "Draft",
  },
  // Add more mock job listings as needed
];

export default function OpportunitiesPage() {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Opportunities</h1>
        <Link href="/opportunities/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Opportunity
          </Button>
        </Link>
      </div>

      <div className="flex justify-between mb-4">
        <Button variant="outline" className="bg-white rounded-full shadow-md">
          <FilterIcon className="mr-2 h-4 w-4" />
          Add Filters
        </Button>
      </div>

      <div className="bg-white rounded-md shadow-sm overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <p className="text-sm text-gray-500">Showing 1 - {jobListings.length} of {jobListings.length}</p>
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <span className="text-sm text-gray-500 mr-2">Page size</span>
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="border rounded-md px-2 py-1 h-8"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-md px-3 py-1 text-sm h-8 rounded-r-none"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(currentPage + 1)}
              className="rounded-md px-3 py-1 text-sm h-8 rounded-l-none border-l-0"
            >
              Next
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[50px]"><Checkbox /></TableHead>
              <TableHead>Opportunity</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Applicants</TableHead>
              <TableHead>Posted Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobListings.map((job, index) => (
              <TableRow 
                key={job.id} 
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
              >
                <TableCell><Checkbox /></TableCell>
                <TableCell>
                  <div>
                    <p className="font-semibold">{job.title}</p>
                  </div>
                </TableCell>
                <TableCell>{job.department}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>
                  <Badge variant="outline">{job.type}</Badge>
                </TableCell>
                <TableCell>{job.applicants}</TableCell>
                <TableCell>{job.postedDate}</TableCell>
                <TableCell>
                  <Badge 
                    variant={job.status === 'Active' ? 'default' : 'secondary'}
                  >
                    {job.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-between items-center p-4 border-t">
          <Button variant="outline" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="rounded-full">Previous</Button>
          <Button variant="outline" onClick={() => setCurrentPage(currentPage + 1)} className="rounded-full">Next</Button>
        </div>
      </div>
    </div>
  );
}