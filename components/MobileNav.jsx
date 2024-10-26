"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { CiMenuBurger } from "react-icons/ci";

import { VisuallyHidden } from "@reach/visually-hidden";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuBurger className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent>
        {/* Title hidden for accessibility */}
        <SheetTitle>
          <VisuallyHidden>Menu de navegação</VisuallyHidden>
        </SheetTitle>

        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl ">
          <Link href="/">
            <h1 className="text-4xl font-semibold ">
              Sergio<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent-hover transition-all`}
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