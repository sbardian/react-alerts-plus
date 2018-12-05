import React from "react";

export const AlertContainer = ({ children, position }) => {
  const containerPosition = position;
  return (
    <div style={{ ...containerPosition }} className="alertContainer">
      {children}
    </div>
  );
};
