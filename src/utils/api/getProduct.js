import { apiRequest } from './api';

const getProduct = id =>
  apiRequest({
    url: `/api/services/app/Product/GetFull/?id=${id}`
  });

export default getProduct;
