import axios from 'axios';

import store from '../../redux/store';
import { toggleLoading } from '../../redux/actions/loading';

const axiosDefault = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosDefault;

export const apiRequest = (obj = {}) => {
  store.dispatch(toggleLoading(true));

  return axiosDefault(obj).finally(() => store.dispatch(toggleLoading(0)));
};
