'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Photo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full h-full relative ">
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
          className="xl:right-[20px] right-[10px] w-[260px] h-[260px] xl:w-[430px] xl:h-[430px] mix-blend-lighten absolute"
        >
          {theme === 'light' ? (
            <Image
              src="/assets/homeLight.png"
              alt="lighthome"
              priority
              quality={100}
              fill
              className="object-contain"
            />
          ) : (
            <Image
              src="/assets/homeDark.png"
              alt="darkhome"
              priority
              quality={100}
              fill
              className="object-contain"
              onChange={() => setTheme(theme)}
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
