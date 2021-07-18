import axiosDefault from './api';
const searchByKeyword = ({ keyword, page = 0, maxCount = 20 }) =>
  axiosDefault({
    url: `/api/services/app/Product/GetProductsByKeyword/?KeyWord=${keyword}&SkipCount=${
      maxCount * page
    }&MaxCount=${maxCount}`
  });
export default searchByKeyword;
