import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addComment: ['comment', 'noteId'],
});

export const CommentsActions = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  comments: [],
});

/* ------------- Reducers ------------- */

// request the data from an api
export const addComment = (state, { comment, noteId }) => {
  if (comment) {
    return {
      comments: [
        ...state.comments,
        {
          id: state.comments.length + 1,
          commentText: comment,
          noteId,
        },
      ],
    };
  }
  return state;
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_COMMENT]: addComment,
});
