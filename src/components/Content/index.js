import React from 'react';

const ContentLayoutComponent = ({ children }) => {
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      {children}
    </div>
  );
};

export default ContentLayoutComponent;
