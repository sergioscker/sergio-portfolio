'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// icons
import { SiStyledcomponents, SiSequelize, SiTailwindcss } from 'react-icons/si';
import { DiAws, DiMongodb, DiPostgresql } from 'react-icons/di';

import {
  TbBrandTypescript,
  TbBrandPrisma,
  TbBrandNextjs,
  TbBrandVite,
} from 'react-icons/tb';

import {
  FaHtml5,
  FaCss3,
  FaGit,
  FaReact,
  FaNodeJs,
  FaJs,
  FaFigma,
  FaDocker,
} from 'react-icons/fa';

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ScrollArea } from '@/components/ui/scroll-area';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Experience',
  description: `I have been delving into full stack development with an emphasis on JavaScript, ReactJS, NextJS, TypeScript, NodeJS... always seeking continuous improvement.

  In the last few months, I have dedicated myself to developing several projects, as well as technical challenges that are available in this Portfolio and on GitHub, where I have been able to apply the knowledge I have acquired in practice.

  One of my most significant projects is this personal portfolio, which I developed entirely in ReactJS and NextJS. This work not only demonstrates my ability to create modern and responsive interfaces, but also reflects my commitment to user experience and code quality.`,
};

// education data
const education = {
  title: 'Education',

  description:
    'Always seeking continuous improvement in software development and creation of digital products, graduating and developing practical projects. Focusing on modern technologies and agile methodologies to deliver efficient and innovative solutions.',

  items: [
    {
      company: 'Universidade Veiga de Almeida',
      degree: `Bachelor’s Degree in
      Systems Analysis and Development`,
      duration: 'In Progress',
    },
    {
      company: 'Dev Club Pro',
      degree: 'Certified FullStack Developer',
      duration: '2023 - 2024',
    },
    {
      company: 'Video Course',
      degree: 'Certified JavaScript Developer ',
      duration: '2024',
    },
  ],
};

// skills data
const skills = {
  title: 'Technologies and Tools',
  skillsList: [
    { icon: <FaHtml5 size={50} />, name: 'HTML5' },
    { icon: <FaReact size={50} />, name: 'ReactJS' },
    { icon: <FaJs size={50} />, name: 'JavaScript' },
    { icon: <FaCss3 size={50} />, name: 'Css3' },
    { icon: <FaGit size={50} />, name: 'Git' },
    { icon: <TbBrandVite size={50} />, name: 'Vite' },
    { icon: <TbBrandTypescript size={50} />, name: 'TypeScript' },
    { icon: <FaNodeJs size={50} />, name: 'NodeJS' },
    { icon: <FaFigma size={50} />, name: 'Figma' },
    { icon: <SiStyledcomponents size={50} />, name: 'Styled-components' },
    { icon: <SiTailwindcss size={50} />, name: 'TailwindCSS' },
    { icon: <FaDocker size={50} />, name: 'Docker' },
    { icon: <DiPostgresql size={50} />, name: 'PostgreSQL' },
    { icon: <DiMongodb size={50} />, name: 'MongoDB' },
    { icon: <TbBrandNextjs size={50} />, name: 'NextJS' },
    { icon: <TbBrandPrisma size={50} />, name: 'PrismaORM' },
    { icon: <SiSequelize size={50} />, name: 'SequelizeORM' },
    { icon: <DiAws size={50} />, name: 'AWS' },
  ],
};

// about data
const about = {
  title: 'About me',
  description: `I’m m Sérgio Oliveira, a Full Stack Developer with focus on building modern, responsive webapplications. 
  I'm currently studying Systems Analysis and Development, where I m learninghow to design scalable systems, work with databases, and improve software architecture.

  My journey in tech started with logic and algorithms, and since then I ve grown by building
  applications that solve real problems. In my portfolio, you ll find projects developed with
  ReactJS, NextJS, NodeJS, Tailwind CSS, SQL, and NoSQL always with attention to
  clean code, usability, and performance. I also have solid experience with HTML, CSS, and
  Styled-components, creating interfaces that are both functional and visually appealing.

  I'm always looking to improve. Every project I build is a new opportunity to learn
  something, face new challenges, and go a step further. I enjoy working in teams, sharing
  knowledge, and turning ideas into real solutions that make a difference.

  Now, I m looking for an opportunity to join a team where I can grow, contribute with my
  skills, and keep building great things.`,
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-15 xl:py-5"
    >
      <div className="container mx-auto xl:mx-0">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center">
                <h3 className="text-4xl font-bold">{experience.title}</h3>

                <p className="max-w-[600px] xl:text-left text-center mx-auto text-gray-600 dark:text-white/60">
                  {experience.description}
                </p>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col items-center gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>

                <p className="font-medium dark:text-white/60 max-w-[600px]">
                  {education.description}
                </p>

                <ScrollArea className="h-[420px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[190px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent flex justify-between w-full items-center font-medium mb-2">
                          {item.duration}

                          <Image
                            src="/assets/resume/cap.svg"
                            alt="education-icon"
                            width={25}
                            height={25}
                          />
                        </span>

                        <div className="flex flex-col items-center gap-3">
                          {/* dot */}
                          <h3 className="text-white xl:text-xl text-lg text-center lg:text-left max-w-[340px] min-h-[70px]">
                            {item.degree}
                          </h3>

                          <p className="xl:text-lg text-sm text-white/60 flex gap-4 items-center justify-center">
                            <span className="w-[8px] h-[8px] rounded-full bg-accent" />

                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col items-center justify-center gap-[30px]">
                <h3 className="text-4xl font-bold text-center xl:text-left">
                  {skills.title}
                </h3>

                <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            {/* icons */}
                            <TooltipTrigger className="flex justify-center items-center w-[150px] h-[150px] bg-[#232329] rounded-xl group text-accent">
                              <div
                                className="text-6xl group-hover:text-accent-hover transition-all duration-300"
                                aria-label="icons"
                              >
                                {skill.icon}
                              </div>
                            </TooltipTrigger>

                            {/* name */}
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full p-4">
              <div className="flex flex-col gap-6">
                <h3 className="text-4xl md:text-4xl font-bold text-center">
                  {about.title}
                </h3>

                <p className="xl:text-left text-center mx-auto max-w-[700px] text-gray-600 dark:text-white/60 whitespace-pre-line">
                  {about.description}
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
