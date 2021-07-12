import store from '../store';
import { updateUser } from '../../utils/api';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const changeLanguageAction = language => {
  localStorage.setItem('language', language);
  return {
    type: CHANGE_LANGUAGE,
    language
  };
};

export const changeLanguage = language => {
  if (store.getState().authedUser)
    return dispatch => {
      const oldLang = store.getState().language;
      dispatch(changeLanguageAction(language));
      return updateUser(store.getState().authedUser).catch(() => {
        dispatch(changeLanguageAction(oldLang));
      });
    };
  return changeLanguageAction(language);
};
