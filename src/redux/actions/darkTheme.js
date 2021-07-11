import store from '../store';
import { updateUser } from '../../utils/api';

export const TOGGLE_DARK_THEME = 'TOGGLE_DARK_THEME';

export const toggleDarkThemeAction = () => {
  const currentDark = store.getState().darkTheme;
  localStorage.setItem('dark', !currentDark);
  return { type: TOGGLE_DARK_THEME };
};

export const toggleDarkTheme = () => {
  if (store.getState().authedUser)
    return dispatch => {
      dispatch(toggleDarkThemeAction());
      const user = store.getState().authedUser;
      return updateUser(user).catch(() => {
        dispatch(toggleDarkThemeAction());
      });
    };
  return toggleDarkThemeAction();
};
