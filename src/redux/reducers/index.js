import { combineReducers } from 'redux';

import language from './language';
import darkTheme from './darkTheme';
import authedUser from './authedUser';

export default combineReducers({ language, darkTheme, authedUser });
