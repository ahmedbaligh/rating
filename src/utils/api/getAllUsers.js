import { apiRequest } from './api';

const getAllUsers = () =>
  apiRequest({
    url: '/api/services/app/User/GetAll/?Keyword='
  });

export default getAllUsers;
