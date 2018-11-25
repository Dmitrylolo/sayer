import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class MainScreen extends Component {
  static propTypes = {};

  render() {
    return (
      <View>
        <Text>MainScreen</Text>
      </View>
    );
  }
}

export default connect(
  null,
  null
)(MainScreen);
