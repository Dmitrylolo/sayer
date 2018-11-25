import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/NoteListItemStyles.js';

const NoteListItem = props => {
  const { onNotePress, id, noteText } = props;

  return (
    <TouchableOpacity id={id} onPress={() => onNotePress(id)}>
      <View style={styles.container}>
        <Text>{noteText}</Text>
      </View>
    </TouchableOpacity>
  );
};

NoteListItem.propTypes = {
  id: PropTypes.number,
};

export default NoteListItem;
