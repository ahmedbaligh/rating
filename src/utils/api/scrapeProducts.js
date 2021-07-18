import { apiRequest } from './api';

const scrapeProducts = ({ marketId, categoryId, numPages, keyword }) => {
  marketId = marketId.toString();

  const urls = {
    2: '/api/services/app/Souq/ScrapeSouqEgypt'
  };

  return apiRequest({
    method: 'POST',
    url: urls[marketId],
    data: {
      numberOfPages: numPages,
      keyWord: keyword,
      categoryId,
      marketPlaceId: marketId,
      id: 0
    }
  });
};

export default scrapeProducts;
