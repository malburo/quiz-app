import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './src/app/store';
const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
