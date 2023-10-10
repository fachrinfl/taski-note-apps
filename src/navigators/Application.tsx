import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ApplicationStackParams} from './navigations';

import Login from '../screens/authentications/Login';

const Stack = createStackNavigator<ApplicationStackParams>();

const ApplicationNavigator: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default ApplicationNavigator;
