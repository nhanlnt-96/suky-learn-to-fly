import React from "react";
import { socialData } from "../../configs";

const Social = () => {
  return (
    <div className="flex justify-center items-center space-x-2.5 md:space-x-5">
      {socialData.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className="w-8 h-8 p-1 transition-all rounded-full hover:bg-pink"
        >
          <img
            src={item.icon}
            alt="social-logo"
            className="w-full h-full object-cover"
          />
        </a>
      ))}
    </div>
  );
};

export default Social;
