/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import theme from '../theme/theme';

interface IProps {
  label: string;
  mode?: 'solid' | 'outline';
  extraStyle?: ViewStyle;
}

const Button: React.FC<IProps & TouchableOpacityProps> = ({
  label,
  mode = 'solid',
  extraStyle,
  ...props
}) => {
  const isSolidMode = Boolean(mode === 'solid');
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.5}
      style={[
        styles.container,
        {
          backgroundColor: isSolidMode ? theme.colors.primary : 'transparent',
          borderWidth: isSolidMode ? 0 : 1,
          borderColor: isSolidMode ? 'transparent' : theme.colors.primary,
        },
        extraStyle,
      ]}>
      <Text
        style={[
          styles.text,
          {color: mode === 'solid' ? theme.colors.white : theme.colors.primary},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadius.small,
  },
  text: {
    fontFamily: theme.typography.fontFamily.title,
    fontSize: theme.typography.fontSize.medium,
  },
});
