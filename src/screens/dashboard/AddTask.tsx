/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Title, Layout, Input, Button} from '../../components';
import {View} from 'react-native';
import theme from '../../theme/theme';
import dayjs from 'dayjs';
import {TItemProps} from './components/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  ApplicationScreenProps,
  ApplicationStackParams,
} from '../../navigators/navigations';

interface IAddTask {
  rows: TItemProps[];
  setRows: () => void;
}

const AddTask: React.FC<ApplicationScreenProps> = ({route}) => {
  const params = route?.params as IAddTask;
  const navigation =
    useNavigation<StackNavigationProp<ApplicationStackParams>>();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const onSave = () => {
    const newRows = [
      ...params.rows,
      {
        title,
        description,
        date: dayjs(),
      },
    ] as TItemProps[];
    params.setRows(newRows);
    navigation.goBack();
  };

  return (
    <Layout
      extraStyle={{
        justifyContent: 'space-between',
      }}>
      <View>
        <Title>Add new task</Title>
        <Input
          label="Title"
          placeholder="Input your title name here…"
          errorMessage="Field is required!"
          inputProps={{
            value: title,
            onChangeText: setTitle,
            keyboardType: 'default',
          }}
          containerStyle={{
            marginTop: theme.spacing.large,
          }}
        />
        <Input
          label="Description"
          placeholder="Input your description here…"
          errorMessage="Field is required!"
          inputProps={{
            value: description,
            onChangeText: setDescription,
            keyboardType: 'default',
          }}
          containerStyle={{
            marginTop: theme.spacing.large,
          }}
        />
      </View>
      <View>
        <Button
          label="Add Task"
          extraStyle={{marginTop: theme.spacing.medium}}
          onPress={onSave}
        />
        <Button
          label="Cancel"
          mode="outline"
          extraStyle={{marginTop: theme.spacing.small}}
          onPress={() => navigation.goBack()}
        />
      </View>
    </Layout>
  );
};

export default AddTask;
