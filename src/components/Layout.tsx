import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import theme from '../theme/theme';

interface IProps {
  children: React.ReactNode;
  extraStyle?: any;
}

const Layout: React.FC<IProps> = ({children, extraStyle}) => {
  return (
    <SafeAreaView style={styles.view}>
      <View style={[styles.view, extraStyle]}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  view: {
    backgroundColor: theme.colors.background,
    flex: 1,
    padding: theme.spacing.medium
  },
});
