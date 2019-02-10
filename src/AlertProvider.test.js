/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, fireEvent } from 'test-utils';
import 'jest-dom/extend-expect';
import AlertWrapper from './AlertWrapper';

const topLeft = {
  style: {},
  message: 'Alert ! ! !',
  offset: '60px',
  duration: 100,
  position: 'top left',
  id: 'test-alert',
};

const MyButton = ({ onClick, name }) => {
  return (
    <button type="button" data-testid={name} onClick={onClick}>
      {name}
    </button>
  );
};

describe('AlertProvider ', () => {
  it('tests wrapper', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <AlertWrapper>
        {({ show, close }) => (
          <div>
            <MyButton onClick={() => show(topLeft)} name="top left" />
            <button type="button" onClick={() => close('test-alert')}>
              close
            </button>
          </div>
        )}
      </AlertWrapper>,
    );
    fireEvent.click(getByText('top left'));
    expect(getByTestId('alert-container-test')).toBeTruthy();
    fireEvent.click(getByText('close'));
    expect(queryByTestId('alert-container-test')).toBeFalsy();
  });
});
