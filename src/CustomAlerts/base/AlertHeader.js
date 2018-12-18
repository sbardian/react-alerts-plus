import React from 'react';
import PropTypes from 'prop-types';

const AlertHeader = ({ title, ...props }) => (
  <header {...props}>{title}</header>
);

AlertHeader.propTypes = {
  title: PropTypes.string,
};

AlertHeader.defaultProps = {
  title: null,
};

export default AlertHeader;
