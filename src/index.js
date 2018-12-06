import React from 'react';
import AlertContext from './AlertContext';
import Provider from './Provider';

export const AlertWrapper = ({ children: WrappedComponent }) => (
  <Provider>
    <AlertContext.Consumer>
      {({ show, close }) => {
        const bag = {
          show,
          close,
        };
        return <WrappedComponent {...bag} />;
      }}
    </AlertContext.Consumer>
  </Provider>
);

export default AlertWrapper;
