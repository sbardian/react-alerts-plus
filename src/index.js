import React from 'react';
import AlertContext from './AlertContext';
import Provider from './Provider';

export const AlertWrapper = ({ children: WrappedComponent }) => (
  /**
   * TODO:  Should i split Provider off and export independantly?
   *        Enabling users to wrap their own app in a provider
   *        and then using AlertWrapper when/where needed?
   */
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
