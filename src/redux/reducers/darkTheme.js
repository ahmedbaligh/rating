import { TOGGLE_DARK_THEME } from '../actions/darkTheme';

const theme = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_DARK_THEME:
      return !state;
    default:
      return state;
  }
};

export default theme;
