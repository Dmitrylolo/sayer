import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Field, reset, reduxForm } from 'redux-form';

import { createNote } from '../Redux/NotesRedux';

class CreateNoteScreen extends Component {
  static propTypes = {
    createNote: PropTypes.func,
    changeNoteText: PropTypes.func,
    createNoteValues: PropTypes.object,
  };

  render() {
    return (
      <View>
        <Text>CreateNoteScreen</Text>
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
