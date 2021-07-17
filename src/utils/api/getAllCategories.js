import { apiRequest } from './api';

const getAllCategories = () =>
  apiRequest({
    url: '/api/services/app/ProductCategory/GetAll'
  });

export default getAllCategories;
