/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Title, Layout, SubTitle, Input, Button} from '../../components';
import {View} from 'react-native';
import theme from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ApplicationStackParams} from '../../navigators/navigations';

const Login: React.FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<ApplicationStackParams>>();

  return (
    <Layout
      extraStyle={{
        justifyContent: 'space-between',
      }}>
      <View>
        <Title>Welcome back.</Title>
        <SubTitle>Let's get started</SubTitle>
        <Input
          label="Email Address"
          placeholder="yourname@email.com"
          errorMessage="Field is required!"
          inputProps={{
            keyboardType: 'email-address',
          }}
          containerStyle={{
            marginTop: theme.spacing.large
          }}
        />
        <Input
          label="Password"
          placeholder="Input password here..."
          errorMessage="Field is required!"
          inputProps={{
            secureTextEntry: true,
          }}
        />
      </View>
      <View>
        <Button
          label="Login"
          extraStyle={{marginTop: theme.spacing.medium}}
          onPress={() => navigation.replace('Dashboard')}
        />
      </View>
    </Layout>
  );
};

export default Login;
