import axiosDefault from './api';

const getSearchSuggestions = keyword =>
  axiosDefault({
    method: 'POST',
    url: '/api/services/app/Product/SearchRecommendation',
    data: { keyWord: keyword }
  });

export default getSearchSuggestions;
