'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { useTheme } from 'next-themes';
import Image from 'next/image';

const Photo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className="xl:right-[20px] xl:top-[-2px] right-[10px] w-[260px] h-[260px]
           xl:w-[430px] xl:h-[430px] absolute"
        >
          {theme === 'dark' ? (
            <Image
              src="/assets/darkHome.webp"
              alt="darkHome"
              priority
              quality={100}
              fill
              className="object-contain"
              draggable="false"
            />
          ) : (
            <Image
              src="/assets/lightHome.webp"
              alt="lightHome"
              priority
              quality={100}
              fill
              className="object-contain h-auto w-auto"
              draggable="false"
            />
          )}
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="296"
            stroke="#0086b0"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
