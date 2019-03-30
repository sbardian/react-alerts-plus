import React from 'react';
import PropTypes from 'prop-types';
import AlertContext from './AlertContext';

const AlertWrapper = ({ children: WrappedComponent }) => (
  <AlertContext.Consumer>
    {({ show, close }) => {
      const bag = {
        show,
        close,
      };
      return <WrappedComponent {...bag} />;
    }}
  </AlertContext.Consumer>
);

AlertWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlertWrapper;
