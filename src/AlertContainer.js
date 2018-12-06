import React from 'react';
import PropTypes from 'prop-types';

const AlertContainer = ({ children, position }) => {
  return (
    <div style={{ ...position }} className="alertContainer">
      {children}
    </div>
  );
};

AlertContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  position: PropTypes.shape({
    position: PropTypes.string.isRequired,
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    transform: PropTypes.string,
    zIndex: PropTypes.number.isRequired,
  }).isRequired,
};

export default AlertContainer;
