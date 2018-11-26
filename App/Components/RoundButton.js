import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/RoundButtonStyles';

const RoundButton = props => {
  const { onButtonPress, buttonText } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onButtonPress}>
        <Text style={styles.content}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

RoundButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

export default RoundButton;
