/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { AlertProvider, AlertWrapper } from '../src';

const AlertComponent = ({ close, ...rest }) => {
  console.log('rest = ', rest);
  return (
    <div key="meh">
      yo im a component
      <button type="button" onClick={close}>
        close
      </button>
    </div>
  );
};

AlertComponent.propTypes = {
  close: PropTypes.func,
};

AlertComponent.defaultProps = {
  close: () => {},
};

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
      style: {},
      message: alertMessage,
      offset,
      duration: 2000,
      position: 'top left',
    };

    const topRight = {
      ...topLeft,
      message: 'There was an error processing your request.',
      style: {
        // backgroundColor: 'cornflowerblue',
        borderColor: 'red',
        borderRadius: 0,
      },
      position: 'top right',
      duration: 0,
    };

    const bottomRight = {
      ...topLeft,
      message:
        'There was an error processing your request. There was an error processing your request. There was an error processing your request.',
      position: 'bottom right',
      id: 'my-bottom-right-alert',
    };

    const bottomLeft = {
      ...topLeft,
      message: 'Your request was successful.',
      style: {
        borderColor: 'green',
        borderRadius: 0,
      },
      duration: 0,
      position: 'bottom left',
    };

    const topCenter = {
      ...topLeft,
      position: 'top center',
      theme: 'dark',
    };

    const bottomCenter = {
      ...topLeft,
      position: 'bottom center',
      id: 'my-bottom-center-alert',
      duration: 0,
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
                <button type="button" onClick={() => show(bottomLeft)}>
                  bottom left
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const myAlert = show(bottomRight);
                    console.log('Bottom Right alert ID: ', myAlert);
                  }}
                >
                  bottom right
                </button>
                <button type="button" onClick={() => show(topCenter)}>
                  top center
                </button>
                <button
                  type="button"
                  onClick={() =>
                    show(bottomCenter, alertProps => (
                      <AlertComponent {...alertProps} color="green" />
                    ))
                  }
                >
                  bottom center
                </button>
                <button type="button" onClick={() => close('my-alert')}>
                  close
                </button>
              </div>
            )}
          </AlertWrapper>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
          <div>space</div>
        </div>
      </AlertProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
