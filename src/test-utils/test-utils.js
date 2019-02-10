/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from 'react-testing-library';
import AlertProvider from '../AlertProvider';

const customRender = (node, options) => {
  return render(<AlertProvider>{node}</AlertProvider>, options);
};

// re-export everything
export * from 'react-testing-library';

// override render method
export { customRender as render };
