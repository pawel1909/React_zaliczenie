import { UserAction, ActionTypes } from '../actions/actionTypes';
import { User, UserPhoto } from '../actions/userActions';

export interface IUserReducerInterface {
  user: User;
  userPhotoUrl: UserPhoto,
  userList: User[],
}

const initialState = {
  user: {
    id: 0,
    name: '',
    company: {
      name: '',
    }
  },
  userPhotoUrl: {
    url: ''
  },
  userList: []
}

export const userReducer = (state: IUserReducerInterface = initialState, action: UserAction) => {
  switch(action.type) {
    case ActionTypes.RETRIEVE_USER_ME:
      return { ...state, user: action.payload };
    case ActionTypes.RETRIEVE_USER_PHOTO:
      return { ...state, userPhotoUrl: action.payload };
    case ActionTypes.RETRIEVE_ALL_USERS:
      return { ...state, userList: action.payload };
    case ActionTypes.UPDATE_USER_ME:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

