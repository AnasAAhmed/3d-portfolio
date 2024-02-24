import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  github
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "4+ Experience",
    icon: backend,
  },
  {
    title: "Reactjs, Nextjs ",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
]; 

const experiences = [
  {
    tag: "Education",
    date: "07/10/2021",
    title: "Completed Matric",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GKHdB4tRK5wmnSpuwGOxdDt_9_Nl1prx3A&usqp=CAU"

  },
  {
    tag: "Education",
    date: "15/10/2023",
    title: "Completed my Intermidiate in ICOM",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GKHdB4tRK5wmnSpuwGOxdDt_9_Nl1prx3A&usqp=CAU"

  },
  {
    tag: "Web Dev",
    date: "15/9/2023",
    title: "Started Front-end",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66t95IlG1H99oLVRsEEBEPYIPIi0Thdj27A&usqp=CAU"
  },
  {
    tag: "Web Dev",
    date: "17/10/2023",
    title: "Shared my projects on Github",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66t95IlG1H99oLVRsEEBEPYIPIi0Thdj27A&usqp=CAU"
  },
  {
    tag: "Web Dev",
    date: "20/10/2023",
    title: "Started Back-end",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66t95IlG1H99oLVRsEEBEPYIPIi0Thdj27A&usqp=CAU"
  }
];



const projects = [
  {
    name: "Xcrypto-info",
    description:
      "This is a code repository for the corresponding project Using React,Rest Api.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "chakra ui",
        color: "pink-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/AnasAAhmed/Myportfolio/main/public/images/crypto.jpeg",
    source_code_link: "https://crypto-info-zeta.vercel.app/",
  },
  {

    name: "iNoteBook",
    description:
      "This is a code repository for the corresponding project Using React, Node.js, Express & MongoDB..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/AnasAAhmed/Myportfolio/main/public/images/inotebook.jpeg",
    source_code_link: "https://inotebook-gh6p.vercel.app",
  },
  {
    name: "Evently",
    description:
      "This is a code repository for the corresponding project Using React,Nextjs, Node.js, Express & MongoDB.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Uploadthing",
        color: "pink-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "Clerk",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Shadcn",
        color: "blue-text-gradient",
      },

    ],
    image: "https://raw.githubusercontent.com/AnasAAhmed/Myportfolio/main/public/images/event.jpeg",
    source_code_link: "https://event-mern-platform.vercel.app/",
  },
  {
    name: "Sharetopia",
    description:
      "This is a code repository for the corresponding project Using React,Nextjs, Node.js, Express & MongoDB.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/AnasAAhmed/Myportfolio/main/public/images/share.jpeg",
    source_code_link: "https://sharetopia-four.vercel.app/",
  },
  {
    name: "Pic-share",
    description:
      "This is a code repository for the corresponding project Using React, Sanity.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/AnasAAhmed/lol2.textutility/main/Screenshot%20(1).png",
    source_code_link: "https://pic-share-anas.netlify.app",
  },
  {
    name: "Imagerator",
    description:
      "This is a code repository for the corresponding project Using React, mongodb,cloudinary,OpenAi-Api.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAi-Api",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/AnasAAhmed/lol2.textutility/main/Screenshot%20(2).png",
    source_code_link: "https://imagerator-23js.vercelapp",
  },
];

export { services, technologies, experiences,  projects };
