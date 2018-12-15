import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import AlertContext from './AlertContext';
import getPositionStyles from './getPositionStyles';
import AlertContainer from './AlertContainer';
import Alert from './Alert';

const defaultStyle = {
  transition: 'opacity 1000ms ease-in-out',
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

export default class AlertProvider extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  state = {
    root: null,
    alertContainers: {
      topLeft: {
        offset: '10px',
        alerts: [],
      },
      topCenter: {
        offset: '10px',
        alerts: [],
      },
      topRight: {
        offset: '10px',
        alerts: [],
      },
      bottomLeft: {
        offset: '10px',
        alerts: [],
      },
      bottomCenter: {
        offset: '10px',
        alerts: [],
      },
      bottomRight: {
        offset: '10px',
        alerts: [],
      },
    },
  };

  componentDidMount() {
    const root = document.createElement('div');
    document.body.appendChild(root);
    this.setState({ root });
  }

  getPosition = position => {
    switch (position) {
      case 'top left':
        return 'topLeft';
      case 'top center':
        return 'topCenter';
      case 'top right':
        return 'topRight';
      case 'bottom left':
        return 'bottomLeft';
      case 'bottom center':
        return 'bottomCenter';
      case 'bottom right':
        return 'bottomRight';
      default:
        throw new Error(`Invalid position prop ${position}`);
    }
  };

  show = (
    {
      message = 'Default alert message',
      style = {},
      duration = 0,
      id,
      position = 'top left',
      offset = '10px',
      theme = 'light',
      showProgressBar = true,
      progressBarColor = 'cornflowerblue',
    },
    AlertComponent,
  ) => {
    const key = Math.random();
    const randomId = Math.random()
      .toString(36)
      .substring(7);

    const alertPosition = this.getPosition(position);

    this.setState(state => {
      if (alertPosition.startsWith('top')) {
        return {
          ...state,
          alertContainers: {
            ...state.alertContainers,
            [alertPosition]: {
              offset,
              alerts: [
                {
                  duration,
                  id: id || randomId,
                  key,
                  message,
                  position,
                  style,
                  AlertComponent,
                  theme,
                  showProgressBar,
                  progressBarColor,
                },
                ...state.alertContainers[alertPosition].alerts,
              ],
            },
          },
        };
      }
      return {
        ...state,
        alertContainers: {
          ...state.alertContainers,
          [alertPosition]: {
            offset,
            alerts: [
              ...state.alertContainers[alertPosition].alerts,
              {
                duration,
                id: id || randomId,
                key,
                message,
                position,
                style,
                AlertComponent,
                theme,
                showProgressBar,
                progressBarColor,
              },
            ],
          },
        },
      };
    });

    return id || randomId;
  };

  close = removeId => {
    this.setState(state => ({
      ...state,
      alertContainers: Object.entries(state.alertContainers).reduce(
        (acc, [containerName, containerValue]) => ({
          ...acc,
          [containerName]: {
            ...containerValue,
            alerts: containerValue.alerts.filter(({ id }) => id !== removeId),
          },
        }),
        {},
      ),
    }));
  };

  render() {
    const { children } = this.props;
    const { alertContainers, root } = this.state;

    const alert = {
      show: this.show,
      close: this.close,
    };

    return (
      <AlertContext.Provider value={alert}>
        {children}
        {root &&
          createPortal(
            <Fragment>
              {Object.keys(alertContainers).map(position =>
                alertContainers[position].alerts.length ? (
                  <AlertContainer
                    key={position}
                    style={getPositionStyles(
                      position,
                      alertContainers[position].offset,
                    )}
                  >
                    <TransitionGroup>
                      {alertContainers[position].alerts.map(a => {
                        /**
                         * TODO: Try to find another way to expire alerts when
                         *       their duration is up.
                         *
                         * TODO: Remove transition from custom alert component?
                         *       allowing users to pass their component wrapped
                         *       in their own custom Transition effect?
                         */
                        if (a.duration !== 0) {
                          setTimeout(() => this.close(a.id), a.duration);
                        }
                        const { AlertComponent } = a;
                        if (AlertComponent) {
                          return (
                            <Transition key={a.key} timeout={0} appear>
                              {state => (
                                <AlertComponent
                                  close={() => this.close(a.id)}
                                  key={a.key}
                                  id={a.id}
                                  transitionStyle={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                  }}
                                  alertTimeout={a.duration}
                                  showProgressBar={a.showProgressBar}
                                  progressBarColor={a.progressBarColor}
                                />
                              )}
                            </Transition>
                          );
                        }
                        return (
                          <Transition key={a.key} timeout={0} appear>
                            {state => (
                              <Alert
                                key={a.key}
                                alert={a}
                                close={this.close}
                                transitionStyle={{
                                  ...defaultStyle,
                                  ...transitionStyles[state],
                                }}
                                alertTimeout={a.duration}
                                showProgressBar={a.showProgressBar}
                                progressBarColor={a.progressBarColor}
                              />
                            )}
                          </Transition>
                        );
                      })}
                    </TransitionGroup>
                  </AlertContainer>
                ) : null,
              )}
            </Fragment>,
            root,
          )}
      </AlertContext.Provider>
    );
  }
}
