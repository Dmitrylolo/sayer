import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Field, reset, reduxForm } from 'redux-form';

import HeaderTitle from '../Components/HeaderTitle';
import CreateNoteInput from '../Components/CreateNoteInput';

import { createNote } from '../Redux/NotesRedux';

class CreateNoteScreen extends Component {
  static propTypes = {
    createNote: PropTypes.func,
    changeNoteText: PropTypes.func,
    createNoteValues: PropTypes.object,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle title="Creatae New Item" />,
    };
  };

  state = {
    noteText: '',
  };

  onChangeNoteText = noteText => this.setState({ noteText });
  onCreateButtonPress = () => {};

  render() {
    return (
      <View>
        <CreateNoteInput
          noteText={this.state.noteText}
          onChangeNoteText={this.onChangeNoteText}
          onCreateButtonPress={this.onCreateButtonPress}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNote: ({ note }) => {
      console.log('note value', note);
      dispatch(createNote(note));
    },
    clearInput: () => {
      dispatch(reset('note'));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateNoteScreen);
