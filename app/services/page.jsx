'use client';
import { motion } from 'framer-motion';

import Image from 'next/image';

import React from 'react';

export default function Services() {
  return (
    <section className="container px-5 py-5">
      <h2 className="font-semibold text-white/90 text-5xl text-center mb-10 p-5">
        WorkFlow
      </h2>

      <motion.div
        className="flex flex-col xl:flex-row flex-wrap items-center justify-center space-y-6 w-full p-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        {/* breafing */}
        <div className="flex items-center justify-center bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white/10 rounded-lg shadow-md p-5 w-[230px] h-[250px] mt-6">
          <div
            className="flex flex-col justify-center gap-3 items-center bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] 
            backdrop-blur-[4px] border border-white/10 rounded-lg p-6 w-[200px] h-[200px]"
          >
            <Image
              src="/assets/work/briefing.svg"
              alt="briefing-logo"
              width={70}
              height={70}
              quality={100}
            />

            <p>Briefing</p>
          </div>
        </div>

        <Image
          src="/assets/work/arrow.svg"
          alt="arrow-icon"
          width={100}
          height={100}
          quality={100}
          className="rotate-90 xl:rotate-0 w-auto h-auto"
        />

        {/* prototype */}
        <div className="flex items-center justify-center bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white/10 rounded-lg shadow-md p-5 w-[230px] h-[250px]">
          <div
            className="flex flex-col justify-center gap-3 items-center bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] 
            backdrop-blur-[4px] border border-white/10 rounded-lg p-6 w-[200px] h-[200px]"
          >
            <Image
              src="/assets/work/prototype.svg"
              alt="prototype-logo"
              width={70}
              height={70}
              quality={100}
            />

            <p>Prototype</p>
          </div>
        </div>

        <Image
          src="/assets/work/arrow.svg"
          alt="arrow-icon"
          width={100}
          height={100}
          quality={100}
          className="rotate-90 xl:rotate-0 w-auto h-auto"
        />

        {/* development */}
        <div className="flex items-center justify-center bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white/10 rounded-lg shadow-md p-5 w-[230px] h-[250px]">
          <div
            className="flex flex-col justify-center gap-3 items-center bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] 
            backdrop-blur-[4px] border border-white/10 rounded-lg p-6 w-[200px] h-[200px] "
          >
            <Image
              src="/assets/work/development.svg"
              alt="development-logo"
              width={70}
              height={70}
              quality={100}
            />

            <p>Development</p>
          </div>
        </div>

        <Image
          src="/assets/work/arrow.svg"
          alt="arrow-icon"
          width={100}
          height={100}
          quality={100}
          className="rotate-90 xl:rotate-0 w-auto h-auto"
        />

        {/* submit */}
        <div className="flex items-center justify-center bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white/10 rounded-lg shadow-md p-5 w-[230px] h-[250px]">
          <div
            className="flex flex-col justify-center gap-3 items-center bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] 
            backdrop-blur-[4px] border border-white/10 rounded-lg p-6 w-[200px] h-[200px]"
          >
            <Image
              src="/assets/work/submit.svg"
              alt="submit-logo"
              width={70}
              height={70}
              quality={100}
            />

            <p>Submit/Support</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
