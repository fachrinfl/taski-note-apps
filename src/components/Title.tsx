import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import theme from '../theme/theme';

interface IProps {
  children: React.ReactNode;
  extraStyle?: TextStyle;
}

const Title: React.FC<IProps> = ({children, extraStyle}) => {
  return <Text style={[styles.text, extraStyle]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.typography.fontFamily.heading,
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.bold,
  },
});
