import { apiRequest } from './api';

const signup = ({
  name,
  username,
  email,
  password,
  darkTheme = false,
  language = 'en'
}) =>
  apiRequest({
    method: 'POST',
    url: '/api/services/app/Account/Register',
    data: {
      name,
      userName: username,
      emailAddress: email,
      password,
      darkTheme,
      language
    }
  });

export default signup;
