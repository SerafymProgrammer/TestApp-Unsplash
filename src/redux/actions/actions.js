import PhotoService from '../../shared/services/photoService';
import {AsyncStorage} from 'react-native';
import jwt from 'jwt-decode';

export function getAllPhotos() {
  debugger;
  return async (dispatch) => {
    await PhotoService.getAllPhotos()
      .then(response => {
        return response.json();
      })
      .then(response => {
        dispatch(allPhotos(response));
      })
      .catch(error => console.log(error));
  };
}

export function currentPhoto(currentPhoto) {
  return {
    type: 'CURRENT_PHOTOS',
    currentPhoto,
  };
}

export function allPhotos(allPhotos) {
  return {
    type: 'GET_ALL_PHOTOS',
    allPhotos,
  };
}


