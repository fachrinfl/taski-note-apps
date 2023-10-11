/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Title, Layout, SubTitle, Input, Button} from '../../components';
import {View, FlatList, Text} from 'react-native';
import theme from '../../theme/theme';
import dayjs from 'dayjs';
import {ItemTask} from './components';
import {TItemProps} from './components/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ApplicationStackParams} from '../../navigators/navigations';

const Dashboard: React.FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<ApplicationStackParams>>();

  const [rows, setRows] = useState<TItemProps[]>([
    {
      title: 'Client Meetings',
      description:
        'Asking for some insight from marketing perspective. Take notes and more.',
      date: '2023-10-11T07:13:16.887Z' as unknown as Date,
    },
  ]);

  return (
    <Layout
      extraStyle={{
        justifyContent: 'space-between',
      }}>
      <FlatList
        data={rows}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{padding: 5}}
        renderItem={({item}) => (
          <ItemTask
            title={item.title}
            description={item.description}
            date={item.date}
          />
        )}
      />
      <View>
        <Button
          label="Add Task"
          extraStyle={{marginTop: theme.spacing.medium}}
          onPress={() =>
            navigation.navigate('AddTask', {
              rows,
              setRows,
            })
          }
        />
      </View>
    </Layout>
  );
};

export default Dashboard;
