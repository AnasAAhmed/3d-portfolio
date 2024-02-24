import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const animations = {
    
    card: {
      initial: {
        // y: "+50%",
        opacity: 0,
      },
      whileInView: {
      //  y: 0,
        opacity: 1,
      },
      transition:{
        delay:0.25,
        duration: 0.6
      }
      
    },
  }
  return (
    <motion.div {...animations.card}>
      <div
        className='bg-tertiary p-5  rounded-2xl  sm:w-[360px] w-full'
      >
        <div className='relastive w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absoelute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={"https://cdn-icons-png.flaticon.com/512/1157/1157109.png"}
                alt='source code'
                className='w-1/2 h-1/2 rounded--full'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap '>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const animation = {
    h2: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition:{
        duration: 0.4
      }
      
    },
    p: {
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 1,
      },
      transition:{
        delay:0.2,
        duration: 0.5
      }
      
    },
  }
  return (
    <>
      <motion.div {...animation.h2}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p {...animation.p}
          
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center items-center gap-5 md:gap-3'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
