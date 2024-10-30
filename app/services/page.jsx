'use client';
import { motion } from 'framer-motion';

import Image from 'next/image';

const Services = () => {
  return (
    <section className="pt-20 xl:pt-20 px-4 sm:px-8 xl:px-[200px]">
      <h2 className="font-primary font-bold text-[32px] xl:text-[75px] text-center mb-8">
        Workflow
      </h2>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-center space-x-0 w-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <div className="flex flex-col items-center w-full max-w-[350px] xl:max-w-[260px] lg:mt-0 mt-6 mb-6 lg:mb-8">
          <div
            className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px]
           border border-white border-opacity-10 rounded-lg shadow-md w-full h-[320px] 
           flex flex-col items-center justify-center text-center p-4"
          >
            <div
              className="bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] 
            backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg 
            shadow-md w-full h-[320px] flex flex-col items-center justify-center text-center p-4"
            >
              <Image
                src="/assets/work/briefing.svg"
                alt="briefing"
                quality={100}
                width={110}
                height={110}
              />
              <h3 className="mt-4 text-2xl font-bold text-gray-300">
                Briefing
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center xl:w-[160px] h-full xl:h-[320px]">
          <Image
            src="/assets/work/arrow.svg"
            alt="arrow"
            quality={100}
            width={28}
            height={28}
            className="object-contain w-full h-full xl:rotate-0 rotate-90"
          />
        </div>

        <div className="flex flex-col items-center w-full max-w-[350px] xl:max-w-[260px] lg:mt-0 mt-6 mb-6 lg:mb-8">
          <div
            className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] 
          border border-white border-opacity-10 rounded-lg shadow-md w-full h-[320px] flex flex-col 
          items-center justify-center text-center p-4"
          >
            <div
              className="bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] backdrop-blur-[4px] 
            border border-white border-opacity-10 rounded-lg shadow-md w-full h-[320px] flex flex-col 
            items-center justify-center text-center p-4"
            >
              <Image
                src="/assets/work/prototype.svg"
                alt="briefing"
                quality={100}
                width={110}
                height={110}
              />
              <h3 className="mt-4 text-2xl font-bold text-gray-300">
                Prototype
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:w-[160px] h-full lg:h-[320px]">
          <Image
            src="/assets/work/arrow.svg"
            alt="arrow"
            quality={100}
            width={32}
            height={32}
            className="object-contain w-full h-full lg:rotate-0 rotate-90"
          />
        </div>

        <div className="flex flex-col items-center w-full max-w-[350px] xl:max-w-[260px] lg:mt-0 mt-6 mb-6 lg:mb-8">
          <div
            className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px]
           border border-white border-opacity-10 rounded-lg shadow-md w-full h-[320px] flex flex-col
            items-center justify-center text-center p-4"
          >
            <div
              className="bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] backdrop-blur-[4px] 
            border border-white border-opacity-10 rounded-lg shadow-md w-full h-[320px] flex flex-col
             items-center justify-center text-center p-4"
            >
              <Image
                src="/assets/work/development.svg"
                alt="briefing"
                quality={100}
                width={110}
                height={110}
              />
              <h3 className="mt-4 text-2xl font-bold text-gray-300">
                Development
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:w-[160px] h-full lg:h-[320px]">
          <Image
            src="/assets/work/arrow.svg"
            alt="arrow"
            quality={100}
            width={32}
            height={32}
            className="object-contain w-full h-full lg:rotate-0 rotate-90"
          />
        </div>

        <div className="flex flex-col items-center w-full max-w-[350px] xl:max-w-[260px] lg:mt-0 mt-6 mb-6 lg:mb-8">
          <div
            className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px]
           border border-white border-opacity-10 rounded-lg shadow-md w-full h-[320px] flex flex-col 
           items-center justify-center text-center p-4"
          >
            <div
              className="bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] backdrop-blur-[4px]
             border border-white border-opacity-10 rounded-lg shadow-md w-full h-[320px] flex flex-col
              items-center justify-center text-center p-4"
            >
              <Image
                src="/assets/work/submit.svg"
                alt="briefing"
                quality={100}
                width={110}
                height={110}
              />
              <h3 className="mt-4 text-2xl font-bold text-gray-300">
                Submit/Support
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
