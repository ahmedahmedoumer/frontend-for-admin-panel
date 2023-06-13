import React from 'react';

const Loading = ({ isLoading }) => {
  if (!isLoading) {
    return null; // Hide the loading component if isLoading is false
  }

  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
