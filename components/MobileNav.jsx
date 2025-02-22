'use client';

import { useState } from 'react';

import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { usePathname } from 'next/navigation';

import { CiMenuBurger } from 'react-icons/ci';

import { VisuallyHidden } from '@reach/visually-hidden';
import Image from 'next/image';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiMenuBurger className="text-[32px] dark:text-accent" />
      </SheetTrigger>

      <SheetContent aria-describedby="dialog-title">
        {/* Title hidden for accessibility */}
        <SheetTitle id="dialog-title">
          <VisuallyHidden>Navigation menu</VisuallyHidden>
        </SheetTitle>

        {/* logo */}
        <div className="flex items-center justify-center mt-28 pb-5">
          <Link href="/">
            <Image
              src="/assets/favicon.svg"
              alt="icon"
              priority
              quality={100}
              width={80}
              height={80}
              className="object-contain"
              draggable="false"
            />
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-6 mt-10">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={() => setIsOpen(false)}
                className={`${
                  link.path === pathname &&
                  'text-accent border-b-2 border-accent'
                } text-xl text-white capitalize hover:text-accent-hover transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
