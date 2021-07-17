import { apiRequest } from './api';

const getAllMarketplaces = () =>
  apiRequest({
    url: '/api/services/app/MarketPlace/GetAll'
  });

export default getAllMarketplaces;
