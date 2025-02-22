'use client';

import { Button } from '@/components/ui/button';

import { FiDownload } from 'react-icons/fi';

//components
import Socials from '@/components/Social';
import Photo from '@/components/Photo';
import Link from 'next/link';

const HomePage = () => {
  return (
    <section className="h-full pt-20 mt-10">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-around xl:pt-6 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Software Developer | Frontend Developer
            </span>

            <h1 className="h1 mb-6 mt-6">
              Hello I&apos;m <br />
              <span className="text-accent">Sérgio Oliveira</span>
            </h1>

            <p className="max-w-[500px] mb-9 dark:text-white/70">
              I develop digital experiences with a focus on elegance and
              functionality,this portfolio of projects that reflect my skills in
              different technologies and tools.
            </p>

            {/* btn and sociais */}
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Link
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-3"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                  items-center text-accent text-base hover:bg-accent hover:text-primary 
                  hover:transition-all durantion-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="flex items-center justify-center order-1 mb-10 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
