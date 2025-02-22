'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// icons
import { SiStyledcomponents, SiSequelize, SiTailwindcss } from 'react-icons/si';
import {
  TbBrandTypescript,
  TbBrandPrisma,
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
  DiMongodb,
  DiPostgresql,
} from 'react-icons/di';
import { FaDocker } from 'react-icons/fa';

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
  title: 'Experience',
  description: `I have been delving into full stack development with an emphasis on JavaScript, ReactJS, NextJS, TypeScript, NodeJS... always seeking continuous improvement.

  In the last few months, I have dedicated myself to developing several projects, as well as technical challenges that are available in this Portfolio and on GitHub, where I have been able to apply the knowledge I have acquired in practice.

  One of my most significant projects is this personal portfolio, which I developed entirely in ReactJS and NextJS. This work not only demonstrates my ability to create modern and responsive interfaces, but also reflects my commitment to user experience and code quality.`,
};

// education data
const education = {
  title: 'Education',
  items: [
    { institution: 'Dev Club', degree: 'FullStack Developer' },
    { institution: 'Video Course', degree: 'JavaScript Developer' },
  ],
};

// skills data
const skills = {
  title: 'Technologies and Tools',
  skillsList: [
    { icon: <DiHtml5 size={50} />, name: 'HTML5' },
    { icon: <DiReact size={50} />, name: 'ReactJS' },
    { icon: <DiJavascript size={50} />, name: 'JavaScript' },
    { icon: <TbBrandVite size={50} />, name: 'Vite' },
    { icon: <TbBrandTypescript size={50} />, name: 'TypeScript' },
    { icon: <DiNodejs size={50} />, name: 'NodeJS' },
    { icon: <SiStyledcomponents size={50} />, name: 'Styled-components' },
    { icon: <SiTailwindcss size={50} />, name: 'TailwindCSS' },
    { icon: <TbBrandFigma size={50} />, name: 'Figma' },
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
  description: `I'm Sérgio Oliveira, I'm 27 years old, and I've been living in Portugal for about 2 years. Planning my move to Portugal required a lot of organization and contributed greatly to my perception of what I wanted to become professionally. I took my first steps in programming by studying logic and algorithms, based on several recommendations from colleagues in the field, with whom I've always kept in touch, seeking guidance on the big question: "Where do I start?"

  I started exploring the JavaScript programming language, which allowed me to learn technologies that go hand in hand, such as HTML5 and CSS3. I learned important styling libraries in addition to pure CSS, such as Styled-components. To expand my knowledge, I started studying the ReactJS library and all the power that this open source technology can bring. To make my creations increasingly modern and scalable, I began to dedicate myself to studying several other technologies, such as Tailwind, Bootstrap, NodeJS, NextJS (Server Components and Actions), SQL, and NoSQL.

  Currently, I develop freelance and personal projects always aiming to bring the most realistic scenario possible that made me learn to solve problems and overcome challenges. Using my network of people I have become friends with on this journey, I managed to find clients to become a professional in the field and start to create the desire to build a career that I hope will be successful and productive for me and the company I will be involved with.,`,
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' },
      }}
      className="container mx-auto p-4 md:p-8"
    >
      <div className="w-full">
        <Tabs defaultChecked="experience" className="flex flex-col lg:flex-row">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto lg:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full p-4 md:p-6">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl md:text-4xl font-bold text-center">
                  {experience.title}
                </h3>

                <p className="max-w-[700px] text-left mx-auto text-gray-600 dark:text-white/60">
                  {experience.description}
                </p>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <div className="flex flex-col items-center gap-6">
                <h3 className="text-2xl md:text-4xl font-bold p-3">
                  {education.title}
                </h3>

                <ScrollArea className="w-full">
                  <ul className="flex flex-wrap justify-center gap-6">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] text-white rounded-xl p-5 flex flex-col items-center justify-center gap-3 w-full max-w-[300px]"
                      >
                        <div className="flex gap-2 items-start justify-between w-full">
                          <h3 className="text-xl text-white max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.institution}
                          </h3>

                          <Image
                            src="/assets/resume/badge.svg"
                            alt="education-icon"
                            width={20}
                            height={20}
                          />
                        </div>

                        <div className="flex items-center gap-3 ">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.degree}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="h-full w-full">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[40px] p-5">
                {skills.skillsList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          {/* icons */}
                          <TooltipTrigger
                            className="text-accent flex items-center justify-center w-full rounded-md transition-all duration-300"
                            aria-label="icons"
                          >
                            {skill.icon}
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
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full p-4">
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl md:text-4xl font-bold text-center">
                  {about.title}
                </h3>

                <p className="text-left mx-auto max-w-[700px] text-gray-600 dark:text-white/60 whitespace-pre-line">
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
