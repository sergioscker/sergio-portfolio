'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

// animations
import { motion } from 'framer-motion';

// slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// icons
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  SiStyledcomponents,
  SiSequelize,
  SiJest,
  SiTestinglibrary,
} from 'react-icons/si';

import {
  TbBrandTypescript,
  TbBrandPrisma,
  TbBrandTailwind,
  TbBrandNextjs,
  TbBrandVite,
  TbBrandFigma,
} from 'react-icons/tb';

import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiJavascript,
  DiNodejs,
  DiAws,
  DiDocker,
  DiMongodb,
  DiPostgresql,
  DiGit,
} from 'react-icons/di';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

//components
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  
  {
    id: '01',
    title: 'Tickets Management',

    description: `A complete Full Stack platform for managing internal tickets by administrators. The system allows you to create, edit and view tickets, with filters by text and status (pending, in progress, completed and rejected). It is also possible to manage user data, including name, password and department.
    The backend is built in Node.js with Sequelize and PostgreSQL, including JWT authentication, Yup validations and MVC structure. The frontend was developed with React + Vite, using TailwindCSS for the UI and full integration with the API.`,

    image: '/assets/work/ticket-management.png',

    live: 'https:/ticket-managment.vercel.app',

    github: 'https:/github.com/sergioscker/ticket-management',

    stack: [
      { icon: <DiReact size={60} />, name: 'reactJS' },
      { icon: <DiJavascript size={60} />, name: 'javascript' },
      { icon: <TbBrandTailwind size={60} />, name: 'tailwindcss' },
      { icon: <DiNodejs size={60} />, name: 'nodeJS' },
      { icon: <DiDocker size={60} />, name: 'docker' },
      { icon: <DiPostgresql size={60} />, name: 'postgres' },
      { icon: <SiSequelize size={60} />, name: 'ORM sequelize' },
      { icon: <DiGit size={60} />, name: 'git' },
    ],
  },
  {
    id: '03',
    title: 'Tech Solutions',

    description: `I developed a Landing Page for Virtual Headsets using ReactJS, 
    with styling done through the styled-components library.`,

    image: '/assets/work/tech solutions.png',

    live: 'https://tech-solutions-kappa.vercel.app',

    github: 'https://github.com/sergioliveira-developer/tech-solutions',

    stack: [
      { icon: <DiReact size={60} />, name: 'reactJS' },
      { icon: <TbBrandVite size={60} />, name: 'vite' },
      { icon: <DiJavascript size={60} />, name: 'javascript' },
      { icon: <DiHtml5 size={60} />, name: 'html5' },
      { icon: <SiStyledcomponents size={60} />, name: 'styled-components' },
      { icon: <TbBrandFigma size={60} />, name: 'figmadesigner' },
      { icon: <DiGit size={60} />, name: 'git' },
    ],
  },
  {
    id: '03',
    title: 'TodoList Pomodoro',

    description: `This is a web application that combines a To-Do List with the Pomodoro technique to boost productivity. It allows users to organize their tasks and manage their time using 25-minute work cycles interspersed with 5-minute breaks.`,

    image: '/assets/work/todo list.png',

    live: 'https:/todo-list-with-pomodoro.vercel.app',

    github: 'https:/github.com/sergioscker/todo-list-with-pomodoro',

    stack: [
      { icon: <DiReact size={60} />, name: 'reactJS' },
      { icon: <DiJavascript size={60} />, name: 'javascript' },
      { icon: <TbBrandTailwind size={60} />, name: 'tailwindcss' },
      { icon: <DiGit size={60} />, name: 'git' },
      { icon: <TbBrandVite size={60} />, name: 'vite' },
      { icon: <SiJest size={60} />, name: 'jest' },
      { icon: <SiTestinglibrary size={60} />, name: 'testing library' },
    ],
  },
  {
    id: '04',
    title: 'Burger Shop',

    description: `BurgerShop is a full-stack application that provides a complete online burger shop experience, 
      integrating a robust backend API with a fully responsive frontend interface. 
      This project was developed using modern technologies, focusing on practicality, 
      efficiency, and security, offering a comprehensive end-to-end solution.`,

    image: '/assets/work/burger shop.png',

    live: 'https:/burguershop-eight.vercel.app',

    github: 'https:/github.com/sergioscker/burguer-shop',

    stack: [
      { icon: <DiReact size={60} />, name: 'reactJS' },
      { icon: <DiJavascript size={60} />, name: 'javascript' },
      { icon: <SiStyledcomponents size={60} />, name: 'styled-components' },
      { icon: <DiNodejs size={60} />, name: 'nodeJS' },
      { icon: <DiDocker size={60} />, name: 'docker' },
      { icon: <DiPostgresql size={60} />, name: 'postgres' },
      { icon: <DiMongodb size={60} />, name: 'mongoDB' },
      { icon: <DiAws size={60} />, name: 'amazon web services' },
    ],
  },

  {
    id: '05',
    title: 'ToDo - List',

    description: `Todo List application built with NextJS, React, and TailwindCSS, 
    leveraging modern libraries to ensure a rich and fluid user experience. 
    The application is modular, accessible, and easy to customize.`,

    image: '/assets/work/todolist.png',

    live: 'https:/todo-list-tasks-two.vercel.app',

    github: 'https://github.com/sergioscker/todo-list',
    stack: [
      { icon: <DiReact size={60} />, name: 'reactJS' },
      { icon: <DiHtml5 size={60} />, name: 'html5' },
      { icon: <DiJavascript size={60} />, name: 'javascript' },
      { icon: <TbBrandNextjs size={60} />, name: 'nextJS' },
      { icon: <TbBrandTailwind size={60} />, name: 'tailwindCSS' },
      { icon: <TbBrandFigma size={60} />, name: 'figmadesigner' },
      { icon: <DiGit size={60} />, name: 'git' },
    ],
  },

  {
    id: '06',
    title: 'Finantial Control',

    description: `Financial Control is a full-stack application designed to manage and track personal finances. 
    It includes a backend API built with NodeJS and TypeScript and a responsive frontend interface using React and Vite.
     The project provides a seamless way to visualize, manage, and track financial data with dynamic charts and detailed forms.`,

    image: '/assets/work/dev-bills.png',

    live: 'https:/finantialcontrol.vercel.app',

    github: 'https://github.com/sergioscker/finantial-controls',

    stack: [
      { icon: <TbBrandTypescript size={60} />, name: 'typescript' },
      { icon: <DiJavascript size={60} />, name: 'javascript' },
      { icon: <SiStyledcomponents size={60} />, name: 'styled-components' },
      { icon: <DiMongodb size={60} />, name: 'mongoDB' },
      { icon: <DiNodejs size={60} />, name: 'nodeJS' },
      { icon: <DiGit size={60} />, name: 'git' },
    ],
  },

  {
    id: '07',
    title: 'Users Office',

    description: `This project, named Users-office 💻, is a React-based web application designed for a modern and interactive user experience. 
    It uses the latest tools and dependencies to optimize development and ensure high performance in production.`,

    image: '/assets/work/users-office.png',

    live: 'https:/users-office.vercel.app',

    github: 'https://github.com/sergioliveira-developer/Users-Office',

    stack: [
      { icon: <DiReact size={60} />, name: 'reactJS' },
      { icon: <DiJavascript size={60} />, name: 'javascript' },
      { icon: <SiStyledcomponents size={60} />, name: 'styled-components' },
      { icon: <DiNodejs size={60} />, name: 'nodeJS' },
      { icon: <DiMongodb size={60} />, name: 'mongodb' },
      { icon: <TbBrandPrisma size={60} />, name: 'prisma' },
      { icon: <DiGit size={60} />, name: 'git' },
    ],
  },

  {
    id: '09',
    title: 'Convert Money',

    description: `Currency converter made using HTML, CSS and JavaScript languages. 
    Conversion can be made from Brazilian Real to US Dollar, Euro, Pound or Bitcoins.`,

    image: '/assets/work/convert-money.png',

    live: 'https:/converter-coins.vercel.app',

    github: 'https://github.com/sergioliveira-developer/Convert-Money',

    stack: [
      { icon: <DiHtml5 size={60} />, name: 'html5' },
      { icon: <DiCss3 size={60} />, name: 'css3' },
      { icon: <DiJavascript size={60} />, name: 'javascript' },
      { icon: <DiGit size={60} />, name: 'git' },
    ],
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[30vh] flex flex-col justify-center xl:p-8"
    >
      <div className="container mx-auto pt-18 mt-10">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          {/* projects container */}
          <div
            className="w-full xl:w-[50%] flex
           flex-col justify-between order-2 xl:order-none xl:min-h-[460px]"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline id */}
              <div className="text-8xl leanding-none font-extrabold dark:text-transparent text-outline mb-2">
                {project.id}
              </div>

              {/* projects category */}
              <h2
                className="text-[42px] font-bold leading-none dark:text-white
               group-hover:text-accent-hover transition-all duration-500 capitalize"
              >
                {project.title}
              </h2>

              {/* projects description */}
              <p className="dark:text-white/60 leading-relaxed">
                {project.description}
              </p>

              {/* stacks */}
              <ul className="flex justify-center items-center gap-3 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[80px] h-[80px] p-8 rounded-md bg-white/5 flex justify-center items-center group">
                            <span className="dark:text-white text-4xl group-hover:text-accent-hover">
                              {item.icon}
                            </span>
                          </TooltipTrigger>

                          <TooltipContent>
                            <span>{item.name}</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border dark:border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4 mt-4">
                {/* live project button */}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full dark:bg-white/5 bg-accent flex justify-center items-center group">
                        <BsArrowUpRight className="dark:text-white text-3xl group-hover:text-accent-hover" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full dark:bg-white/5 bg-accent flex justify-center items-center group">
                        <BsGithub className="dark:text-white text-3xl group-hover:text-accent-hover" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* sliders container */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div
                      className="h-[460px] relative group flex justify-center
                    items-center bg-pink-50/20"
                    >
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* project image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          className="object-fill"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw"
                          alt="project-image"
                          fill
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
                 w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
