import axios from 'axios';

import {
  STARGAZERS_LOADING,
  STARGAZERS_SUCCESS,
  STARGAZERS_ERROR,
  STARGAZERS_RESET,
} from './actionType';
import {AppDispatch} from '..';

export const stargazersLoading = (isLoading: boolean) => {
  return {type: STARGAZERS_LOADING, payload: isLoading};
};

export const stargazersError = (error: boolean) => {
  return {type: STARGAZERS_ERROR, payload: error};
};

export const stargazersSuccess = (payload: any, repoId: number | string) => {
  return {type: STARGAZERS_SUCCESS, payload: {data: payload, repoId}};
};

export const getStargazers = (URL: string, repoId: number | string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(stargazersLoading(true));
    try {
      const resp = await axios.get(URL);

      dispatch(stargazersSuccess(resp.data, repoId));
    } catch (error) {
      dispatch(stargazersError(error));
    }
  };
};

export const resetStargazers = () => {
  return {type: STARGAZERS_RESET};
};
