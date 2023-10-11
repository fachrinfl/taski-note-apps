import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../../theme/theme';
import dayjs from 'dayjs';

type IItemTask = {
  title: string;
  description: string;
  date: Date;
};

const ItemTask: React.FC<IItemTask> = ({
  title,
  description,
  date,
}: IItemTask) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>{dayjs(date).format('DD MMMM YYYY')}</Text>
    </View>
  );
};

export default ItemTask;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.small,
    marginBottom: theme.spacing.small,
    padding: theme.spacing.medium,
  },
  title: {
    fontFamily: theme.typography.fontFamily.title,
    fontSize: theme.typography.fontSize.large,
  },
  description: {
    fontFamily: theme.typography.fontFamily.text,
    fontSize: theme.typography.fontSize.medium,
  },
  date: {
    fontFamily: theme.typography.fontFamily.text,
    fontSize: theme.typography.fontSize.small,
    opacity: 0.5,
  },
});
