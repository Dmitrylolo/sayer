import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import RoundedCommentsAmount from '../Components/RoundedCommentsAmount';

import styles from './Styles/NoteListItemStyles.js';

const NoteListItem = props => {
  const { onNotePress, id, noteText, commentsAmount } = props;

  return (
    <TouchableOpacity id={id} onPress={() => onNotePress(id)}>
      <View style={styles.container}>
        <View>
          <Text>{noteText}</Text>
        </View>
        <View style={styles.commentsAmountContainer}>
          <RoundedCommentsAmount amount={commentsAmount} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

NoteListItem.propTypes = {
  id: PropTypes.number,
};

export default NoteListItem;
