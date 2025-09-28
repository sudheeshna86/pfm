import React from 'react';

export function PieChart({ data, size = 200, className = '' }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativeAngle = 0;

  const paths = data.map((item, index) => {
    const angle = (item.value / total) * 360;
    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + angle;

    cumulativeAngle += angle;

    const radius = size / 2 - 10;
    const centerX = size / 2;
    const centerY = size / 2;

    const startAngleRad = (startAngle - 90) * (Math.PI / 180);
    const endAngleRad = (endAngle - 90) * (Math.PI / 180);

    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);

    const largeArc = angle > 180 ? 1 : 0;

    return (
      <path
        key={index}
        d={`M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`}
        fill={item.color}
        className="transition-all duration-300 hover:opacity-80"
      />
    );
  });

  return (
    <div className={`${className}`}>
      <svg width={size} height={size} className="mx-auto">
        {paths}
      </svg>
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
              <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
            </div>
            <span className="font-medium text-gray-900 dark:text-white">
              ${item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BarChart({ data, className = '' }) {
  const maxValue = Math.max(...data.map(d => Math.max(d.income, d.expenses)));

  return (
    <div className={`${className}`}>
      <div className="flex items-end justify-between h-64 px-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 mx-1">
            <div className="flex items-end h-48 w-full justify-center space-x-1">
              <div className="flex flex-col items-center">
                <div
                  className="w-6 bg-emerald-500 rounded-t transition-all duration-500"
                  style={{ height: `${(item.income / maxValue) * 192}px` }}
                />
                <span className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                  ${item.income.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-6 bg-red-500 rounded-t transition-all duration-500"
                  style={{ height: `${(item.expenses / maxValue) * 192}px` }}
                />
                <span className="text-xs text-red-600 dark:text-red-400 mt-1">
                  ${item.expenses.toLocaleString()}
                </span>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-6">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-emerald-500 rounded mr-2" />
          <span className="text-sm text-gray-700 dark:text-gray-300">Income</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-500 rounded mr-2" />
          <span className="text-sm text-gray-700 dark:text-gray-300">Expenses</span>
        </div>
      </div>
    </div>
  );
}
