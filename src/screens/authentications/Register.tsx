/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Title, Layout, SubTitle, Input, Button} from '../../components';
import {View} from 'react-native';
import theme from '../../theme/theme';

const Register: React.FC = () => {
  return (
    <Layout
      extraStyle={{
        justifyContent: 'space-between',
      }}>
      <View>
        <Title>Join us today.</Title>
        <SubTitle>It’s Nice too see you, let’s start</SubTitle>
        <Input
          label="Full Name"
          placeholder="Input your full name here…"
          errorMessage="Field is required!"
          inputProps={{
            keyboardType: 'default',
          }}
          containerStyle={{
            marginTop: theme.spacing.large,
          }}
        />
        <Input
          label="Email Address"
          placeholder="yourname@email.com"
          errorMessage="Field is required!"
          inputProps={{
            keyboardType: 'email-address',
          }}
        />
        <Input
          label="Phone Number"
          placeholder="Input your phone number here..."
          errorMessage="Field is required!"
          inputProps={{
            keyboardType: 'phone-pad',
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
          label="Register"
          extraStyle={{marginTop: theme.spacing.medium}}
          // onPress={() => navigation.navigate('Register')}
        />
      </View>
    </Layout>
  );
};

export default Register;
