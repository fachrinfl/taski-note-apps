import {NavigatorScreenParams} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type ApplicationStackParams = {
  Onboarding: NavigatorScreenParams;
  Login: NavigatorScreenParams;
  Register: NavigatorScreenParams;
};

export type ApplicationScreenProps = StackScreenProps<ApplicationStackParams>;
