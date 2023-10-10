/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Title, Layout, SubTitle, Button} from '../../components';
import theme from '../../theme/theme';
import {View, Image, StyleSheet} from 'react-native';
import ImagesAssets from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ApplicationStackParams} from '../../navigators/navigations';

const Onboarding: React.FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<ApplicationStackParams>>();
  return (
    <Layout
      extraStyle={{
        justifyContent: 'space-around',
      }}>
      <View>
        <Image
          source={ImagesAssets.logo}
          resizeMode="contain"
          style={styles.imageLogo}
        />
      </View>
      <View>
        <Image
          source={ImagesAssets.onboarding}
          resizeMode="contain"
          style={styles.imageCenter}
        />
      </View>
      <View>
        <Title extraStyle={{textAlign: 'center'}}>Start with taski</Title>
        <SubTitle extraStyle={{textAlign: 'center'}}>
          Join us now and get your daily things right
        </SubTitle>
        <Button
          label="Login"
          extraStyle={{marginTop: theme.spacing.large}}
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          label="Register"
          mode="outline"
          extraStyle={{marginTop: theme.spacing.medium}}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </Layout>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  imageLogo: {
    width: 105,
    alignSelf: 'center',
  },
  imageCenter: {
    width: 285,
    alignSelf: 'center',
  },
});
