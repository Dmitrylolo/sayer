import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/CommentlistItemStyles';

class CommentListItem extends PureComponent {
  static propTypes = {
    comment: PropTypes.object,
  };

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.comment}>{this.props.comment.commentText} </Text>
        </View>
      </View>
    );
  }
}

export default CommentListItem;
