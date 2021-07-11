import axios from 'axios';

export const apiRequest = axios.create({
  baseURL: 'http://amr11mahmoud-001-site1.etempurl.com',
  headers: { 'Content-Type': 'application/json' }
});

//user
export const register = ({ name, username, email, password }) =>
  apiRequest({
    method: 'POST',
    url: '/api/services/app/Account/Register',
    data: {
      name: name,
      userName: username,
      emailAddress: email,
      password: password,
      darkTheme: false,
      language: 'en'
    }
  });

export const login = ({ username, password, rememberMe }) =>
  apiRequest({
    method: 'POST',
    url: '/api/TokenAuth/Authenticate',
    data: {
      userNameOrEmailAddress: username,
      password: password,
      rememberClient: rememberMe
    }
  });

export const getUser = async () => {
  const res = await apiRequest({
    method: 'GET',
    url: '/api/services/app/Session/GetCurrentLoginInformations'
  });

  const id = res.data.result?.user?.id;

  if (!id) {
    return new Promise(res => {
      res(0);
    });
  }

  return apiRequest({
    method: 'GET',
    url: `/api/services/app/User/Get/?id=${id}`
  });
};

export const updateUser = newUser =>
  apiRequest({
    method: 'PUT',
    url: '/api/services/app/User/Update',
    data: { ...newUser }
  });
//user end
