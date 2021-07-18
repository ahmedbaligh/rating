import axiosDefault from './api';

const updateUser = newUser =>
  axiosDefault({
    method: 'PUT',
    url: '/api/services/app/User/Update',
    data: { ...newUser }
  });

export default updateUser;
