/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationStackParams} from './navigations';

import Onboarding from '../screens/onboarding/Onboarding';
import Login from '../screens/authentications/Login';
import Register from '../screens/authentications/Register';
import { navigationHeaderStyle } from '../theme/styles';

const Stack = createStackNavigator<ApplicationStackParams>();

const ApplicationNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} options={navigationHeaderStyle}/>
        <Stack.Screen name="Register" component={Register} options={navigationHeaderStyle}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
