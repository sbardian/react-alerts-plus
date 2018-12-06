import React from 'react';

const AlertContainer = ({ children, position }) => {
  const containerPosition = position;
  return (
    <div style={{ ...containerPosition }} className="alertContainer">
      {children}
    </div>
  );
};

export default AlertContainer;
