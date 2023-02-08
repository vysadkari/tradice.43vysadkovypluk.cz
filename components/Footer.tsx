import Link from "next/link";
import { ReactNode } from "react";
import { IconProps } from "./Icons";

export type Link = {
  title: string;
  url: string;
};

export type Social = {
  url: string;
  icon: ({ className }: IconProps) => JSX.Element;
};

interface FooterProps {
  children: ReactNode;
}

interface BottomProps {
  socialLinks: Array<Social>;
}

interface AboutUsProps {
  links: Array<Link>;
  title?: string;
}

interface ExternalLinksProps {
  links: Array<Link>;
  title?: string;
}

const ExternalLink = ({ title, url }: Link) => {
  return (
    <li className='py-2'>
      <a
        href={url}
        className='flex items-center justify-between hover:underline'
        target='_blank'
        rel='noreferrer'
      >
        <span>{title}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-4 h-4 text-gray-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
          ></path>
        </svg>
      </a>
    </li>
  );
};

const Footer = ({ children }: FooterProps) => {
  return (
    <footer className='container mx-auto text-sm text-white bg-black bg-opacity-80'>
      {children}
    </footer>
  );
};

export const AboutUs = ({ links, title = "O nás" }: AboutUsProps) => {
  return (
    <div>
      <div className='border-b border-dotted border-primary-dark'>
        <h4 className='relative inline-block pb-3 uppercase border-b border-primary top-px'>
          {title}
        </h4>
      </div>

      <ul className='divide-y divide-stone-800 divide-dotted'>
        {links.map((link: Link, index: number) => {
          return (
            <li className='py-2' key={index}>
              <Link
                href={link.url}
                className='flex items-center justify-between hover:underline'
                target='_blank'
                rel='noreferrer'
              >
                <span>{link.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const ExternalLinks = ({
  links,
  title = "Odkazy",
}: ExternalLinksProps) => {
  return (
    <div>
      <div className='border-b border-dotted border-primary-dark'>
        <h4 className='relative inline-block pb-3 uppercase border-b border-primary top-px'>
          {title}
        </h4>
      </div>

      <ul className='divide-y divide-dotted divide-stone-800'>
        {links.map((link: Link, index: number) => {
          return <ExternalLink title={link.title} url={link.url} key={index} />;
        })}
      </ul>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className='order-first lg:order-last sm:col-span-2 lg:col-span-1'>
      <div className='border-b border-dotted border-primary-dark'>
        <h4 className='relative inline-block pb-3 uppercase border-b border-primary top-px'>
          Kontakt
        </h4>
      </div>

      <div className='flex items-center py-2 group'>
        <a
          href='https://mapy.cz/s/bamumocava'
          target='_blank'
          rel='noreferrer'
          className='flex items-center hover:underline'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 mr-2 bg-primary-dark group-hover:bg-primary transition duration-200 p-1.5 rounded'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
            ></path>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
            ></path>
          </svg>
          <address className='not-italic'>
            Obce Ležáků 14
            <br />
            573 01 Chrudim
          </address>
        </a>
      </div>

      <div className='flex items-center py-2 group'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 mr-2 bg-primary-dark group-hover:bg-primary transition duration-200 p-1.5 rounded'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
          ></path>
        </svg>
        <address className='not-italic'>
          <a className='hover:underline' href='tel:+420973248239'>
            973 248 239
          </a>{" "}
          <span className='text-gray-500'>(personální oddělení)</span>
          <br />
          <a className='hover:underline' href='tel:+420776115033'>
            776 115 033
          </a>{" "}
          <span className='text-gray-500'>(tiskový mluvčí)</span>
        </address>
      </div>

      <div className='flex items-center py-2 group'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 mr-2 bg-primary-dark group-hover:bg-primary transition duration-200 p-1.5 rounded'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          ></path>
        </svg>
        <address className='not-italic'>
          <a href='mailto:info@43vysadkovypluk.cz' className='hover:underline'>
            info@43vysadkovypluk.cz
          </a>
          <br />
          <a href='mailto:az@43vysadkovypluk.cz' className='hover:underline'>
            az@43vysadkovypluk.cz
          </a>
        </address>
      </div>
    </div>
  );
};

export const Bottom = ({ socialLinks }: BottomProps) => {
  return (
    <div className='flex flex-col items-center justify-between p-5 space-y-5 lg:space-y-0 bg-gradient-to-r from-stone-800 to-stone-900 lg:flex-row'>
      <div>
        <span>43. výsadkový pluk</span>
        <span className='mx-2'>|</span>
        <span className='text-stone-500'>vytvořeno výsadkáři</span>
      </div>
      <div className='flex space-x-3 text-stone-500'>
        {socialLinks.map((social: Social, index: number) => {
          const Icon = social.icon;

          return (
            <a key={index} href={social.url} target='_blank' rel='noreferrer'>
              <Icon className='w-5 h-5 transition-colors duration-150 hover:text-white' />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
