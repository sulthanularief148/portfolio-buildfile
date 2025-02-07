import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 border-t-transparent"></div>
      <span className="ml-4 text-blue-600 font-semibold">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
