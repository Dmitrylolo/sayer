import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class NoteDetailsScreen extends Component {
  static propTypes = {};

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
