import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Swipeable from 'react-native-swipeable';

import RoundedCommentsAmount from '../Components/RoundedCommentsAmount';
import SwipeableButton from '../Components/SwipeableButton';

import styles from './Styles/NoteListItemStyles.js';
import { Colors } from '../Themes';

const NoteListItem = props => {
  const {
    onNotePress,
    id,
    noteText,
    commentsAmount,
    onDeleteButtonPress,
  } = props;

  return (
    <Swipeable
      rightButtons={[
        <SwipeableButton
          buttonText="Delete"
          buttonBackGroundColor={Colors.deleteButtonColor}
          onButtonPress={() => onDeleteButtonPress(id)}
        />,
      ]}
    >
      <TouchableOpacity onPress={() => onNotePress(id)}>
        <View style={styles.container}>
          <View>
            <Text>{noteText}</Text>
          </View>
          <View style={styles.commentsAmountContainer}>
            <RoundedCommentsAmount amount={commentsAmount} />
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

NoteListItem.propTypes = {
  id: PropTypes.number.isRequired,
  onNotePress: PropTypes.func.isRequired,
  noteText: PropTypes.string,
  commentsAmount: PropTypes.number,
  onDeleteButtonPress: PropTypes.func.isRequired,
};

export default NoteListItem;
