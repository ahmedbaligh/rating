import axiosDefault from './api';
const searchByKeyword = ({ keyword, page = 0, maxCount = 20, category }) =>
  axiosDefault({
    url: `${
      category
        ? '/api/services/app/Product/GetProductsByCategory'
        : '/api/services/app/Product/GetProductsByKeyword/'
    }?KeyWord=${category || keyword}&SkipCount=${
      maxCount * page
    }&MaxCount=${maxCount}`
  });
export default searchByKeyword;
