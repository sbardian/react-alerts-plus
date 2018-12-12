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

| Option         | Type            | Description                                    |
| -------------- | --------------- | ---------------------------------------------- |
| message        | String / Number | message displayed in the alert                 |
| id             | String / Number | id for the alert                               |
| style          | Object          | defining javascript styles                     |
| offset         | String          | defining the offset of the alert from position |
| duration       | Number          | time in milliseconds for the alert to be shown |
| position       | String          | placement of the alert                         |
| theme          | String          | default alert theme colors                     |
| AlertComponent | Component       | full custom alert component                    |

### Examples:

```
  message:        'Hi alert here!'
  id:             'my-alert'
  style:          style: {
                    backgroundColor: 'cornflowerblue',
                    borderRadius: 0,
                  }
  offset:         '50px'
  duration:       2000 (use 0 to never auto close the alert)
  position:       'top left'
                  'top center'
                  'top right'
                  'bottom left'
                  'bottom center'
                  'bottom right'
  theme:          'light' or 'dark' (light is default)
  AlertComponent: Default alert will be totally replaced by your custom alert.
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
      }
```

### Custom Alert Component:

Passing a custom alert component will cause some options to be ignored. The
close function will be added as a prop for you to consume in your custom alert
component. **If you are going to use the close prop you will need to supply the
custom ID with your options.** You can also pass any other props you might need
in your custom alert component.

```
const MyAlertComponent = ({ close, myColor, myHeight, ...rest }) => {
  return (
    <div key="randomKey">
      Hi alert here!
      <button type="button" onClick={close}>
        close
      </button>
    </div>
  );
};

class MyApp extends React.Component {
  render() {
    const options = {
        id: 'my-alert',
        offset: '50px',
        position: 'top right',
        duration: 0,
      }

      return (
        <AlertProvider>
          <div className="App">
            <AlertWrapper>
              {({ show, close }) => (
                show(options, () => <MyAlertComponent myColor="blue" myHeight={100} anotherProp={XXX} andAnother={XXX} />);
              )}
            </AlertWrapper>
          </div>
        </AlertProvider>
      )
  }
}
```
