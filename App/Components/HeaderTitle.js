import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/HeaderTitleStyles';

const HeaderTitle = props => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

HeaderTitle.propTypes = {
  title: PropTypes.string,
};

export default HeaderTitle;
