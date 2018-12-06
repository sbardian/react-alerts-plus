import React from 'react';
import { AlertContext } from './Context';
import { Provider } from './Provider';

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
