import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Swipeable from 'react-native-swipeable';

import RoundedCommentsAmount from '../Components/RoundedCommentsAmount';
import SwipeableButton from '../Components/SwipeableButton';

import styles from './Styles/NoteListItemStyles.js';
import { Colors } from '../Themes';

class NoteListItem extends Component {
  render() {
    const {
      onNotePress,
      id,
      noteText,
      commentsAmount,
      onDeleteButtonPress,
    } = this.props;

    return (
      <Swipeable
        rightButtons={[
          <SwipeableButton
            buttonText="Delete"
            buttonBackGroundColor={Colors.deleteButtonColor}
            onButtonPress={() => onDeleteButtonPress(id)}
          />,
        ]}
        rightButtonWidth={120}
      >
        <TouchableOpacity
          onPress={() => onNotePress(id)}
          style={styles.container}
        >
          <View style={styles.listItemContainer}>
            <View style={styles.noteTextContainer}>
              <Text
                style={styles.noteText}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {noteText}
              </Text>
            </View>
            <View style={styles.commentsAmountContainer}>
              <RoundedCommentsAmount amount={commentsAmount} />
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    );
  }
}

NoteListItem.propTypes = {
  id: PropTypes.number.isRequired,
  onNotePress: PropTypes.func.isRequired,
  noteText: PropTypes.string,
  commentsAmount: PropTypes.number,
  onDeleteButtonPress: PropTypes.func.isRequired,
};

export default NoteListItem;
