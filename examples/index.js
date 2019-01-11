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

class MyButton extends React.Component {
  render() {
    const { onClick, name } = this.props;
    return (
      <button
        type="button"
        css={css`
          border-radius: 0;
          height: 35px;
          margin-right: 10px;
        `}
        onClick={onClick}
      >
        {name}
      </button>
    );
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
      style: {},
      message: alertMessage,
      offset,
      duration: 5000,
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
      id: 'my-alert',
      position: 'bottom left',
    };

    const topCenter = {
      ...topLeft,
      position: 'top center',
      theme: 'dark',
      style: {
        minWidth: '300px',
      },
      duration: 3000,
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
                <MyButton
                  onClick={() => message()}
                  name="update alert message"
                />
                <MyButton onClick={() => show(topLeft)} name="top left" />
                <MyButton onClick={() => show(topRight)} name="top right" />
                <MyButton onClick={() => show(bottomLeft)} name="bottom left" />
                <MyButton
                  onClick={() => {
                    const myAlert = show(bottomRight);
                    console.log('Bottom Right alert ID: ', myAlert);
                  }}
                  name="bottom right"
                />
                <MyButton onClick={() => show(topCenter)} name="top center" />
                <MyButton
                  onClick={() =>
                    show(
                      {
                        ...bottomCenter,
                        id: Math.random().toString(),
                        duration: 5000,
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
                  name="bottom center Custom, +progress"
                />
                <MyButton
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
                  name="bottom center Custom -progress"
                />
                <MyButton
                  onClick={() =>
                    show(
                      {
                        ...bottomCenter,
                        progressBarColor:
                          'linear-gradient(to right, yellow, orange, red)',
                        progressBarHeight: '20px',
                        id: Math.random().toString(),
                        duration: 5000,
                      },
                      props => (
                        <CardAlert
                          render={({
                            AlertContainer,
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
                              <AlertContainer
                                css={css`
                                  display: grid;
                                  grid-gap: 10px;
                                  grid-template-rows: 40px 1fr 10px;
                                  border: 1px solid lavenderblush;
                                  justify-content: center;
                                  padding: 20px;
                                  margin: 15px;
                                  background-color: cadetblue;
                                  box-shadow: 1px 1px 8px 1px #666;
                                `}
                                style={{ ...transitionStyle }}
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
                              </AlertContainer>
                            );
                          }}
                        />
                      ),
                    )
                  }
                  name="CardAlert Bottom Center"
                />
                {`  |  `}
                <MyButton
                  onClick={() => close('my-alert')}
                  name="close bottom left"
                />
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
