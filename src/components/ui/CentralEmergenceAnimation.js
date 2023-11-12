import { useState } from 'react';

const CentralEmergenceAnimation = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a href={props.href}>
      <span
        className={`relative inline-block cursor-pointer text-${props.color}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.text}
        <span
          className={`absolute inset-x-0 -bottom-2 border-[0.5px] border-dashed border-primary-400 transition-all ease-out duration-300 transform origin-center ${
            isHovered ? 'scale-x-100' : 'scale-x-0'
          }`}
        ></span>
      </span>
    </a>
  );
};

export default CentralEmergenceAnimation;
