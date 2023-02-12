import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  activeItem: string;
  menuItems: Array<MenuItem>;
}

interface MenuItemProps {
  title: string;
  url: string;
  backgroundImage: string;
  activeItem: string;
}

export type MenuItem = {
  title: string;
  url: string;
  backgroundImage: string;
};

const Logo = () => {
  return (
    <Image
      src='assets/images/logo/logo-round.svg'
      className='absolute h-16 top-3 drop-shadow-black'
      alt='43. výsadkový pluk'
      width={100}
      height={100}
    />
  );
};

const MenuItem = ({
  title,
  url,
  backgroundImage,
  activeItem,
}: MenuItemProps) => {
  return (
    <>
      <Link
        href={url}
        className={`hover:text-white transition duration-100 py-0 lg:py-5 ${
          url === activeItem
            ? "text-white underline decoration-white"
            : "text-gray-300 hover:underline"
        } hidden lg:inline -underline-5`}
      >
        {title}
      </Link>

      <Link
        href={url}
        className='flex text-center text-white bg-center bg-cover border border-black rounded drop-shadow-lg lg:hidden aspect-video text-shadow-sm'
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className='flex items-end justify-center w-full h-full p-2 bg-gradient-to-t from-black via-transparent'>
          <span>{title}</span>
        </div>
      </Link>
    </>
  );
};

const Header = ({ activeItem, menuItems }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='fixed bg-repeat-x top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur text-[13px] bg-gradient-to-r from-black/70 to-primary/70 box-shadow-d-lg'>
      <div className='container flex flex-wrap items-center justify-between p-3 mx-auto lg:p-0'>
        <Link className='z-50' href='/'>
          <Logo />
        </Link>

        <button
          className='relative inline-block w-10 h-10 text-white lg:hidden'
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          <div className='absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>

        <nav
          className={`flex-col items-end w-full px-2 mt-2 font-semibold uppercase lg:flex lg:flex-row lg:items-center lg:space-x-5 xl:space-x-10 lg:w-auto lg:mt-0 ${
            mobileMenuOpen ? "grid grid-cols-2 md:grid-cols-3 gap-5" : "hidden"
          }`}
        >
          {menuItems.map((item: MenuItem, index: number) => {
            return (
              <MenuItem
                key={index}
                title={item.title}
                url={item.url}
                backgroundImage={item.backgroundImage}
                activeItem={activeItem}
              />
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Header;
