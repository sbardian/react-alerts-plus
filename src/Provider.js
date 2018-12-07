/** @jsx jsx */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';
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
      offset: '10px',
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

  show = (message, { style, duration, id, position }, offset) => {
    console.log('show offset = ', offset);
    const { alerts } = this.state;
    this.setState({
      hidden: false,
      style,
      message,
      offset,
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
                    return (
                      <div
                        key={a.id}
                        id={a.id}
                        hidden={a.hidden}
                        css={{
                          margin: '10px',
                          width: '300px',
                          padding: '20px',
                          background: '#fff',
                          borderRadius: '5px',
                          border: '1px solid black',
                          position: 'relative',
                          transition: 'all 5s ease-in-out',
                        }}
                        style={{ ...a.style, margin: a.offset }}
                      >
                        {a.message}
                        <button
                          type="button"
                          onClick={() => this.close(a.id)}
                          css={{
                            float: 'right',
                          }}
                        >
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
