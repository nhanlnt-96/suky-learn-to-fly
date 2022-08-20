import { START_HOVER, STOP_HOVER } from "./animateHoverActions";

const initialState = {
  isHover: false,
};

const animateHoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_HOVER:
      return {
        ...state,
        isHover: action.payload,
      };
    case STOP_HOVER:
      return {
        ...state,
        isHover: action.payload,
      };
    default:
      return state;
  }
};

export default animateHoverReducer;
