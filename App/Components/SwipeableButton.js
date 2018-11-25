import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/SwipeableButtonStyles';

const SwipeableButton = props => (
  <TouchableOpacity
    onPress={props.onButtonPress}
    style={[
      styles.container,
      props.buttonBackGroundColor && {
        backgroundColor: props.buttonBackGroundColor,
      },
    ]}
  >
    {console.log('color', props.buttonBackGroundColor)}
    <Text>{props.buttonText}</Text>
  </TouchableOpacity>
);

SwipeableButton.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonBackGroundColor: PropTypes.string,
};

export default SwipeableButton;
