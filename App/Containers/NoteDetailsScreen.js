import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';

class NoteDetailsScreen extends Component {
  static propTypes = {
    comments: PropTypes.object,
    note: PropTypes.object,
    addComment: PropTypes.func,
  };

  render() {
    return (
      <View>
        <Text>NoteDetailsScreen</Text>
      </View>
    );
  }
}

export default connect(
  null,
  null
)(NoteDetailsScreen);
