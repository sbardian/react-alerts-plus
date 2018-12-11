/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';
import { Icon } from 'react-icons-kit';
import { ic_close as closeIcon } from 'react-icons-kit/md/ic_close';
import { dark, light } from './AlertTemplates';

const Alert = ({
  alert: { style, id, message, /* IconComponent, CloseComponent, */ theme },
  close,
}) => (
  <div id={id} css={theme === 'dark' ? dark : light} style={{ ...style }}>
    {message}
    <Icon
      size={20}
      icon={closeIcon}
      style={{ float: 'right' }}
      onClick={() => close(id)}
    />
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
