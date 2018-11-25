import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Styles/MainScreenTitleStyles';

const MainScreenTitle = props => {
  const { mainText, secondaryText } = props;

  return (
    <View style={styles.container}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>{mainText}</Text>
      </View>
      <View style={styles.secondaryTextContainer}>
        <Text style={styles.secondaryText}>{secondaryText}</Text>
      </View>
    </View>
  );
};

MainScreenTitle.propTypes = {
  mainText: PropTypes.string,
  secondaryText: PropTypes.string,
};

export default MainScreenTitle;
