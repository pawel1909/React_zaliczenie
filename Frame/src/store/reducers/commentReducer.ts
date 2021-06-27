import { ActionTypes, CommentActions } from '../actions/actionTypes';
import { Comment } from '../actions/commentActions';

export interface ICommentReducer {
  comments: Comment[];
}

const initialState = {
  comments: [],
}

export const commentReducer = (state: ICommentReducer = initialState, action: CommentActions) => {
  switch(action.type) {
    case ActionTypes.RETRIEVE_ALL_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};
