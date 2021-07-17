import axiosDefault from './api';
import store from '../../redux/store';
import { toggleLoading } from '../../redux/actions/loading';

const getCategoryTree = async id => {
  let categoryTree = [];
  let data;

  store.dispatch(toggleLoading(true));

  while (id) {
    ({ data } = await axiosDefault({
      url: `/api/services/app/ProductCategory/Get/?id=${id}`
    }));

    try {
      categoryTree.push({ id: data.result.id, name: data.result.name });
      id = data.result.parentCategId;
    } catch (error) {
      break;
    }
  }

  store.dispatch(toggleLoading(0));

  return new Promise(res => {
    res(categoryTree.reverse());
  });
};

export default getCategoryTree;
