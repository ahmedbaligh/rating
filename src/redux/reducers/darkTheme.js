import { TOGGLE_DARK_THEME } from '../actions/darkTheme';
import { SET_AUTHED_USER } from '../actions/authedUser';

const theme = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_DARK_THEME:
      return !state;
    case SET_AUTHED_USER:
      return action.user.darkTheme;
    default:
      return state;
  }
};

export default theme;
