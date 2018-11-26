import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, FlatList, KeyboardAvoidingView } from 'react-native';
import { Field, reduxForm } from 'redux-form';

import HeaderTitle from '../Components/HeaderTitle';
import CommentListItem from '../Components/CommentListItem';
import CreateCommentInput from '../Components/CreateCommentInput';
import RoundButton from '../Components/RoundButton';

import NotesActions from '../Redux/NotesRedux';

import styles from './Styles/NotesDetailsScreenStyles';

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
        <View style={styles.backButton}>
          <RoundButton
            buttonText="←"
            onButtonPress={() => navigation.navigate('Main')}
          />
        </View>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
      addComment: false,
    };
  }

  onCommentTextChange = commentText => {
    this.setState({ commentText });
  };

  onCreateCommentButtonPress = () => {
    const { commentText } = this.state;
    const {
      navigation: {
        state: {
          params: {
            note: { id: noteId },
          },
        },
      },
      addComment,
    } = this.props;
    addComment(commentText, noteId);
    this.setState({ commentText: '' });
  };

  dataToRender = () => {
    return this.props.notes.filter(
      note => note.id === this.props.navigation.state.params.note.id
    )[0].comments;
  };

  keyExtractor = comment => `${comment.id}`;

  renderComment = comment => <CommentListItem comment={comment} />;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.commentsContainer}>
          {this.dataToRender().length === 0 ? (
            <Text>No comments yet. Add something... </Text>
          ) : (
            <FlatList
              data={this.dataToRender()}
              renderItem={({ item }) => this.renderComment(item)}
              keyExtractor={this.keyExtractor}
            />
          )}
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

const mapStateToProps = ({ notes }) => {
  return {
    notes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: (comment, noteId) => {
      dispatch(NotesActions.addComment(comment, noteId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetailsScreen);
