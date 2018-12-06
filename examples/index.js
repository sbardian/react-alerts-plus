import React from 'react';
import ReactDOM from 'react-dom';
import MyAlertWrapper from '../src';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMessage: 'default message',
    };
  }

  render() {
    const topLeft = {
      style: {
        backgroundColor: 'red',
        height: '40px',
        maxWidth: '150px',
        margin: '10px',
      },
      duration: 4000,
      position: 'top left',
    };

    const topRight = {
      ...topLeft,
      position: 'top right',
    };

    const bottomRight = {
      ...topLeft,
      position: 'bottom right',
    };

    const bottomLeft = {
      ...topLeft,
      position: 'bottom left',
    };

    const message = () => {
      this.setState({
        alertMessage: Math.random().toString(),
      });
    };

    const { alertMessage } = this.state;

    return (
      <div className="App">
        <MyAlertWrapper>
          {({ show, close }) => (
            <div>
              <button type="button" onClick={() => message()}>
                update message
              </button>
              <button type="button" onClick={() => show(alertMessage, topLeft)}>
                top left
              </button>
              <button
                type="button"
                onClick={() => show(alertMessage, topRight)}
              >
                top right
              </button>
              <button
                type="button"
                onClick={() => show(alertMessage, bottomLeft)}
              >
                bottom left
              </button>
              <button
                type="button"
                onClick={() => show(alertMessage, bottomRight)}
              >
                bottom right
              </button>
              <button type="button" onClick={() => close()}>
                close
              </button>
            </div>
          )}
        </MyAlertWrapper>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
