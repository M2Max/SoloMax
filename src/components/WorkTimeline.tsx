import React from 'react';

interface WorkEntry {
  dates: string;
  company: string;
}

interface WorkTimelineProps {
  history: WorkEntry[];
}

const WorkTimeline: React.FC<WorkTimelineProps> = ({ history }) => {
  return (
    <div className="relative border-l border-gray-200 dark:border-gray-700 ml-2">
      {history.map((entry, index) => (
        <div key={index} className="mb-8 ml-6">
          <div className="absolute w-3 h-3 bg-teal-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-teal-600"></div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{entry.company}</h4>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{entry.dates}</time>
          {/* Add description here if needed */}
        </div>
      ))}
    </div>
  );
};

export default WorkTimeline;