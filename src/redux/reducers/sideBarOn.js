import { TOGGLE_SIDE_BAR } from '../actions/sideBarOn';

const sideBarOn = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_BAR:
      return !state;
    default:
      return state;
  }
};

export default sideBarOn;
