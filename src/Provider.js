import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { groupBy } from 'lodash';
import { createPortal } from 'react-dom';
import AlertContext from './AlertContext';
import getPosition from './getPosition';
import AlertContainer from './AlertContainer';

export default class Provider extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      style: {},
      message: '',
      id: null,
      alerts: [],
      root: null,
    };
  }

  componentDidMount() {
    const root = document.createElement('div');
    document.body.appendChild(root);
    this.setState({ root });
  }

  render() {
    const { children } = this.props;
    const { alerts, root } = this.state;

    const show = (message, { style, duration, id, position }) => {
      this.setState({
        hidden: false,
        style,
        message,
        alerts: [
          ...alerts,
          {
            position,
            style: style || {},
            duration: duration || 4000,
            message: message || 'default message',
            id: id || Math.random(),
          },
        ],
      });
    };

    const close = id => {
      const { alerts: currentAlerts } = this.state;
      this.setState({
        alerts: currentAlerts.filter(alert => alert.id !== id),
      });
    };

    const alert = {
      ...this.state,
      show,
      close,
    };

    const orderedAlerts = groupBy(alerts, 'position');

    return (
      <AlertContext.Provider value={alert}>
        {children}
        {root &&
          createPortal(
            <Fragment>
              {Object.keys(orderedAlerts).map(position => (
                <AlertContainer key={position} position={getPosition(position)}>
                  {orderedAlerts[position].map(a => {
                    setTimeout(() => close(a.id), a.duration);
                    return (
                      <div
                        key={a.id}
                        id={a.id}
                        hidden={a.hidden}
                        style={{ ...a.style }}
                      >
                        {a.message}
                        <button type="button" onClick={() => close(a.id)}>
                          close
                        </button>
                      </div>
                    );
                  })}
                </AlertContainer>
              ))}
            </Fragment>,
            root,
          )}
      </AlertContext.Provider>
    );
  }
}
