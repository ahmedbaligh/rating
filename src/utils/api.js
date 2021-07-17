import axios from 'axios';

import { getAuthedUser } from '../redux/actions/authedUser';
import store from '../redux/store';
import { toggleLoading } from '../redux/actions/loading';

export const axiosDefault = axios.create({
  baseURL: 'http://amr11mahmoud-001-site1.etempurl.com',
  headers: { 'Content-Type': 'application/json' }
});

export const apiRequest = (obj = {}) => {
  store.dispatch(toggleLoading(true));
  return axiosDefault(obj).finally(() => store.dispatch(toggleLoading(0)));
};

//user
export const register = ({ name, username, email, password }) =>
  apiRequest({
    method: 'POST',
    url: '/api/services/app/Account/Register',
    data: {
      name: name,
      userName: username,
      emailAddress: email,
      password: password,
      darkTheme: false,
      language: 'en'
    }
  });

export const login = ({ username, password }) => {
  return axiosDefault({
    method: 'POST',
    url: '/api/TokenAuth/Authenticate',
    data: {
      userNameOrEmailAddress: username,
      password: password,
      rememberClient: true
    }
  }).then(res => {
    const TOKEN = 'Bearer ' + res.data.result.accessToken;
    axiosDefault.defaults.headers.common['Authorization'] = TOKEN;
    localStorage.setItem('token', TOKEN);

    store.dispatch(getAuthedUser());
  });
};

export const getUser = async () => {
  const res = await axiosDefault({
    url: '/api/services/app/Session/GetCurrentLoginInformations'
  });

  const id = res.data.result?.user?.id;

  if (!id) {
    return new Promise(res => {
      res(0);
    });
  }

  return axiosDefault({
    url: `/api/services/app/User/Get/?id=${id}`
  });
};

export const getAllUsers = () =>
  apiRequest({
    url: '/api/services/app/User/GetAll/?Keyword='
  });

export const getAllRoles = () =>
  apiRequest({
    url: '/api/services/app/Role/GetRoles'
  });

export const updateUser = newUser =>
  axiosDefault({
    method: 'PUT',
    url: '/api/services/app/User/Update',
    data: { ...newUser }
  });
//user end

//product

export const getProduct = id => {
  return apiRequest({
    url: `/api/services/app/Product/GetFull/?id=${id}`
  });
};

export const getCategoryTree = async id => {
  let categoryTree = [];
  let res;
  store.dispatch(toggleLoading(true));
  while (id) {
    res = await axiosDefault({
      url: `/api/services/app/ProductCategory/Get/?id=${id}`
    });
    try {
      categoryTree.push({ id: res.data.result.id, name: res.data.result.name });
      id = res.data.result.parentCategId;
    } catch (ex) {
      break;
    }
  }
  store.dispatch(toggleLoading(0));
  return new Promise(res => {
    res(categoryTree.reverse());
  });
};

export const searchByKeyword = ({ keyword, page = 0, maxCount = 20 }) =>
  axiosDefault({
    url: `/api/services/app/Product/GetProductsByKeyword/?KeyWord=${keyword}&SkipCount=${
      maxCount * page
    }&MaxCount=${maxCount}`
  });
//product end

//categories

export const getAllCategories = () =>
  apiRequest({
    url: '/api/services/app/ProductCategory/GetAll'
  });

//categories end

//marketplace

export const getAllMarkets = () =>
  apiRequest({
    url: '/api/services/app/MarketPlace/GetAll'
  });

//marketplace end

//scraper

export const scrapeProducts = ({ marketId, categoryId, numPages, keyword }) => {
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

//scraper end
