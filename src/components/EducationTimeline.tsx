import React from 'react';

interface EducationEntry {
  dates: string;
  title: string;
  institution: string;
}

interface EducationTimelineProps {
  history: EducationEntry[];
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({ history }) => {
  return (
    <div className="relative border-l border-gray-200 dark:border-gray-700 ml-2">
      {history.map((entry, index) => (
        <div key={index} className="mb-8 ml-6">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-600"></div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{entry.title}</h4>
          <p className="text-md font-medium text-gray-700 dark:text-gray-300 mt-1">{entry.institution}</p>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{entry.dates}</time>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;