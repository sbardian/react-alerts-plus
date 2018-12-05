import React, { Fragment } from "react";
import { groupBy } from "lodash";
import { createPortal } from "react-dom";
import { AlertContext } from "./Context";
import { getPosition } from "./getPosition";
import { AlertContainer } from "./AlertContainer";

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      style: {},
      message: "",
      id: null,
      alerts: [],
      root: null
    };
  }

  componentDidMount() {
    const { position } = this.props;
    const root = document.createElement("div");
    document.body.appendChild(root);
    this.setState({ root });
  }

  render() {
    const show = (message, { style, duration, id, position }) => {
      this.setState({
        hidden: false,
        style: style,
        message: message,
        alerts: [
          ...this.state.alerts,
          {
            position,
            style: style || {},
            duration: duration || 4000,
            message: message || "default message",
            id: id || Math.random()
          }
        ]
      });
    };

    const close = id => {
      const { alerts } = this.state;
      const newAlerts = alerts.filter(alert => alert.id !== id);
      this.setState({
        alerts: newAlerts
      });
    };

    const alert = {
      ...this.state,
      show,
      close
    };

    const expireAlert = id => {
      const { alerts } = this.state;
      const newAlerts = alerts.filter(alert => alert.id !== id);
      this.setState({
        alerts: newAlerts
      });
    };

    const orderedAlerts = groupBy(this.state.alerts, "position");

    return (
      <AlertContext.Provider value={alert}>
        {this.props.children}
        {this.state.root &&
          createPortal(
            <Fragment>
              {Object.keys(orderedAlerts).map(position => {
                return (
                  <AlertContainer
                    key={position}
                    position={getPosition(position)}
                  >
                    {orderedAlerts[position].map(alert => {
                      setTimeout(() => expireAlert(alert.id), alert.duration);
                      return (
                        <div
                          key={alert.id}
                          id={alert.id}
                          hidden={alert.hidden}
                          style={{ ...alert.style }}
                        >
                          {alert.message}
                          <button onClick={() => close(alert.id)}>close</button>
                        </div>
                      );
                    })}
                  </AlertContainer>
                );
              })}
            </Fragment>,
            this.state.root
          )}
      </AlertContext.Provider>
    );
  }
}
