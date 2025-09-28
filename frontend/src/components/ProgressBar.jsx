import React from 'react';

export function ProgressBar({ 
  value, 
  max, 
  color = '#3B82F6', 
  height = 'h-2',
  showPercentage = false,
  className = ''
}) {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className={`w-full ${className}`}>
      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full ${height} overflow-hidden`}>
        <div 
          className={`${height} rounded-full transition-all`}
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
      {showPercentage && (
        <div className="text-right text-xs text-gray-700 dark:text-gray-300 mt-1">
          {percentage.toFixed(1)}%
        </div>
      )}
    </div>
  );
}
