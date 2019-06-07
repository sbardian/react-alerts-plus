/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import AlertProvider from '../AlertProvider';

const customRender = (node, options) => {
  return render(<AlertProvider>{node}</AlertProvider>, options);
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
