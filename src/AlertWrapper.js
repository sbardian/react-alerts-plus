import React from 'react';
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

export default AlertWrapper;
