'use client';

import { useState } from 'react';

// validations
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// animations
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// navigation
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

//components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

//icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

// api emailJS
import emailjs from '@emailjs/browser';

// contact options
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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleChange = (data) => {
    setFormData({ ...formData, [data.target.name]: data.target.value });
  };

  // validation form
  const schema = yup.object({
    firstName: yup.string('firstname is required field').required(),
    lastName: yup.string('lastname is required field').required(),
    email: yup.string().email('email is required field').required(),
    phoneNumber: yup.string('phone number is required field').required(),
    message: yup.string('message is required field').required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // submit form
  const onSubmitForm = async () => {
    setLoading(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const templateParams = {
      to_name: 'Sergio',
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone_number: formData.phoneNumber,
      message: formData.message,
    };

    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

    await toast.promise(
      emailjs.send(serviceID, templateID, templateParams),

      {
        pending: 'Sending your message...',
        success: {
          render() {
            setTimeout(() => {
              router.push('/');
            }, 2000);
            return 'Message sent successfully!';
          },
        },
        error: 'Message failed! Please try again.',
      },
    );

    // reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });

    setLoading(false);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
        }}
        className="px-5"
      >
        <div className="container mx-auto">
          <div className="flex flex-col p-5 mt-8 xl:flex-row justify-around">
            {/* form */}
            <div className="order-2 xl:order-none">
              <form
                className="flex flex-col gap-6 p-8  bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white/10 rounded-lg shadow-md"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                <h3 className="text-4xl text-accent">Let's work together</h3>

                {/* input container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name input */}
                  <div className="flex flex-col justify-center p-2">
                    <Input
                      type="text"
                      name="name"
                      {...register('firstName')}
                      className="text-white"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />

                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1 ml-4">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  {/* lastName input */}
                  <div className="flex flex-col justify-center p-2">
                    <Input
                      type="text"
                      name="lastName"
                      {...register('lastName')}
                      className="text-white"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />

                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1 ml-4">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>

                  {/* email input */}
                  <div className="flex flex-col justify-center p-2">
                    <Input
                      type="email"
                      name="email"
                      {...register('email')}
                      className="text-white"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 ml-4">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* phoneNumber input */}
                  <div className="flex flex-col justify-center p-2">
                    <Input
                      type="number"
                      name="phoneNumber"
                      {...register('phoneNumber')}
                      className="text-white"
                      placeholder="Phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />

                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1 ml-4">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* text area */}
                <div className="flex flex-col justify-center p-2">
                  <Textarea
                    name="message"
                    {...register('message')}
                    className="h-[150px] text-white"
                    placeholder="Type your message here."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 ml-4">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* submit button */}
                <Button
                  type="submit"
                  size="md"
                  className="max-w-40"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send message'}
                </Button>
              </form>
            </div>

            {/* information */}
            <div className="flex items-center justify-center order-1 xl:order-none mb-8 xl:mb-0 pt-5 overflow-x-hidden">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col xl:flex-row items-center gap-6"
                  >
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] 
                      bg-[#232329] text-accent rounded-md flex items-center justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="dark:text-white/60 text-center">
                        {item.title}
                      </p>

                      <h3 className="text-xl text-center">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* notifications */}
      <ToastContainer
        autoClose={2000}
        pauseOnHover
        theme="colored"
        position="top-right"
        draggable
      />
    </>
  );
};

export default Contact;
