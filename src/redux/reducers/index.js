import { combineReducers } from 'redux';

import language from './language';
import darkTheme from './darkTheme';
import authedUser from './authedUser';
import loading from './loading';

export default combineReducers({ language, darkTheme, authedUser, loading });
