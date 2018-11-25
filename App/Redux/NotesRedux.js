import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createNote: ['note'],
  addComment: ['comment', 'noteId'],
  deleteNote: ['id'],
});

export const NotesTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable([]);

/* ------------- Reducers ------------- */

// request the data from an api
export const createNote = (state, { note }) => {
  if (note) {
    return [
      ...state,
      {
        id: state.length + 1,
        text: note,
        comments: [],
      },
    ];
  }
  return state;
};

export const addComment = (state, { comment, noteId }) => {
  if (comment) {
    return [
      ...state.map(note =>
        note.id === noteId
          ? {
              ...note,
              comments: [
                ...note.comments,
                { noteId, id: note.comments.length + 1, commentText: comment },
              ],
            }
          : note
      ),
    ];
  }
  return state;
};

export const deleteNote = (state, { id }) => {
  if (id) {
    return state.filter(note => note.id !== id);
  }
  return state;
};
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_NOTE]: createNote,
  [Types.ADD_COMMENT]: addComment,
  [Types.DELETE_NOTE]: deleteNote,
});
