import axios from 'axios';

import { getAuthedUser } from '../redux/actions/authedUser';
import store from '../redux/store';

export const apiRequest = axios.create({
  baseURL: 'http://amr11mahmoud-001-site1.etempurl.com',
  headers: { 'Content-Type': 'application/json' }
});

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
  return apiRequest({
    method: 'POST',
    url: '/api/TokenAuth/Authenticate',
    data: {
      userNameOrEmailAddress: username,
      password: password,
      rememberClient: true
    }
  }).then(res => {
    const TOKEN = 'Bearer ' + res.data.result.accessToken;
    apiRequest.defaults.headers.common['Authorization'] = TOKEN;
    localStorage.setItem('token', TOKEN);

    store.dispatch(getAuthedUser());
  });
};

export const getUser = async () => {
  const res = await apiRequest({
    url: '/api/services/app/Session/GetCurrentLoginInformations'
  });

  const id = res.data.result?.user?.id;

  if (!id) {
    return new Promise(res => {
      res(0);
    });
  }

  return apiRequest({
    url: `/api/services/app/User/Get/?id=${id}`
  });
};

export const updateUser = newUser =>
  apiRequest({
    method: 'PUT',
    url: '/api/services/app/User/Update',
    data: { ...newUser }
  });
//user end

//product

export const getProduct = id =>
  apiRequest({
    url: `/api/services/app/Product/GetFull/?id=${id}`
  });

export const getCategoryTree = async id => {
  let categoryTree = [];
  let res;
  while (id) {
    res = await apiRequest({
      url: `/api/services/app/ProductCategory/Get/?id=${id}`
    });
    try {
      categoryTree.push({ id: res.data.result.id, name: res.data.result.name });
      id = res.data.result.parentCategId;
    } catch (ex) {
      break;
    }
  }
  return new Promise(res => {
    res(categoryTree.reverse());
  });
};

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
