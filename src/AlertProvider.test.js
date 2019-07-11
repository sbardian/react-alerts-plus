/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { cleanup, render, fireEvent } from 'test-utils';
import '@testing-library/jest-dom/extend-expect';
import AlertWrapper from './AlertWrapper';
import alertMocks from './__mocks__/alert-mocks';

const MyButton = ({ onClick, name }) => {
  return (
    <button type="button" data-testid={name} onClick={onClick}>
      {name}
    </button>
  );
};

MyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

afterEach(cleanup);

describe('Default Alerts:', () => {
  it('top left', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <AlertWrapper>
        {({ show, close }) => (
          <div>
            <MyButton
              onClick={() => show(alertMocks.topLeft)}
              name="top left"
            />
            <button type="button" onClick={() => close('test-alert-top-left')}>
              close
            </button>
          </div>
        )}
      </AlertWrapper>,
    );
    fireEvent.click(getByText('top left'));
    expect(getByTestId(alertMocks.topLeft.id)).toBeTruthy();
    fireEvent.click(getByText('close'));
    expect(queryByTestId(alertMocks.topLeft.id)).toBeFalsy();
  });
  it('top left dark', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <AlertWrapper>
        {({ show, close }) => (
          <div>
            <MyButton
              onClick={() => show(alertMocks.topLeftDark)}
              name="top left"
            />
            <button
              type="button"
              onClick={() => close('test-alert-top-left-dark')}
            >
              close
            </button>
          </div>
        )}
      </AlertWrapper>,
    );
    fireEvent.click(getByText('top left'));
    expect(getByTestId(alertMocks.topLeftDark.id)).toBeTruthy();
    fireEvent.click(getByText('close'));
    expect(queryByTestId(alertMocks.topLeftDark.id)).toBeFalsy();
  });
  it('top left duration zero', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <AlertWrapper>
        {({ show, close }) => (
          <div>
            <MyButton
              onClick={() => show(alertMocks.topLeftDurationZero)}
              name="top left"
            />
            <button
              type="button"
              onClick={() => close('test-alert-top-left-duration-zero')}
            >
              close
            </button>
          </div>
        )}
      </AlertWrapper>,
    );
    fireEvent.click(getByText('top left'));
    expect(getByTestId(alertMocks.topLeftDurationZero.id)).toBeTruthy();
    fireEvent.click(getByText('close'));
    expect(queryByTestId(alertMocks.topLeftDurationZero.id)).toBeFalsy();
  });
  it('top center', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <AlertWrapper>
        {({ show, close }) => (
          <div>
            <MyButton
              onClick={() => show(alertMocks.topCenter)}
              name="top center"
            />
            <button
              type="button"
              onClick={() => close('test-alert-top-center')}
            >
              close
            </button>
          </div>
        )}
      </AlertWrapper>,
    );
    fireEvent.click(getByText('top center'));
    expect(getByTestId(alertMocks.topCenter.id)).toBeTruthy();
    fireEvent.click(getByText('close'));
    expect(queryByTestId(alertMocks.topCenter.id)).toBeFalsy();
  });
  it('top right', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <AlertWrapper>
        {({ show, close }) => (
          <div>
            <MyButton
              onClick={() => show(alertMocks.topRight)}
              name="top right"
            />
            <button type="button" onClick={() => close('test-alert-top-right')}>
              close
            </button>
          </div>
        )}
      </AlertWrapper>,
    );
    fireEvent.click(getByText('top right'));
    expect(getByTestId(alertMocks.topRight.id)).toBeTruthy();
    fireEvent.click(getByText('close'));
    expect(queryByTestId(alertMocks.topRight.id)).toBeFalsy();
  });
  it('bottom left', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <AlertWrapper>
        {({ show, close }) => (
          <div>
            <MyButton
              onClick={() => show(alertMocks.bottomLeft)}
              name="bottom left"
            />
            <button
              type="button"
              onClick={() => close('test-alert-bottom-left')}
            >
              close
            </button>
          </div>
        )}
      </AlertWrapper>,
    );
    fireEvent.click(getByText('bottom left'));
    expect(getByTestId(alertMocks.bottomLeft.id)).toBeTruthy();
    fireEvent.click(getByText('close'));
    expect(queryByTestId(alertMocks.bottomLeft.id)).toBeFalsy();
  });
  it('bottom center', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <AlertWrapper>
        {({ show, close }) => (
          <div>
            <MyButton
              onClick={() => show(alertMocks.bottomCenter)}
              name="bottom center"
            />
            <button
              type="button"
              onClick={() => close('test-alert-bottom-center')}
            >
              close
            </button>
          </div>
        )}
      </AlertWrapper>,
    );
    fireEvent.click(getByText('bottom center'));
    expect(getByTestId(alertMocks.bottomCenter.id)).toBeTruthy();
    fireEvent.click(getByText('close'));
    expect(queryByTestId(alertMocks.bottomCenter.id)).toBeFalsy();
  });
  it('bottom right', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <AlertWrapper>
        {({ show, close }) => (
          <div>
            <MyButton
              onClick={() => show(alertMocks.bottomRight)}
              name="bottom right"
            />
            <button
              type="button"
              onClick={() => close('test-alert-bottom-right')}
            >
              close
            </button>
          </div>
        )}
      </AlertWrapper>,
    );
    fireEvent.click(getByText('bottom right'));
    expect(getByTestId(alertMocks.bottomRight.id)).toBeTruthy();
    fireEvent.click(getByText('close'));
    expect(queryByTestId(alertMocks.bottomRight.id)).toBeFalsy();
  });
  it('failure invalid postion', () => {
    expect.hasAssertions();
    render(
      <AlertWrapper>
        {({ show }) => {
          expect(() => show(alertMocks.invalidPosition)).toThrowError(
            'Invalid position prop invalid position',
          );
          return null;
        }}
      </AlertWrapper>,
    );
  });
});
