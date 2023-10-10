import {StackNavigationOptions} from '@react-navigation/stack';
import theme from './theme';

export const navigationHeaderStyle: StackNavigationOptions = {
  headerTintColor: theme.colors.secondary,
  headerShown: true,
  cardStyle: {
    backgroundColor: theme.colors.background,
  },
  headerStyle: {
    backgroundColor: theme.colors.background,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontFamily: theme.typography.fontFamily.heading,
    fontSize: theme.typography.fontSize.large,
    color: theme.colors.text,
  },
  headerLeftLabelVisible: false,
};
