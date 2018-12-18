/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-multi-comp */
/** @jsx jsx */
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'react-icons-kit';
import { ic_close as closeIcon } from 'react-icons-kit/md/ic_close';
import { jsx, css } from '@emotion/core';
import { AlertProvider, AlertWrapper, CardAlert } from '../src';
import MyAlert from './MyAlert';

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
      duration: 3000,
      position: 'top left',
    };

    const topRight = {
      ...topLeft,
      message: 'There was an error processing your request.',
      style: {
        borderColor: 'red',
        borderRadius: 0,
      },
      position: 'top right',
      duration: 8000,
      showProgressBar: false,
    };

    const bottomRight = {
      ...topLeft,
      message:
        'There was an error processing your request. ' +
        'There was an error processing your request. ' +
        'There was an error processing your request. ',
      position: 'bottom right',
      duration: 2000,
      id: 'my-bottom-right-alert',
      progressBarColor: 'red',
    };

    const bottomLeft = {
      ...topLeft,
      // message: 'Your request was successful.',
      // style: {
      //   borderColor: 'green',
      //   borderRadius: 0,
      // },
      // duration: 0,
      // id: 'my-alert',
      position: 'bottom left',
    };

    const topCenter = {
      ...topLeft,
      position: 'top center',
      theme: 'dark',
    };

    const bottomCenter = {
      ...topLeft,
      offset: '20px',
      position: 'bottom center',
      id: 'my-bottom-center-alert',
      duration: 2000,
      progressBarColor: 'red',
    };

    const message = () => {
      this.setState({
        alertMessage: Math.random().toString(),
      });
    };

    const customMessage =
      'Lorem ipsum dolor sit amet consectetur elit. ' +
      'Velit fugit perferendis, beatae qui voluptatem soluta quos optio ' +
      'expedita nemo culpa amet! Recusandae a natus fugiat est vel nulla ' +
      'quos fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit.';

    const imageUri = 'https://source.unsplash.com/random/200x200';

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
                    show(
                      {
                        ...bottomCenter,
                        id: Math.random().toString(),
                        duration: 50000,
                      },
                      props => {
                        return (
                          <MyAlert
                            {...props}
                            title="Lorem ipsum"
                            message={customMessage}
                            imageUri={imageUri}
                          />
                        );
                      },
                    )
                  }
                >
                  bottom center Custom, +progress
                </button>
                <button
                  type="button"
                  onClick={() =>
                    show(
                      {
                        ...bottomCenter,
                        id: Math.random().toString(),
                      },
                      props => (
                        <MyAlert
                          {...props}
                          title="Another Custom Alert"
                          message={customMessage}
                          imageUri={imageUri}
                          showProgressBar={false}
                        />
                      ),
                    )
                  }
                >
                  bottom center Custom -progress
                </button>
                <button
                  type="button"
                  onClick={() =>
                    show(
                      {
                        ...bottomCenter,
                        id: Math.random().toString(),
                        duration: 5000,
                      },
                      props => (
                        <div>
                          <CardAlert
                            render={({
                              AlertHeader,
                              AlertBody,
                              AlertImage,
                              AlertProgressBar,
                            }) => {
                              const {
                                transitionStyle,
                                close: cardAlertClose,
                              } = props;

                              return (
                                <div
                                  css={css`
                                    display: grid;
                                    grid-gap: 10px;
                                    grid-template-rows: 40px 1fr 10px;
                                    border: 1px solid lavenderblush;
                                    justify-content: center;
                                    padding: 20px;
                                    width: 400px;
                                    margin: 15px;
                                    background-color: cadetblue;
                                    box-shadow: 1px 1px 8px 1px #666;
                                  `}
                                  style={{
                                    ...transitionStyle,
                                  }}
                                >
                                  <div
                                    css={css`
                                      display: grid;
                                      grid-gap: 20px;
                                      grid-template-columns: 1fr 20px;
                                    `}
                                  >
                                    <AlertHeader
                                      title="this is a title"
                                      style={{ fontSize: '24pt' }}
                                    />
                                    <Icon
                                      size={20}
                                      icon={closeIcon}
                                      onClick={cardAlertClose}
                                    />
                                  </div>
                                  <div
                                    css={css`
                                      display: grid;
                                      grid-gap: 15px;
                                      grid-template-columns: 200px 1fr;
                                    `}
                                  >
                                    <AlertImage
                                      height={200}
                                      width={200}
                                      imageSrc={imageUri}
                                      alt="My Alert Image"
                                    />
                                    <AlertBody message="this is a message to body" />
                                  </div>
                                  <AlertProgressBar {...props} />
                                </div>
                              );
                            }}
                          />
                        </div>
                      ),
                    )
                  }
                >
                  CardAlert Bottom Center
                </button>
                {`  |  `}
                <button type="button" onClick={() => close('my-alert')}>
                  close bottom left
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
