'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    id: '01',
    title: 'Burger Shop',
    category: 'FullStack',
    description: '',
    image: '/assets/work/burger-shop.png',
    live: 'https://burguershop-eight.vercel.app',
    github: 'https://github.com/sergioliveira-developer/DevBurger',
  },

  {
    id: '02',
    title: 'Tech Solutions',
    category: 'FrontEnd UI',
    description: '',
    image: '/assets/work/tech-solutions.png',
    live: 'https://tech-solutions-kappa.vercel.app',
    github: 'https://github.com/sergioliveira-developer/tech-solutions',
  },

  {
    id: '03',
    title: 'Portfolio',
    category: 'FrontEnd UI',
    description: '',
    image: '/assets/work/portfolio.png',
    live: 'https://sergio-oliveira-portfolio.vercel.app',
    github: 'https://github.com/sergioscker/sergio-oliveira-portfolio',
  },

  {
    id: '04',
    title: 'Finantial Control',
    category: 'FullStack - TypeScript',
    description: '',
    image: '/assets/work/dev-bills.png',
    live: 'https://finantialcontrol.vercel.app',
    github: 'https://github.com/sergioscker/finantial-controls',
  },

  {
    id: '05',
    title: 'Users Office',
    category: 'FullStack- API Prisma',
    description: '',
    image: '/assets/work/users-office.png',
    live: 'https://users-office.vercel.app',
    github: 'https://github.com/sergioliveira-developer/Users-Office',
  },

  {
    id: '06',
    title: 'Mario Builter',
    category: 'JS Vanilla',
    description: '',
    image: '/assets/work/mario-bross.png',
    live: 'https://mariobross-three.vercel.app',
    github: 'https://github.com/sergioliveira-developer/Mario-Bross',
  },

  {
    id: '07',
    title: 'Convert Money',
    category: 'JS Vanilla',
    description: '',
    image: '/assets/work/convert-money.png',
    live: 'https://converter-coins.vercel.app',
    github: 'https://github.com/sergioliveira-developer/Convert-Money',
  },

  {
    id: '08',
    title: 'Game JO-KEN-PÔ',
    category: 'JS Vanilla',
    description: '',
    image: '/assets/work/jo-ken-po.png',
    live: 'https://project-jo-ken-po.vercel.app',
    github: 'https://github.com/sergioliveira-developer/Game-Jokenpo',
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
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:p-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          {/* projects container */}
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex
           flex-col xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline id */}
              <div className="text-8xl leanding-none font-extrabold text-transparent text-outline">
                {project.id}
              </div>

              {/* projects category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* projects description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              {/* <ul className="flex  gap-4 ">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent ">
                      {item.stack}
                    </li>
                  );
                })}
              </ul> */}

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-hover" />
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
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent-hover" />
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

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-fill "
                          quality={100}
                          alt="project-image"
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
