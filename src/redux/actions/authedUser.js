import { getUser, axiosDefault } from '../../utils/api';
import { toggleLoading } from './loading';

export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOG_OUT = 'LOG_OUT';

export const setAuthedUser = user => ({ type: SET_AUTHED_USER, user });

export const getAuthedUser = () => dispatch => {
  dispatch(toggleLoading(true));
  return getUser()
    .then(res => {
      if (res) {
        const user = res.data.result;
        dispatch(setAuthedUser(user));
      }
    })
    .finally(() => dispatch(toggleLoading()));
};

export const logout = () => {
  axiosDefault.defaults.headers.common['Authorization'] = '';
  localStorage.removeItem('token');
  return { type: LOG_OUT };
};
