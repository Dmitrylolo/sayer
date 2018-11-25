import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, FlatList, KeyboardAvoidingView } from 'react-native';
import { Field, reduxForm } from 'redux-form';

import HeaderTitle from '../Components/HeaderTitle';
import CommentListItem from '../Components/CommentListItem';
import CreateCommentInput from '../Components/CreateCommentInput';
import RoundButton from '../Components/RoundButton';

import styles from './Styles/NotesDetailsScreenStyles';

import { COMMENTS_FIXTURES } from '../Fixtures';

class NoteDetailsScreen extends Component {
  static propTypes = {
    comments: PropTypes.object,
    note: PropTypes.object,
    addComment: PropTypes.func,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle title={navigation.state.params.note.text} />,
      headerLeft: (
        <RoundButton buttonText="←" onButtonPress={() => navigation.goBack()} />
      ),
    };
  };

  state = { commentText: '' };

  onCommentTextChange = commentText => this.setState({ commentText });

  onCreateCommentButtonPress = () => {
    alert('comment created');
  };

  keyExtractor = comment => `${comment.id}`;

  renderComment = comment => <CommentListItem comment={comment} />;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.commentsContainer}>
          <FlatList
            data={COMMENTS_FIXTURES.filter(
              comment =>
                comment.noteId === this.props.navigation.state.params.note.id
            )}
            renderItem={({ item }) => this.renderComment(item)}
            keyExtractor={this.keyExtractor}
          />
        </View>
        <KeyboardAvoidingView
          style={styles.createCommentContainer}
          behavior="height"
        >
          <CreateCommentInput
            onCreateCommentButtonPress={this.onCreateCommentButtonPress}
            commentText={this.state.commentText}
            onCommentTextChange={this.onCommentTextChange}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default connect(
  null,
  null
)(NoteDetailsScreen);
