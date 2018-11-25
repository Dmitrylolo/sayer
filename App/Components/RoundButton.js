import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/RoundButtonStyles';

const RoundButton = props => {
  const { onButtonPress, buttonText } = props;
  return (
    <TouchableOpacity onPress={onButtonPress} style={[styles.container]}>
      <Text style={styles.content}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

RoundButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

export default RoundButton;
