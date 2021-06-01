import {AnyAction} from 'redux';
import _ from 'lodash';

import {
  GITHUB_REPO_LOADING,
  GITHUB_REPO_SUCCESS,
  GITHUB_REPO_ERROR,
  GITHUB_REPO_RESET,
} from '../../Actions/actionType';

export interface RepoStateType {
  repos: any;
  loading: boolean;
  error: any;
}

const initialState = {
  repos: {},
  loading: false,
  error: null,
};

export const repoReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GITHUB_REPO_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GITHUB_REPO_SUCCESS:
      const currentRepo =
        (action.payload.login && state.repos?.[action.payload.login]) || [];
      const newRepos = _.uniqBy(
        [...currentRepo, ...action.payload.data],
        (item: any) => item.id,
      );

      return {
        ...state,
        loading: false,
        repos: {
          ...state.repos,
          [action.payload.login]: newRepos,
        },
        error: null,
      };
    case GITHUB_REPO_ERROR:
      return {
        ...state,
        loading: false,
        repos: {},
        error: action.payload,
      };
    case GITHUB_REPO_RESET:
      return {
        ...state,
        loading: false,
        repos: {},
        error: null,
      };
    default:
      return {...state};
  }
};
