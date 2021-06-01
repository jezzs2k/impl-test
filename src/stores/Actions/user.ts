import axios from 'axios';
import {AppDispatch} from '..';
import {getUsersURL, getUserURL} from '../../config';

import {
  GITHUB_USER_LOADING,
  GITHUB_USER_SUCCESS,
  GITHUB_USER_ERROR,
  GITHUB_USERS_SUCCESS,
  GITHUB_USER_RESET,
} from './actionType';

export const githubUserLoading = (isLoading: boolean) => {
  return {type: GITHUB_USER_LOADING, payload: isLoading};
};

export const githubUserError = (error: boolean) => {
  return {type: GITHUB_USER_ERROR, payload: error};
};

export const githubUserSuccess = (payload: any) => {
  return {type: GITHUB_USER_SUCCESS, payload};
};

export const githubUsersSuccess = (payload: any) => {
  return {type: GITHUB_USERS_SUCCESS, payload};
};

export const getUsers = (username: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(githubUserLoading(true));
    try {
      const res = await axios.get(getUsersURL(username));
      dispatch(githubUsersSuccess(res.data));
    } catch (error) {
      dispatch(githubUserError(error));
    }
  };
};

export const getUser = (username: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(githubUserLoading(true));
    try {
      const res = await axios.get(getUserURL(username));
      dispatch(githubUserSuccess(res.data));
    } catch (error) {
      dispatch(githubUserError(error));
    }
  };
};

export const resetUser = () => {
  return {type: GITHUB_USER_RESET};
};
