import React from 'react';
import { FiSearch, FiVideo, FiTag, FiList, FiBox } from 'react-icons/fi';

const FilterBar: React.FC = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-2 p-5 max-w-[1200px] mx-auto w-full -mt-5 z-10">
      <div className="flex items-center bg-white border border-gray-200 rounded-lg p-2 flex-grow min-w-[150px]">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search 23 Mentors"
          className="w-full outline-none text-sm font-normal"
        />
      </div>
      
      <FilterButton icon={<FiVideo />} label="Connection" />
      <FilterButton icon={<FiTag />} label="Categories" />
      <FilterButton icon={<FiList />} label="Collections" />
      <FilterButton icon={<FiBox />} label="Universities" />
    </div>
  );
};

const FilterButton: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => {
  return (
    <button className="flex items-center bg-white border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors duration-200">
      <span className="mr-2">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default FilterBar;