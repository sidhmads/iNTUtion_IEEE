import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const MoneyDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.detail.title}</Text>
      </CardSection>
    </Card>
  );
};

export default MoneyDetail;
