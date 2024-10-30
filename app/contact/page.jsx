'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

const info = [
  {
    icon: (
      <Link
        href="https://wa.link/up0k32"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPhoneAlt />
      </Link>
    ),
    title: 'Phone',
    description: '(+351) 939274154',
  },
  {
    icon: (
      <Link
        href="mailto:sergiowallace11@hotmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </Link>
    ),
    title: 'Email',
    description: 'sergiowallace11@hotmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'All places',
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col pt-10 mt-5 xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&#39;s work together</h3>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First name" />
                <Input type="lastname" placeholder="Last name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phonenumber" placeholder="Phone number" />
              </div>

              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />

              {/* button submit */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div
            className="flex-1 flex items-center justify-center xl:justify-end order-1 xl:order-none 
          mb-8 xl:mb-0 pt-5 overflow-x-hidden"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex flex-col xl:flex-row items-center gap-6"
                  >
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                     text-accent rounded-md flex items-center justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
