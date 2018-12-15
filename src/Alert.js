import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { TransitionGroup, Transition } from 'react-transition-group';
import { ic_close as closeIcon } from 'react-icons-kit/md/ic_close';
import { dark, light } from './AlertTemplates';

const Alert = ({
  alert: { style, id, message, theme, progressBarColor },
  close,
  transitionStyle,
  alertTimeout,
}) => {
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
      <span style={{ marginRight: '20px' }}>{message}</span>
      <Icon
        size={20}
        icon={closeIcon}
        style={{ position: 'absolute', right: '20px' }}
        onClick={() => close(id)}
      />
      {alertTimeout === 0 ? null : (
        <TransitionGroup>
          <Transition timeout={0} appear>
            {state => (
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
          </Transition>
        </TransitionGroup>
      )}
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
  transitionStyle: PropTypes.shape(),
  alertTimeout: PropTypes.number.isRequired,
};

Alert.defaultProps = {
  transitionStyle: {},
};

export default Alert;
