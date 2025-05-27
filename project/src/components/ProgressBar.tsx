import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = ((current + 1) / total) * 100;
  
  return (
    <div className="w-full mt-2 mb-6">
      <div className="flex justify-between text-xs text-gray-600 mb-1">
        <span>Question {current + 1} sur {total}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;