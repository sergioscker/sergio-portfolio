import Link from 'next/link';
import { Button } from './ui/button';

//components
import Nav from './Nav';
import MobileNav from './MobileNav';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="py-8 xl:py-14 dark:text-white">
      <div className="container mx-auto flex justify-between items-center ">
        {/* logo */}
        <Link href="/">
          <Image
            src="/assets/main icon.png"
            alt="icon"
            priority
            quality={100}
            width={80}
            height={80}"
            draggable="false"
          />
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
