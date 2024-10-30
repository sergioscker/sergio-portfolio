'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ScrollArea } from '@/components/ui/scroll-area';
import { IconCloudDemo } from '@/components/Icon-cloud';

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
  description: '',
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

// About data
const about = {
  title: 'About me',

  description: `Hello, I'm Sérgio Oliveira, a FullStack Developer at the beginning of my career, 
  who traded the vibrant heat of Rio de Janeiro for the European winter in search of new opportunities. 
  I firmly believe that technology has the power to transform lives and businesses, and I'm open to being part of this change.
  My goal is to find an opportunity in the job market that allows me to apply what I've learned, while learning from experienced professionals and collaborating on the team's growth.
  If you are looking for a motivated professional with a thirst for knowledge and a true passion for technology, I would love the opportunity to talk about how I can add value to your team.
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
      <div className="container mx-auto">
        <Tabs
          defaultChecked="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>

                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0 ">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1"
                        >
                          <div className="flex flex-row gap-2  items-start justify-between w-full">
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
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
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center  xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1"
                        >
                          <div className="flex flex-row gap-2  items-start justify-between w-full">
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
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

                          <div className="flex items-center gap-3 ">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.degree}</p>
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
              <div className="flex justify-center">
                <IconCloudDemo />
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] overflow-x-hidden">
                <h3 className="text-4xl font-bold">{about.title}</h3>

                <p className="w-full text-white/60 mx-auto xl:max-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[750px] mx-3 xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center px-2 xl:justify-start gap-5"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-md xl:text-lg">
                          {item.fieldValue}
                        </span>
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
