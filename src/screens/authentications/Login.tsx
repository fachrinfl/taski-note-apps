import React from 'react';
import {Title, Layout, SubTitle} from '../../components';
import {View} from 'react-native';

const Login: React.FC = () => {
  return (
    <Layout>
      <View>
        <Title>Welcome back.</Title>
        <SubTitle>Let's get started</SubTitle>
      </View>
    </Layout>
  );
};

export default Login;
