import { SET_AUTHED_USER, LOG_OUT } from '../actions/authedUser';
import { TOGGLE_DARK_THEME } from '../actions/darkTheme';
import { CHANGE_LANGUAGE } from '../actions/language';

const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.user;
    case TOGGLE_DARK_THEME:
      return state ? { ...state, darkTheme: !state.darkTheme } : state;
    case CHANGE_LANGUAGE:
      return state ? { ...state, language: action.language } : state;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
};

export default authedUser;
