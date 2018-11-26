import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Field, reset, reduxForm } from 'redux-form';

import HeaderTitle from '../Components/HeaderTitle';
import RoundButton from '../Components/RoundButton';
import CreateNoteInput from '../Components/CreateNoteInput';

import NotesActions from '../Redux/NotesRedux';

class CreateNoteScreen extends Component {
  static propTypes = {
    createNote: PropTypes.func,
    changeNoteText: PropTypes.func,
    createNoteValues: PropTypes.object,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle title="Creatae New Item" />,
      headerLeft: (
        <RoundButton buttonText="←" onButtonPress={() => navigation.goBack()} />
      ),
    };
  };

  state = {
    noteText: '',
  };

  onChangeNoteText = noteText => this.setState({ noteText });

  onCreateButtonPress = () => {
    if (this.state.noteText.trim().length > 0) {
      this.props.createNote(this.state.noteText);
      return this.props.navigation.navigate('Main');
    }
    return alert('Type at least 1 letter');
  };

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
    createNote: note => {
      dispatch(NotesActions.createNote(note));
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
