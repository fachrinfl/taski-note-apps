import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import ApplicationNavigator from './navigators/Application';
import theme from './theme/theme';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <ApplicationNavigator />
    </>
  );
};

export default App;
