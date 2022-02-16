import { DisableActionType } from '../../constants';
import {
  SET_DISABLE_TRUE,
  SET_DISABLE_FALSE,
  TOGGLE_DISABLE
} from '../actions/actionTypes';

const initialState = {
  disable: false
};

const authorization = (state = initialState, action: DisableActionType) => {
  switch (action.type) {
    case SET_DISABLE_TRUE: {
      return {
        ...state,
        disable: true
      };
    }
    case SET_DISABLE_FALSE: {
      return {
        ...state,
        disable: false
      };
    }
    case TOGGLE_DISABLE: {
      return {
        ...state,
        disable: !state.disable
      };
    }
    default:
      return state;
  }
  return state;
};

export default authorization;
