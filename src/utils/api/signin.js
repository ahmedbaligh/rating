import axiosDefault from './api';

import store from '../../redux/store';
import { getAuthedUser } from '../../redux/actions/authedUser';

const setToken = data => {
  const TOKEN = `Bearer ${data.result.accessToken}`;
  axiosDefault.defaults.headers.common['Authorization'] = TOKEN;
  localStorage.setItem('token', TOKEN);

  store.dispatch(getAuthedUser());
};

export const signin = async ({ usernameEmail, password, remember = true }) => {
  let { data } = await axiosDefault({
    method: 'POST',
    url: '/api/TokenAuth/Authenticate',
    data: {
      userNameOrEmailAddress: usernameEmail,
      password,
      rememberClient: remember
    }
  });

  setToken(data);

  return data;
};

export default signin;
