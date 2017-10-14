import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const MoneyDetail = (props) => {
  return (
    <Card>
      <Text>{props.detail.title}</Text>
    </Card>
  );
};

export default MoneyDetail;
