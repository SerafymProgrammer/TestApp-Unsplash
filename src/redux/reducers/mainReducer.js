// reducers/people.js
import {ADD_PERSON, DELETE_PERSON} from '../../../environments';

const initialState = {
  allTrainingDays: [],
  selectedDay: null,
  isUpdated: false,
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_PHOTOS':
      return {
        ...state,
        allPhotos: action.allPhotos,
      };
    case 'CURRENT_PHOTOS':
      return {
        ...state,
        currentPhoto: action.currentPhoto,
      };
    default:
      return state;
  }
}
