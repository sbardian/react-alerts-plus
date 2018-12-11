/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import { FaBeer } from 'react-icons/fa';
import { AlertProvider, AlertWrapper } from '../src';

class Question extends React.Component {
  render() {
    return <FaBeer />;
  }
}

class CloseComponent extends React.Component {
  render() {
    return <button type="button">fucking close</button>;
  }
}

class AlertComponent extends React.Component {
  render() {
    return <div key="meh">yo im a component</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMessage: 'default message',
    };
  }

  render() {
    const offset = '60px';
    const { alertMessage } = this.state;

    const topLeft = {
      style: {
        /**
         * put any override styles here.
         */
        // backgroundColor: 'blue',
      },
      alertMessage,
      offset,
      duration: 2000,
      position: 'top left',
    };

    const topRight = {
      ...topLeft,
      style: {
        backgroundColor: 'cornflowerblue',
        borderRadius: 0,
      },
      position: 'top right',
      duration: 0,
      IconComponent: () => <Question />,
      CloseComponent: () => <Question />,
    };

    const bottomRight = {
      ...topLeft,
      position: 'bottom right',
      id: 'my-alert',
    };

    const bottomLeft = {
      ...topLeft,
      position: 'bottom left',
    };

    const topCenter = {
      ...topLeft,
      position: 'top center',
    };

    const bottomCenter = {
      ...topLeft,
      position: 'bottom center',
      duration: 4000,
      AlertComponent,
    };

    const message = () => {
      this.setState({
        alertMessage: Math.random().toString(),
      });
    };

    return (
      <AlertProvider>
        <div className="App">
          <AlertWrapper>
            {({ show, close }) => (
              <div>
                <button type="button" onClick={() => message()}>
                  update message
                </button>
                <button type="button" onClick={() => show(topLeft)}>
                  top left
                </button>
                <button type="button" onClick={() => show(topRight)}>
                  top right
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const test = show(bottomLeft);
                    console.log('bottomLeft = ', test);
                    setTimeout(() => {
                      close(test);
                    }, 2000);
                  }}
                >
                  bottom left
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const myAlert = show(bottomRight);
                    console.log('myAlert = ', myAlert);
                  }}
                >
                  bottom right
                </button>
                <button type="button" onClick={() => show(topCenter)}>
                  top center
                </button>
                <button type="button" onClick={() => show(bottomCenter)}>
                  bottom center
                </button>
                <button type="button" onClick={() => close('my-alert')}>
                  close
                </button>
              </div>
            )}
          </AlertWrapper>
        </div>
      </AlertProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
