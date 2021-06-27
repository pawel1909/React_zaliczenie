import { ActionTypes, PhotoActions } from '../actions/actionTypes';
import { Photo } from '../actions/photoActions';

export interface IPhotoReducer {
  photos: Photo[];
}

const initialState = {
  photos: [],
}

export const photoReducer = (state: IPhotoReducer = initialState, action: PhotoActions) => {
  switch(action.type) {
    case ActionTypes.RETRIEVE_ALL_PHOTOS:
      return { ...state, photos: action.payload };
    default:
      return state;
  }
};
