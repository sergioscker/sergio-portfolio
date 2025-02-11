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
  title: 'My experience',

  description: `I have been delving into full stack development with an emphasis on JavaScript, 
  React.js, TypeScript, Node.js... always seeking continuous improvement.
  In the last few months, I have dedicated myself to developing several projects, 
  which are available in this Portfolio and GitHub, where I have been able to apply the knowledge I have acquired in practice. 
  One of my most significant projects is this personal portfolio, which I developed entirely in ReactJS. 
  This work not only demonstrates my ability to create modern and responsive interfaces, 
  but also reflects my commitment to user experience and code quality.`,

  items: [
    {
      company: 'Digital Products',
      position: 'Freelance Full Stack Development',
    },
  ],
};

//education data
const education = {
  title: 'My education',

  items: [
    {
      institution: 'Dev Club',
      degree: 'FullStack Developer',
    },
  ],
};

// skills data
const skills = {
  title: 'My skills',
  skillsList: [
    {
      icon: (
        <Image
          src="/assets/skills/html.svg"
          width={80}
          height={80}
          alt="html"
        />
      ),
      name: 'html 5',
    },
    ,
    {
      icon: (
        <Image src="/assets/skills/git.svg" width={80} height={80} alt="git" />
      ),
      name: 'git',
    },
    {
      icon: (
        <Image
          src="/assets/skills/javascript.svg"
          width={80}
          height={80}
          alt="javascript"
        />
      ),
      name: 'javascript',
    },
    {
      icon: (
        <Image
          src="/assets/skills/react.svg"
          width={80}
          height={80}
          alt="react"
        />
      ),
      name: 'react.js',
    },
    {
      icon: (
        <Image
          src="/assets/skills/styled.svg"
          width={80}
          height={80}
          alt="styled-components"
        />
      ),
      name: 'styled-components',
    },
    {
      icon: (
        <Image
          src="/assets/skills/figma.svg"
          width={80}
          height={80}
          alt="figma"
        />
      ),
      name: 'figma designer',
    },

    {
      icon: (
        <Image
          src="/assets/skills/node.svg"
          width={80}
          height={80}
          alt="node"
        />
      ),
      name: 'node.js',
    },
    {
      icon: (
        <Image
          src="/assets/skills/next.svg"
          width={80}
          height={80}
          alt="next"
        />
      ),
      name: 'next.js',
    },
    {
      icon: (
        <Image
          src="/assets/skills/tailwind.svg"
          width={80}
          height={80}
          alt="tailwind"
        />
      ),
      name: 'tailwind.css',
    },
    {
      icon: (
        <Image
          src="/assets/skills/typescript.svg"
          width={80}
          height={80}
          alt="typescript"
        />
      ),
      name: 'typescript',
    },
    {
      icon: (
        <Image src="/assets/skills/aws.svg" width={80} height={80} alt="aws" />
      ),
      name: 'Amazon Web Services',
    },
    {
      icon: (
        <Image
          src="/assets/skills/vercel.svg"
          width={80}
          height={80}
          alt="vercel"
        />
      ),
      name: 'vercel',
    },
  ],
};

console.log(skills);

// About data
const about = {
  title: 'About me',

  description: `Hello, my name is Sérgio Oliveira, and I am a frontend developer currently living in Portugal.
  I love doing different activities throughout the day and feeling like my time was well spent. I'm very proactive and enjoy keeping my tasks and studies organized. 
  I moved to Portugal to study programming and found the opportunity to align my motivations and dreams in this field.

  Over the past year, I have focused on learning JavaScript and gained experience with tools like React, Git, Figma, TypeScript, Node, and Styled-components. 
  To take on more complex projects, I kept improving my knowledge in modern and dynamic frameworks such as NextJS, Tailwind, Vite, Prisma, and more.
  I have a strong passion for learning and am very curious, as I believe knowledge is key to overcoming complex situations and solving challenges and problems. 
  I try to be communicative and dedicated, ensuring transparency and keeping up with tasks alongside my team. This helps me build trust and credibility,
  creating an environment where I can rely on my colleagues and provide support whenever needed.

  After completing over 10 projects and making nearly 200 commits, deploying on platforms like Vercel and AWS, I have built a solid foundation to look for a job. 
  I am eager to contribute and learn from experienced professionals, helping the team grow and develop large-scale digital solutions.
  
  Let's turn ideas into reality and create impactful solutions together!`,

  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Sérgio Oliveira',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+351) 939274154',
    },
    {
      fieldName: 'Email',
      fieldValue: 'sergiowallace11@hotmail.com',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Portugueses & Spanish',
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto mt-16">
        <Tabs
          defaultChecked="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[350px] mx-auto pt-5 xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full pt-3">
              <div className="flex flex-col gap-[30px] text-center">
                <h3 className="text-4xl font-bold">{experience.title}</h3>

                <p className="max-w-[700px] dark:text-white/60 mx-auto">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="flex items-center justify-center gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] min-h-[184px] max-w-[400px] px-10 rounded-xl 
                          flex flex-col items-center justify-center lg:items-start gap-5"
                        >
                          <div className="flex flex-row gap-2 items-start justify-between w-full">
                            <h3 className="text-xl text-white max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
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
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full pt-3 mt-5">
              <div className="flex flex-col gap-[30px] text-center">
                <h3 className="text-4xl font-bold">{education.title}</h3>

                <ScrollArea className="h-[400px]">
                  <ul className="flex items-center justify-center gap-[30px] mt-10">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] min-h-[184px] max-w-[400px] px-10 rounded-xl 
                          flex flex-col items-center justify-center lg:items-start gap-5"
                        >
                          <div className="flex flex-row items-start justify-between gap-5 w-full">
                            <h3 className="text-xl text-white max-w-[260px] min-h-[60px]">
                              {item.institution}
                            </h3>

                            <Image
                              src="/assets/resume/cap.svg"
                              quality={100}
                              width={16}
                              height={16}
                              alt="formation"
                            />
                          </div>

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-lg">
                              {item.degree}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="h-full w-full">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                {skills.skillsList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          {/* icons */}
                          <TooltipTrigger className="flex items-center justify-center w-full h-[150px] bg-[#232329] rounded-xl">
                            <div className="text-6xl transition-all duration-300">
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
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="h-full w-full">
              <div className="flex flex-col gap-[40px] text-center">
                <h3 className="text-4xl font-bold">{about.title}</h3>

                <p className="max-w-[100%] dark:text-white/60 mx-auto xl:text-center">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 xl:text-center gap-y-6 mb-3 max-w-[100%] mx-auto">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center px-2 xl:justify-start gap-5"
                      >
                        <p className="dark:text-white/60">{item.fieldName}</p>
                        <p className="text-md xl:text-lg">{item.fieldValue}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
