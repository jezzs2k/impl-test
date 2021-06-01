import _ from 'lodash';
import {AnyAction} from 'redux';

import {
  STARGAZERS_ERROR,
  STARGAZERS_LOADING,
  STARGAZERS_SUCCESS,
  STARGAZERS_RESET,
} from '../../Actions/actionType';

export interface StargazerStateType {
  stargazers: any;
  loading: boolean;
  error: any;
}

const initialState = {
  stargazers: {},
  loading: false,
  error: null,
};

export const stargazerReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case STARGAZERS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case STARGAZERS_SUCCESS:
      const currentStargazers =
        (action.payload.login && state.stargazers?.[action.payload.login]) ||
        [];
      const newStargazers = _.uniqBy(
        [...currentStargazers, ...action.payload.data],
        (item: any) => item.id,
      );
      return {
        ...state,
        loading: false,
        stargazers: {
          ...state.stargazers,
          [action.payload.repoId]: newStargazers,
        },
        error: null,
      };
    case STARGAZERS_ERROR:
      return {
        ...state,
        loading: false,
        stargazers: {},
        error: action.payload,
      };
    case STARGAZERS_RESET:
      return {
        ...state,
        loading: false,
        stargazers: {},
        error: null,
      };
    default:
      return {...state};
  }
};
