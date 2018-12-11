/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

const Alert = ({
  alert: { style, id, message, IconComponent, CloseComponent },
  close,
}) => (
  /**
   * TODO: enable passing some kind of alert theme, instead of
   *       only being able to override the styles.  Similar to react-alert
   */
  <div
    id={id}
    css={{
      margin: '10px',
      width: '300px',
      padding: '20px',
      background: '#fff',
      borderRadius: '5px',
      border: '1px solid black',
      position: 'relative',
      transition: 'all 5s ease-in-out',
    }}
    style={{ ...style }}
  >
    {IconComponent && (
      <div
        css={{
          float: 'left',
          paddingRight: '10px',
        }}
      >
        <IconComponent />
      </div>
    )}
    {message}
    {CloseComponent && (
      <button
        type="button"
        onClick={() => close(id)}
        css={{
          float: 'right',
          border: 'none',
          background: 'none',
          padding: 0,
        }}
      >
        <CloseComponent />
      </button>
    )}
    {!CloseComponent && (
      <button
        type="button"
        onClick={() => close(id)}
        css={{
          float: 'right',
        }}
      >
        Close
      </button>
    )}
  </div>
);

Alert.propTypes = {
  alert: PropTypes.shape({
    duration: PropTypes.number,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    message: PropTypes.string,
    position: PropTypes.string,
    IconComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    CloseComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }).isRequired,
  close: PropTypes.func.isRequired,
};

export default Alert;
