import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, FlatList, Alert } from 'react-native';

import MainScreenTitle from '../Components/MainScreenTitle';
import NoteListItem from '../Components/NoteListItem';
import NewNoteButton from '../Components/NewNoteButton';

import styles from './Styles/MainScreenStyles';

import {
  NOTES_FIXTURES,
  COMMENTS_FIXTURES,
  NO_NOTES_DEFAULT,
  TITLE_TEXTS,
} from '../Fixtures';

class MainScreen extends Component {
  static propTypes = {
    notes: PropTypes.array,
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

  state = { notes: this.props.notes };

  componentDidMount() {
    console.log('notesAAAAAAA ', this.props.notes.length);
  }

  onNewButtonPress = () => this.props.navigation.push('CreateNote');

  onNotePress = note => this.props.navigation.push('NoteDetails', { note });

  onDeleteButtonPress = id =>
    Alert.alert(
      'Delete Note?',
      'Are you sure you want to delete this note?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => this.deleteNote(id) },
      ],
      { cancelable: false }
    );

  deleteNote = id => alert(`note with id: ${id} have been deleted`);

  keyExtractor = note => `${note.id}`;

  renderNotes = () => {
    const { notes, comments } = this.props;
    return (
      <View style={styles.container}>
        {notes.length === 0 ? (
          <Text>No notes yet</Text>
        ) : (
          <FlatList
            data={notes}
            renderItem={({ item: note }) => (
              <NoteListItem
                onNotePress={() => this.onNotePress(note)}
                id={note.id}
                noteText={note.text}
                commentsAmount={
                  comments.filter(comment => comment.noteId === note.id).length
                }
                onDeleteButtonPress={() => this.onDeleteButtonPress(note.id)}
              />
            )}
            keyExtractor={this.keyExtractor}
          />
        )}
        <NewNoteButton onNewButtonPress={this.onNewButtonPress} />
      </View>
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

const mapStateToProps = state => {
  return {
    notes: state.notes.notes,
    comments: state.comments.comments,
  };
};

export default connect(
  mapStateToProps,
  null
)(MainScreen);
