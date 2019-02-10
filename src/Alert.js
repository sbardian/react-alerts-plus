/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { ic_close as closeIcon } from 'react-icons-kit/md/ic_close';
import { dark, light, mobileDark, mobileLight } from './AlertTemplates';

class Alert extends React.PureComponent {
  render() {
    const {
      alert: { style, id, message, theme, progressBarColor },
      close,
      transitionStyle,
      showProgressBar,
      alertTimeout,
      state,
      isMobile,
    } = this.props;

    let selectedTheme =
      theme === 'dark' ? { ...dark, ...style } : { ...light, ...style };

    if (isMobile) {
      selectedTheme = mobileLight;
      if (theme === 'dark') {
        selectedTheme = mobileDark;
      }
    }

    const progressStyle = {
      transition: `width ${alertTimeout}ms ease-in-out`,
      width: '0px',
    };

    const progressTransitionStyles = {
      entering: { width: '0px' },
      entered: { width: '100%' },
    };

    return (
      <div
        id={id}
        data-testid={id}
        style={{
          ...selectedTheme,
          display: 'flex',
          ...transitionStyle,
        }}
      >
        <span style={{ marginRight: '20px', paddingRight: '20px' }}>
          {message}
        </span>
        <Icon
          size={20}
          icon={closeIcon}
          style={{ position: 'absolute', right: '20px' }}
          onClick={() => close(id)}
        />
        {alertTimeout === 0
          ? null
          : showProgressBar && (
              <div
                style={{
                  height: '10px',
                  backgroundColor: `${progressBarColor}`,
                  position: 'absolute',
                  bottom: '0px',
                  left: '0px',
                  ...progressStyle,
                  ...progressTransitionStyles[state],
                }}
              />
            )}
      </div>
    );
  }
}

Alert.propTypes = {
  alert: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    message: PropTypes.string,
    position: PropTypes.string,
    theme: PropTypes.string,
  }).isRequired,
  close: PropTypes.func.isRequired,
  transitionStyle: PropTypes.shape(),
  showProgressBar: PropTypes.bool.isRequired,
  alertTimeout: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

Alert.defaultProps = {
  transitionStyle: {},
};

export default Alert;
