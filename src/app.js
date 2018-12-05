import React from "react";
import ReactDOM from "react-dom";
import MyAlertWrapper from "./components/Alert";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "default message"
    };
  }
  render() {
    const topLeft = {
      style: {
        backgroundColor: "red",
        height: "150px",
        maxWidth: "150px",
        margin: "10px"
      },
      duration: 4000,
      position: "top left"
    };

    const topRight = {
      ...topLeft,
      position: "top right"
    };

    const bottomRight = {
      ...topLeft,
      position: "bottom right"
    };

    const bottomLeft = {
      ...topLeft,
      position: "bottom left"
    };

    const message = () => {
      this.setState({
        message: Math.random().toString()
      });
    };

    return (
      <div className="App">
        <MyAlertWrapper>
          {({ show, close }) => {
            return (
              <div>
                <button onClick={() => message()}>update message</button>
                <button onClick={() => show(this.state.message, topLeft)}>
                  top left
                </button>
                <button onClick={() => show(this.state.message, topRight)}>
                  top right
                </button>
                <button onClick={() => show(this.state.message, bottomLeft)}>
                  bottom left
                </button>
                <button onClick={() => show(this.state.message, bottomRight)}>
                  bottom right
                </button>
                <button onClick={() => close()}>close</button>
              </div>
            );
          }}
        </MyAlertWrapper>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
