import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { ic_close as closeIcon } from 'react-icons-kit/md/ic_close';
import { dark, light } from './AlertTemplates';

class Alert extends React.PureComponent {
  render() {
    const {
      alert: { style, id, message, theme, progressBarColor },
      close,
      transitionStyle,
      showProgressBar,
      alertTimeout,
      state,
    } = this.props;

    const applyTheme = theme === 'dark' ? dark : light;

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
        style={{ ...applyTheme, display: 'flex', ...style, ...transitionStyle }}
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
};

Alert.defaultProps = {
  transitionStyle: {},
};

export default Alert;
