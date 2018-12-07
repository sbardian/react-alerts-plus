/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

const Alert = ({
  alert: { style, offset, id, message, IconComponent },
  close,
}) => (
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
    style={{ ...style, margin: offset }}
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
    <button
      type="button"
      onClick={() => close(id)}
      css={{
        float: 'right',
      }}
    >
      close
    </button>
  </div>
);

Alert.propTypes = {
  alert: PropTypes.shape({
    duration: PropTypes.number,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    message: PropTypes.string,
    position: PropTypes.string,
    IconComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }).isRequired,
  close: PropTypes.func.isRequired,
};

export default Alert;
