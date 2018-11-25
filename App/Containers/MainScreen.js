import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';

import MainScreenTitle from '../Components/MainScreenTitle';
import NoteListItem from '../Components/NoteListItem';

import styles from './Styles/MainScreenStyles';

import {
  NOTES_FIXTURES,
  COMMENTS_FIXTURES,
  NO_NOTES_DEFAULT,
  TITLE_TEXTS,
} from '../Fixtures';

class MainScreen extends Component {
  static propTypes = {
    notes: PropTypes.object,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <MainScreenTitle
          mainText={TITLE_TEXTS.mainText}
          secondaryText={TITLE_TEXTS.secondaryText}
        />
      ),
    };
  };

  keyExtractor = item => `${item.id}`;

  renderNotes = () => {
    return (
      <FlatList
        data={NOTES_FIXTURES}
        renderItem={({ item }) => (
          <NoteListItem
            id={item.id}
            noteText={item.text}
            commentsAmount={
              COMMENTS_FIXTURES.filter(comment => comment.noteId === item.id)
                .length
            }
          />
        )}
        keyExtractor={this.keyExtractor}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.notesContainer}>{this.renderNotes()}</View>
      </View>
    );
  }
}

export default connect(
  null,
  null
)(MainScreen);
