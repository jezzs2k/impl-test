import {AnyAction} from 'redux';

import {
  GITHUB_USER_ERROR,
  GITHUB_USER_LOADING,
  GITHUB_USER_SUCCESS,
  GITHUB_USERS_SUCCESS,
  GITHUB_USER_RESET,
} from '../../Actions/actionType';

export interface GithubUserStateType {
  users: any;
  loading: boolean;
  error: any;
  user: any;
}

const initialState = {
  users: [],
  user: {},
  loading: false,
  error: null,
};

export const githubUserReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GITHUB_USER_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GITHUB_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };
    case GITHUB_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {...state.user, [action.payload.login]: action.payload},
        error: null,
      };
    case GITHUB_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: {},
        users: [],
        error: action.payload,
      };
    case GITHUB_USER_RESET:
      return {
        ...state,
        user: {},
      };
    default:
      return {...state};
  }
};
