export const START_LOAD_VIDEO = "START_LOAD_VIDEO";
export const LOAD_VIDEO_SUCCESS = "LOAD_VIDEO_SUCCESS";
export const LOAD_VIDEO_FAILURE = "LOAD_VIDEO_FAILURE";

export const startLoadVideo = () => {
  return {
    type: START_LOAD_VIDEO,
  };
};

export const loadVideoSuccess = () => {
  return {
    type: LOAD_VIDEO_SUCCESS,
    payload: true,
  };
};

export const loadVideoError = (error) => {
  return {
    type: LOAD_VIDEO_SUCCESS,
    payload: error,
  };
};
