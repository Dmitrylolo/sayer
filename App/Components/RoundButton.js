import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/RoundButtonStyles';

const RoundButton = props => {
  const { onButtonPress, buttonContent } = props;
  return (
    <TouchableOpacity onPress={onButtonPress}>
      <View style={styles.container}>
        <Text style={styles.content}>{buttonContent}</Text>
      </View>
    </TouchableOpacity>
  );
};

RoundButton.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default RoundButton;
