import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const MoneyDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.leftContentStyle}>
            {props.detail.nameOfParty ? <Text style={styles.nameStyle}>{props.detail.nameOfParty}</Text> : <Text style={styles.nameStyle}>Not Available</Text>}
            <Text>{props.detail.date.toString().substring(0, 10)}</Text>
          </View>
          <View style={styles.rightStyle}>
            <Text style={styles.amountStyle}>${(props.detail.amount).toFixed(2)}</Text>
          </View>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  leftContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  rightStyle: {
    paddingRight: 25,
    alignItems: 'center',
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: '600'
  },
  amountStyle: {
    fontSize: 25
  },
};

export default MoneyDetail;
