import axios from 'axios';

import {
  STARGAZERS_LOADING,
  STARGAZERS_SUCCESS,
  STARGAZERS_ERROR,
} from './actionType';
import {AppDispatch} from '..';

export const stargazersLoading = (isLoading: boolean) => {
  return {type: STARGAZERS_LOADING, payload: isLoading};
};

export const stargazersError = (error: boolean) => {
  return {type: STARGAZERS_ERROR, payload: error};
};

export const stargazersSuccess = (payload: any) => {
  return {type: STARGAZERS_SUCCESS, payload};
};

export const getStargazers = (URL: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(stargazersLoading(true));
    try {
      const resp = await axios.get(URL);

      dispatch(stargazersSuccess(resp.data));
    } catch (error) {
      dispatch(stargazersError(error));
    }
  };
};
