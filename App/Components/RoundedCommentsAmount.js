import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/RoundedCommentsAmountStyles';

const RoundedCommentsAmount = props => (
  <View style={styles.container}>
    <Text style={styles.amount}>{props.amount}</Text>
  </View>
);

RoundedCommentsAmount.propTypes = {
  amount: PropTypes.number,
};

export default RoundedCommentsAmount;
