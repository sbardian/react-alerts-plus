![WIP](https://img.shields.io/badge/WIP-DO%20NOT%20USE-red.svg)

# react-alerts

Shows a very basic alert in the position and for the duration specified. You
will most likely want to pass your own custom alert component to use with the
library, see below.

This library was influenced by
[schiehlls](https://github.com/schiehll/ 'schiehll')
[react-alert](https://github.com/schiehll/react-alert 'react-alert') library. I
liked what he had done but the project seems to no longer be supported, and i
wanted something just a little different. Feel free to check out his library,
maybe it will work better for your needs. Otherwise keep reading...

### Installation:

```
yarn add react-alerts
```

or

```
npm install react-alerts
```

### Usage: Wrap your app in the provider:

```
import React from 'react';
import { AlertProvider } from 'react-alerts';

class MyApp extends React.Component {
  render() {
    return (
      <AlertProvider>
        <App />
      </AlertProvider>
    )
  }
}
```

### In your app where you would like to show alerts

```
import { AlertWrapper } from 'react-alerts';
...
...
render() {
  const options = {
        style: {
          backgroundColor: 'cornflowerblue',
          borderRadius: 0,
        },
        offset: '50px',
        position: 'top right',
        duration: 0,
      }
  }

  return (
    <div>
      <button>
        <AlertWrapper>
          {({show, close}) => {
            <button type="button" onClick={() => const alertId = show(options)}>Show Alert</button>
          }}
          <button type="button" onClick={() => close(alertId)}>
        </AlertWrapper>
    </div>
  )
}
```

The AlertWrapper returns a show and close function.

show(options, AlertComponent): The show function will display the alert using
the options object passed. **Returns the ID of the alert.**

close(alertId): The close function will close the alert with the corresponding
ID.

### Alert Options:

Options are passed as an object as the first argument to the show function.
While z-index is not an option, you can pass a custom z-index in your styles and
it will be applied. See below.

| Option           | Type            | Description                                    |
| ---------------- | --------------- | ---------------------------------------------- |
| message          | String / Number | message displayed in the alert                 |
| id               | String / Number | id for the alert                               |
| style            | Object          | defining javascript styles                     |
| offset           | String          | defining the offset of the alert from position |
| duration         | Number          | time in milliseconds for the alert to be shown |
| position         | String          | placement of the alert                         |
| theme            | String          | default alert theme colors                     |
| showProgessBar   | Bool            | show auto close progress bar                   |
| progressBarColor | String          | progress bar color                             |
| AlertComponent   | Component       | full custom alert component                    |

### Examples:

```
  message:          'Hi alert here!'
  id:               'my-alert'
  style:            style: {
                      backgroundColor: 'cornflowerblue',
                      borderRadius: 0,
                    }
  offset:           '50px'
  duration:         2000 (use 0 to never auto close the alert)
  position:         'top left'
                    'top center'
                    'top right'
                    'bottom left'
                    'bottom center'
                    'bottom right'
  theme:            'light' or 'dark' (light is default)
  showProgressBar   false
  progressBarColor '#666', 'cornflowerblue', 'red'
  AlertComponent:   Default alert will be totally replaced by your custom alert.
                    Only offset, duration, id, and position are used when passing a
                    custom AlertComponent. See below for specifics about using
                    your own custom alert component.

  const optionsExample = {
        message: 'Hi alert here!',
        id: 'my-alert',
        style: {
          backgroundColor: 'cornflowerblue',
          borderRadius: 0,
          zIndex: 1000,
        },
        offset: '50px',
        duration: 2000,
        position: 'top right',
        theme: 'dark',
        progressBarColor: 'cornflowerblue',
      }
```

### Custom Alert Component:

Passing a custom alert component will cause some options to be ignored. The
close function will be added as a prop for you to consume in your custom alert
component. **If you are going to use the close prop you will need to supply the
custom ID with your options.** You can also pass any other props you might need
in your custom alert component. See examples foler at the root of this repo.

```
/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import { Icon } from 'react-icons-kit';
import { ic_close as closeIcon } from 'react-icons-kit/md/ic_close';
import { TransitionGroup, Transition } from 'react-transition-group';

export const MyAlert = ({
  close,
  title,
  message,
  imageUri,
  transitionStyle,
  showProgressBar,
  progressBarColor,
  alertTimeout,
  ...props
}) => {
  // console.log('rest = ', props);
  const progressStyle = {
    transition: `width ${alertTimeout}ms ease-in-out`,
    width: '0px',
  };

  const progressTransitionStyles = {
    entering: { width: '0px' },
    entered: { width: '100%' },
  };
  return (
    <div
      key="someRandomKey"
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
        <header
          css={css`
            font-size: 18pt;
            color: white;
          `}
        >
          {title}
        </header>
        <div>
          <Icon size={20} icon={closeIcon} onClick={close} />
        </div>
      </div>
      <div
        css={css`
          display: grid;
          grid-gap: 15px;
          grid-template-columns: 200px 1fr;
        `}
      >
        <img height="200" width="200" src={imageUri} alt="pic" />
        <article
          css={css`
            color: #141414;
          `}
        >
          {message}
        </article>
      </div>
      {alertTimeout === 0 ? null : (
        <TransitionGroup>
          {showProgressBar && (
            <Transition timeout={0} appear>
              {state => (
                <div
                  style={{
                    height: '10px',
                    backgroundColor: `${progressBarColor}`,
                    // position: 'absolute',
                    // bottom: '0px',
                    // left: '0px',
                    ...progressStyle,
                    ...progressTransitionStyles[state],
                  }}
                />
              )}
            </Transition>
          )}
        </TransitionGroup>
      )}
    </div>
  );
};

MyAlert.propTypes = {
  close: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  imageUri: PropTypes.string,
};

MyAlert.defaultProps = {
  close: () => {},
  title: 'Default Title',
  message: 'Default Message',
  imageUri: '',
};

export default MyAlert;

```
