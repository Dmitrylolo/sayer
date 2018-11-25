import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/NewNoteButtonStyles';

const NewNoteButton = props => {
  return (
    <TouchableOpacity onPress={props.onNewButtonPress}>
      <View style={styles.container}>
        <Text style={styles.text}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

NewNoteButton.propTypes = {
  onNewButtonPress: PropTypes.func.isRequired,
};

export default NewNoteButton;
