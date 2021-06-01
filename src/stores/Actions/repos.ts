import axios from 'axios';

import {
  GITHUB_REPO_LOADING,
  GITHUB_REPO_SUCCESS,
  GITHUB_REPO_ERROR,
  GITHUB_REPO_RESET,
} from './actionType';
import {AppDispatch} from '..';

export const githubRepoLoading = (isLoading: boolean) => {
  return {type: GITHUB_REPO_LOADING, payload: isLoading};
};

export const githubRepoError = (error: boolean) => {
  return {type: GITHUB_REPO_ERROR, payload: error};
};

export const githubRepoSuccess = (payload: any, username: string) => {
  return {type: GITHUB_REPO_SUCCESS, payload: {data: payload, login: username}};
};

export const getRepos = (URL: string, username: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(githubRepoLoading(true));
    try {
      const resp = await axios.get(URL);

      dispatch(githubRepoSuccess(resp.data, username));
    } catch (error) {
      dispatch(githubRepoError(error));
    }
  };
};

export const resetRepo = () => {
  return {type: GITHUB_REPO_RESET};
};
