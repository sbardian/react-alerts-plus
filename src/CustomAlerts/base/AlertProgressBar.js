/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';

class AlertProgressBar extends React.PureComponent {
  render() {
    const {
      progressBarColor,
      alertTimeout,
      showProgressBar,
      state,
    } = this.props;

    const progressStyle = {
      transition: `width ${alertTimeout}ms ease-in-out`,
      width: '0px',
    };

    const progressTransitionStyles = {
      entering: { width: '0px' },
      entered: { width: '100%' },
    };

    return alertTimeout === 0
      ? null
      : showProgressBar && (
          <div
            style={{
              background: `${progressBarColor}`,
              ...progressStyle,
              ...progressTransitionStyles[state],
            }}
          />
        );
  }
}

AlertProgressBar.propTypes = {
  progressBarColor: PropTypes.string,
  alertTimeout: PropTypes.number,
  showProgressBar: PropTypes.bool,
  state: PropTypes.string,
};

AlertProgressBar.defaultProps = {
  progressBarColor: '#fff',
  alertTimeout: '0',
  showProgressBar: false,
  state: '',
};

export default AlertProgressBar;
