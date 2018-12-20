import React from 'react';
import PropTypes from 'prop-types';

const AlertContainer = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

AlertContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default AlertContainer;
