import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import RoundButton from './RoundButton';

import styles from './Styles/CreateCommentInputStyles';

const CreateCommentInput = props => {
  const { onCreateCommentButtonPress, commentText } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type new comment here.."
          value={commentText}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton
          onButtonPress={onCreateCommentButtonPress}
          buttonText=">"
        />
      </View>
    </View>
  );
};

CreateCommentInput.propTypes = {
  commentText: PropTypes.string.isRequired,
  onCreateCommentButtonPress: PropTypes.func.isRequired,
};

export default CreateCommentInput;
