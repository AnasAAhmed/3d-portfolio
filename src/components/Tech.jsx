import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <div className='hidden md:flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    <div className='flex flex-row flex-wrap justify-center gap-10 sm:hidden'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 p-2 rounded-full bg-white' key={technology.name}>
         <img src={technology.icon} alt="icon" /> 
        </div>
      ))}
    </div>
      </>
  );
};

export default SectionWrapper(Tech, "");
