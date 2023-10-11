import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import theme from '../theme/theme';

interface IProps {
  showLabel?: Boolean;
  showError?: Boolean;
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputProps?: TextInputProps;
}

const Input: React.FC<IProps> = ({
  showLabel = true,
  showError = false,
  label = 'Fullname',
  errorMessage = 'Field is required!',
  placeholder = 'Input your full name here…',
  containerStyle = {},
  inputProps = {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {showLabel && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          {...inputProps}
          placeholder={placeholder}
          style={styles.textInput}
        />
      </View>
      {showError && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 3,
  },
  label: {
    fontFamily: theme.typography.fontFamily.heading,
    fontSize: theme.typography.fontSize.small,
    color: theme.colors.text,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 4,
  },
  textInput: {
    height: 19,
    fontFamily: theme.typography.fontFamily.text,
  },
  errorMessage: {
    fontFamily: theme.typography.fontFamily.text,
    fontSize: theme.typography.fontSize.small,
    color: theme.colors.error,
  },
});
