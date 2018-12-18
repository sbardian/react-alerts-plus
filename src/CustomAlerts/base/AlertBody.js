import React from 'react';
import PropTypes from 'prop-types';

const AlertBody = ({ message, ...props }) => (
  <article {...props}>{message}</article>
);

AlertBody.propTypes = {
  message: PropTypes.string,
};

AlertBody.defaultProps = {
  message: null,
};

export default AlertBody;
