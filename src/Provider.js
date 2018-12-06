import React, { Fragment } from 'react';
import { groupBy } from 'lodash';
import { createPortal } from 'react-dom';
import AlertContext from './AlertContext';
import getPosition from './getPosition';
import AlertContainer from './AlertContainer';

export default class Provider extends React.Component {
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
      const { alerts } = this.state;
      const newAlerts = alerts.filter(alert => alert.id !== id);
      this.setState({
        alerts: newAlerts,
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
              {Object.keys(orderedAlerts).map(position => {
                return (
                  <AlertContainer
                    key={position}
                    position={getPosition(position)}
                  >
                    {orderedAlerts[position].map(alert => {
                      setTimeout(() => close(alert.id), alert.duration);
                      return (
                        <div
                          key={alert.id}
                          id={alert.id}
                          hidden={alert.hidden}
                          style={{ ...alert.style }}
                        >
                          {alert.message}
                          <button type="button" onClick={() => close(alert.id)}>
                            close
                          </button>
                        </div>
                      );
                    })}
                  </AlertContainer>
                );
              })}
            </Fragment>,
            root,
          )}
      </AlertContext.Provider>
    );
  }
}
