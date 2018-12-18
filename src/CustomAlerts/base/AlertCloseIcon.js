import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { ic_close as closeIcon } from 'react-icons-kit/md/ic_close';

const AlertCloseIcon = ({ close, icon, size, ...props }) => (
  <Icon size={size} icon={icon} onClick={close} />
);

AlertCloseIcon.propTypes = {
  close: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
};

AlertCloseIcon.defaultProps = {
  size: 20,
};

export default AlertCloseIcon;
