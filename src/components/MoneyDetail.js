import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const MoneyDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: props.detail.thumbnail_image }}
          />
        </View>
        <View style={styles.leftContentStyle}>
        <Text style={styles.amountStyle}>{props.detail.title}</Text>
        <Text>{props.detail.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  leftContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  amountStyle: {
    fontSize: 18
  },
};

export default MoneyDetail;
