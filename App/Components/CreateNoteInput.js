import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import RoundButton from './RoundButton';

import styles from './Styles/CreateNoteInputStyles';

const CreateNoteInputField = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type text here..."
        value={props.noteText}
        onChangeText={noteText => props.onChangeNoteText(noteText)}
        underlineColorAndroid="transparent"
      />
      <RoundButton onButtonPress={props.onCreateButtonPress} buttonText=">" />
    </View>
  );
};

CreateNoteInputField.propTypes = {
  noteText: PropTypes.string.isRequired,
  onCreateButtonPress: PropTypes.func.isRequired,
  onChangeNoteText: PropTypes.func.isRequired,
};

export default CreateNoteInputField;
