/** @jsx jsx */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';
import { groupBy } from 'lodash';
import { createPortal } from 'react-dom';
import AlertContext from './AlertContext';
import getPosition from './getPosition';
import AlertContainer from './AlertContainer';
import Alert from './Alert';

export default class AlertProvider extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  state = {
    alerts: [],
    id: null,
    message: '',
    offset: '10px',
    root: null,
    style: {},
  };

  componentDidMount() {
    const root = document.createElement('div');
    document.body.appendChild(root);
    this.setState({ root });
  }

  show = (
    message,
    { style, duration, id, position, IconComponent, CloseComponent },
    offset,
  ) => {
    const { alerts } = this.state;
    this.setState({
      alerts: [
        ...alerts,
        {
          duration: duration || 4000,
          id: id || Math.random(),
          message: message || 'default message',
          position,
          style: style || {},
          IconComponent,
          CloseComponent,
        },
      ],
      message,
      offset,
      style,
    });
  };

  close = id => {
    const { alerts: currentAlerts } = this.state;
    this.setState({
      alerts: currentAlerts.filter(alert => alert.id !== id),
    });
  };

  render() {
    const { children } = this.props;
    const { alerts, root, offset } = this.state;

    const alert = {
      ...this.state,
      show: this.show,
      close: this.close,
    };

    const orderedAlerts = groupBy(alerts, 'position');

    return (
      <AlertContext.Provider value={alert}>
        {children}
        {root &&
          createPortal(
            <Fragment>
              {Object.keys(orderedAlerts).map(position => (
                <AlertContainer
                  key={position}
                  position={getPosition(position, offset)}
                >
                  {orderedAlerts[position].map(a => {
                    setTimeout(() => this.close(a.id), a.duration);
                    return <Alert key={a.id} alert={a} close={this.close} />;
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
