import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { ic_close as closeIcon } from 'react-icons-kit/md/ic_close';
import { dark, light } from './AlertTemplates';

const Alert = ({
  alert: { style, id, message, theme },
  close,
  transitionStyle,
}) => {
  const applyTheme = theme === 'dark' ? dark : light;
  return (
    <div
      id={id}
      style={{ ...applyTheme, display: 'flex', ...style, ...transitionStyle }}
    >
      <span style={{ marginRight: '20px' }}>{message}</span>
      <Icon
        size={20}
        icon={closeIcon}
        style={{ position: 'absolute', right: '20px' }}
        onClick={() => close(id)}
      />
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    message: PropTypes.string,
    position: PropTypes.string,
    theme: PropTypes.string,
  }).isRequired,
  close: PropTypes.func.isRequired,
};

export default Alert;
