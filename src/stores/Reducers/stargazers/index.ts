import {AnyAction} from 'redux';

import {
  STARGAZERS_ERROR,
  STARGAZERS_LOADING,
  STARGAZERS_SUCCESS,
} from '../../Actions/actionType';

export interface StargazerStateType {
  stargazers: any;
  loading: boolean;
  error: any;
}

const initialState = {
  stargazers: [],
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
      return {
        ...state,
        loading: false,
        stargazers: action.payload,
        error: null,
      };
    case STARGAZERS_ERROR:
      return {
        ...state,
        loading: false,
        stargazers: null,
        error: action.payload,
      };
    default:
      return {...state};
  }
};
