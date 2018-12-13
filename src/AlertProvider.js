import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import groupBy from 'lodash/groupBy';
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
    offset: '10px',
    root: null,
  };

  componentDidMount() {
    const root = document.createElement('div');
    document.body.appendChild(root);
    this.setState({ root });
  }

  show = (
    {
      message = 'Default alert message',
      style = {},
      duration = 0,
      id,
      position = 'top left',
      offset = '0px',
      theme = 'light',
    },
    AlertComponent,
  ) => {
    const { alerts } = this.state;
    const key = Math.random();
    const randomId = Math.random()
      .toString(36)
      .substring(7);

    this.setState({
      alerts: [
        ...alerts,
        {
          duration,
          id: id || randomId,
          key,
          message,
          position,
          style,
          AlertComponent,
          theme,
        },
      ],
      offset,
    });
    return id || randomId;
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
      show: this.show,
      close: this.close,
    };

    const orderedAlerts = groupBy(alerts, 'position');

    /**
     * TODO: reverse sort order of any top postion alerts.  New alerts should
     *       come in on top, pushing older alerts down the page.  Bottom
     *       position alerts are current correct and will not need their sort
     *       order changed.
     */

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
                    /**
                     * TODO: Try to find another way to expire alerts when
                     *       their duration is up.
                     */
                    if (a.duration !== 0) {
                      setTimeout(() => this.close(a.id), a.duration);
                    }
                    const { AlertComponent } = a;
                    if (AlertComponent) {
                      return (
                        <AlertComponent
                          close={() => this.close(a.id)}
                          key={a.key}
                          id={a.id}
                        />
                      );
                    }
                    return <Alert key={a.key} alert={a} close={this.close} />;
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
