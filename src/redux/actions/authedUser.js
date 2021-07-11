import { getUser } from '../../utils/api';

export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOG_OUT = 'LOG_OUT';

export const setAuthedUser = user => ({ type: SET_AUTHED_USER, user });

export const getAuthedUser = () => dispatch => {
  return getUser().then(res => {
    if (res) {
      const user = res.data.result;
      dispatch(setAuthedUser(user));
    }
  });
};

export const logout = () => {
  localStorage.removeItem('token');
  return { type: LOG_OUT };
};
