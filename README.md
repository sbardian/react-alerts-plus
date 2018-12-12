![WIP](https://img.shields.io/badge/WIP-DO%20NOT%20USE-red.svg)

# react-alerts

Alerts for react.

Installation:

```
yarn add react-alerts
```

or

```
npm install react-alerts
```

Usage: Wrap your app in our provider:

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

In your app where you would like to show alerts

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

Show(options): The show function will display the alert using the options object
passed. Returns the ID of the alert.

Close(alertId): The close function will close the alert with the corresponding
ID.

Alert Options:

```
options: <Object> defining options for the alert:
  message:        <String|Number> message displayed in the alert
                    example: 'Hi alert here!'
  id:             <String|Number> id for the alert
                    example: 'my-alert'
  style:          <Object> defining javascript styles
                    style: {
                      backgroundColor: 'cornflowerblue',
                      borderRadius: 0,
                    }
  offset:         <String> defining the offset of the alert from 'position'
                    example: '50px'
  duration:       <Number> time in miliseconds for the alert to be shown
                    example: 2000
                    use 0 to never auto close the alert
  position:       <String> placement of the alert
                    options:  'top left'
                              'top center'
                              'top right'
                              'bottom left'
                              'bottom center'
                              'bottom right'
  theme:          <String> default alert theme colors
                    options:  'light'
                              'dark'
  AlertComponent: <Component> full custom alert component
                    default alert will be totally replaced by your custom alert.
                    Only offset, duration, and position are used when passing a
                    custom AlertComponent.

  options example:
      {
        style: {
          backgroundColor: 'cornflowerblue',
          borderRadius: 0,
        },
        position: 'top right',
        duration: 0,
        AertComponent: () => <MyCustomAlert />
      }
```
