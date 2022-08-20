export const START_HOVER = "START_HOVER";
export const STOP_HOVER = "STOP_HOVER";

export const startHover = () => {
  return {
    type: START_HOVER,
    payload: true,
  };
};

export const stopHover = () => {
  return {
    type: STOP_HOVER,
    payload: false,
  };
};
