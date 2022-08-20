import "./Button.scss";
import React from "react";
import { useDispatch } from "react-redux";
import {
  startHover,
  stopHover,
} from "../../redux/animateHover/animateHoverActions";

const Button = ({ label, action, disabled = false, className = "" }) => {
  const dispatch = useDispatch();

  return (
    <button
      onMouseMove={() => dispatch(startHover())}
      onMouseLeave={() => dispatch(stopHover())}
      disabled={disabled}
      className={`w-full py-1.5 px-3 text-base font-bold md:text-lg border-0 text-white outline-none relative border-4 border-white button-comp ${className}`}
      onClick={(e) => action(e)}
    >
      {label}
    </button>
  );
};

export default Button;
