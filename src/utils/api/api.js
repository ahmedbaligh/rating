import axios from 'axios';

import store from '../../redux/store';
import { toggleLoading } from '../../redux/actions/loading';

const axiosDefault = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Encoding': 'gzip',
    Vary: 'Accept - Encoding',
    Server: 'Microsoft - IIS / 10.0',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Powered-By': 'ASP.NET'
  }
});

export default axiosDefault;

export const apiRequest = (obj = {}) => {
  store.dispatch(toggleLoading(true));

  return axiosDefault(obj).finally(() => store.dispatch(toggleLoading(0)));
};
