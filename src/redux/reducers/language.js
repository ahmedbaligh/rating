import { CHANGE_LANGUAGE } from '../actions/language';
import { SET_AUTHED_USER } from '../actions/authedUser';

const language = (state = 'en', action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.language;
    case SET_AUTHED_USER:
      return action.user.language;
    default:
      return state;
  }
};

export default language;
