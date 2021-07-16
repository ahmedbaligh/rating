import { TOGGLE_LOADING, CLEAR_LOADING } from '../actions/loading';

const loading = (state = 0, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return action.start ? state + 1 : state ? state - 1 : state;
    case CLEAR_LOADING:
      return 0;
    default:
      return state;
  }
};

export default loading;
