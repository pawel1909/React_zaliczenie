import { ActionTypes, PublicationActions } from '../actions/actionTypes';
import { Publication } from '../actions/publicationActions';

export interface IPublicationReducer {
  publications: Publication[];
}

const initialState = {
  publications: [],
}

export const publicationReducer = (state: IPublicationReducer = initialState, action: PublicationActions) => {
  switch(action.type) {
    case ActionTypes.RETRIEVE_ALL_PUBLICATIONS:
      return { ...state, publications: action.payload };
    default:
      return state;
  }
};
