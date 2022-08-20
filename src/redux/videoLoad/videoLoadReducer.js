import {
  LOAD_VIDEO_FAILURE,
  LOAD_VIDEO_SUCCESS,
  START_LOAD_VIDEO,
} from "./videoLoadActions";

const initialState = {
  isVideoLoaded: false,
  error: "",
};

const videoLoadReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOAD_VIDEO:
      return {
        ...state,
        isVideoLoaded: false,
        error: "",
      };
    case LOAD_VIDEO_SUCCESS:
      return {
        ...state,
        isVideoLoaded: action.payload,
      };
    case LOAD_VIDEO_FAILURE:
      return {
        ...state,
        isVideoLoaded: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default videoLoadReducer;
