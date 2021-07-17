import { apiRequest } from './api';

const getAllRoles = () =>
  apiRequest({
    url: '/api/services/app/Role/GetRoles'
  });

export default getAllRoles;
