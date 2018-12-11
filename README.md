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
        position: 'top right',
        duration: 0,
        IconComponent: () => <QuestionMarkIcon />,
        CloseComponent: () => <CloseIcon />,
        AertComponent: () => <MyCustomAlert />
      }
  }

  return (
    <div>
      <button>
        <AlertWrapper>
          {({show, close}) => (
            <button type="button" onClick={() => show(options)}>Show Alert</button>
          )}
        </AlertWrapper>
    </div>
  )
}
```

Alert Options:

```
options: <Object> defining options for the alert:
  message: <String|Number> message displayed in the alert
  id: <String|Number> id for the alert
  style: <Object> defining javascript styles
  offset: <String> defining the offset of the alert
          example: '50px'
  duration: <Number> time in miliseconds for the alert to be shown
            example: 2000
            use 0 to never auto close the alert
  position: <String> placement of the alert
            options:  'top left'
                      'top center'
                      'top right'
                      'bottom left'
                      'bottom center'
                      'bottom right'
  IconComponent: <Component> defining the left icon on the standard alert
  CloseComponent: <Component> defining the right close button of the alert
  AlertComponent: <Component> full custom alert component
                  default alert will be totally replaced by your custom alert

  options example:
      {
        style: {
          backgroundColor: 'cornflowerblue',
          borderRadius: 0,
        },
        position: 'top right',
        duration: 0,
        IconComponent: () => <QuestionMarkIcon />,
        CloseComponent: () => <CloseIcon />,
        AertComponent: () => <MyCustomAlert />
      }


```
