import {NavigatorScreenParams} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type ApplicationStackParams = {
  Login: NavigatorScreenParams;
};

export type ApplicationScreenProps = StackScreenProps<ApplicationStackParams>;
