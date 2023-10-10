import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
