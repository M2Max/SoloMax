import React from 'react';

interface WorkEntry {
  dates: string;
  company: string;
  title: string; // Add the new title field
}

interface WorkTimelineProps {
  history: WorkEntry[];
}

const WorkTimeline: React.FC<WorkTimelineProps> = ({ history }) => {
  return (
    <div className="relative border-l-2 border-my-black dark:border-background ml-2">
      {history.map((entry, index) => (
        <div key={index} className="mb-8 ml-6">
          <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-[0.45rem] border border-white dark:border-gray-900 dark:bg-teal-600"></div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{entry.company}</h4>
          <p className="text-md font-medium text-gray-700 dark:text-gray-300 mt-1">{entry.title}</p> {/* Display the job title */}
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{entry.dates}</time>
          {/* Add description here if needed */}
        </div>
      ))}
    </div>
  );
};

export default WorkTimeline;