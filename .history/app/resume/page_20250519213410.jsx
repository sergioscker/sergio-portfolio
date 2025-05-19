'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
  description: `I’ve been diving deep into Full Stack development with a strong focus on JavaScript, ReactJS, NextJS, TypeScript, and NodeJS — always aiming to write clean, scalable code and improve continuously.

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
      degree: `Bachelor’s Degree in Computer Engineering`,
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
    {
      icon: (
        <Image
          src="/assets/skills/react.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'ReactJS',
    },
    {
      icon: (
        <Image
          src="/assets/skills/javascript.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'JavaScript',
    },
    {
      icon: (
        <Image
          src="/assets/skills/nodejs.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'NodeJS',
    },
    {
      icon: (
        <Image
          src="/assets/skills/tailwindcss.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'TailwindCSS',
    },
    {
      icon: (
        <Image
          src="/assets/skills/sequelize.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'SequelizeORM',
    },
    {
      icon: (
        <Image
          src="/assets/skills/prisma.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'PrismaORM',
    },
    {
      icon: (
        <Image src="/assets/skills/git.svg" alt="icon" width={50} height={50} />
      ),
      name: 'Git',
    },
    {
      icon: (
        <Image
          src="/assets/skills/github.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'GitHub',
    },
    {
      icon: (
        <Image
          src="/assets/skills/docker.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'Docker',
    },
    {
      icon: (
        <Image
          src="/assets/skills/postgresql.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'PostgresSQL',
    },
    {
      icon: (
        <Image
          src="/assets/skills/mongodb.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'MongoDB',
    },
    {
      icon: (
        <Image
          src="/assets/skills/wordpress.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'Wordpress',
    },
    {
      icon: (
        <Image
          src="/assets/skills/html5.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'HTML5',
    },
    {
      icon: (
        <Image src="/assets/skills/css.svg" alt="icon" width={50} height={50} />
      ),
      name: 'CSS3',
    },
    {
      icon: (
        <Image
          src="/assets/skills/vitejs.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'ViteJS',
    },
    {
      icon: (
        <Image
          src="/assets/skills/typescript.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'TypeScriptJS',
    },
    {
      icon: (
        <Image
          src="/assets/skills/nextjs.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'NextJS',
    },
    {
      icon: (
        <Image
          src="/assets/skills/jest.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'Jest',
    },
    {
      icon: (
        <Image
          src="/assets/skills/figma.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'Figma',
    },
    {
      icon: (
        <Image
          src="/assets/skills/testinglibrary.svg"
          alt="icon"
          width={50}
          height={50}
        />
      ),
      name: 'Test Library',
    },
  ],
};

// about data
const about = {
  title: 'About me',
  description: `
  I’m Sérgio Oliveira, a Full-Stack Developer focused on creating modern, scalable and responsive web applications. I have solid experience with HTML, CSS, JavaScript and frameworks such as ReactJS and NextJS, as well as using tools such as Tailwind CSS, NodeJS and SQL and NoSQL databases.   

  I’m currently studying Computer Engineering, which is helping me understand software architecture, best practices and systems engineering. My focus is on creating high-performance interfaces with good user experience and clean code, always thinking about scalability and maintenance.  

  I’m looking for opportunities in collaborative environments where I can apply my knowledge, grow professionally, and contribute to high-quality technical and visual results.
  `,
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
            <TabsContent value="experience" className="w-full px-4">
              <div className="flex flex-col gap-6 text-center">
                <h3 className="text-4xl font-bold">{experience.title}</h3>

                <p className="max-w-[600px] xl:text-left text-center mx-auto text-gray-600 dark:text-white/60 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full px-4">
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
                        className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white/10 h-[190px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
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
                          <h3 className="text-white xl:text-xl text-lg text-center max-w-[340px] min-h-[70px]">
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
            <TabsContent value="skills" className="w-full px-4">
              <div className="flex flex-col items-center justify-center gap-[30px]">
                <h3 className="text-4xl font-bold text-center xl:text-left">
                  {skills.title}
                </h3>

                <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            {/* icons */}
                            <TooltipTrigger className="flex justify-center items-center w-[150px] h-[150px]  bg-gradient-to-b from-[#8c8c8c25] backdrop-blur-[4px] border border-white/10 rounded-xl group text-accent">
                              <div
                                className="light:flex flex-col items-center justify-center text-6xl text-center group-hover:text-accent-hover transition-all duration-300"
                                aria-label="icons"
                              >
                                {skill.icon}

                                <p className="mt-3 text-sm text-center text-white/80">
                                  {skill.name}
                                </p>
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
            <TabsContent value="about" className="w-full px-4">
              <div className="flex flex-col gap-6">
                <h3 className="text-4xl md:text-4xl font-bold text-center">
                  {about.title}
                </h3>

                <p
                  className="xl:text-left text-center mx-auto max-w-[700px] text-gray-600
                 dark:text-white/60 whitespace-pre-line leading-relaxed"
                >
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
