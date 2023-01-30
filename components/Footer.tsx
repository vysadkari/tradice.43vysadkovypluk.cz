import Link from "next/link";

type Link = {
  title: string;
  url: string;
};

const externalLinks: Array<Link> = [
  {
    title: "43. výsadkový pluk",
    url: "https://43vysadkovypluk.cz/",
  },
  {
    title: "Aktivní záloha",
    url: "https://az.43vysadkovypluk.cz/",
  },
  {
    title: "Tradice výsadkářů",
    url: "https://tradice.43vysadkovypluk.cz/",
  },
  {
    title: "Memoriál parašutistů",
    url: "http://www.memorialparasutistu.cz/",
  },
];

const aboutUsLinks: Array<Link> = [
  {
    title: "Historie",
    url: "/historie",
  },
  {
    title: "Zahraniční operace",
    url: "/zahranicni-operace",
  },
  {
    title: "Velitelé",
    url: "/velitele",
  },
  {
    title: "Uniforma",
    url: "/uniforma",
  },
  {
    title: "Cháron",
    url: "/charon",
  },
];

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

const InternalLink = ({ title, url }: Link) => {
  return (
    <li className='py-2'>
      <Link
        href={url}
        className='flex items-center justify-between hover:underline'
        target='_blank'
        rel='noreferrer'
      >
        <span>{title}</span>
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className='container mx-auto text-sm text-white bg-black bg-opacity-80'>
      <div className='grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3'>
        <div>
          <div className='border-b border-dotted border-primary-dark'>
            <h4 className='relative inline-block pb-3 uppercase border-b border-primary top-px'>
              O nás
            </h4>
          </div>

          <ul className='divide-y divide-stone-800 divide-dotted'>
            {aboutUsLinks.map((link: Link, index: number) => {
              return (
                <InternalLink title={link.title} url={link.url} key={index} />
              );
            })}
          </ul>
        </div>

        <div>
          <div className='border-b border-dotted border-primary-dark'>
            <h4 className='relative inline-block pb-3 uppercase border-b border-primary top-px'>
              Odkazy
            </h4>
          </div>

          <ul className='divide-y divide-dotted divide-stone-800'>
            {externalLinks.map((link: Link, index: number) => {
              return (
                <ExternalLink title={link.title} url={link.url} key={index} />
              );
            })}
          </ul>
        </div>

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
              <a
                href='mailto:info@43vysadkovypluk.cz'
                className='hover:underline'
              >
                info@43vysadkovypluk.cz
              </a>
              <br />
              <a
                href='mailto:az@43vysadkovypluk.cz'
                className='hover:underline'
              >
                az@43vysadkovypluk.cz
              </a>
            </address>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between p-5 space-y-5 lg:space-y-0 bg-gradient-to-r from-stone-800 to-stone-900 lg:flex-row'>
        <div>
          <span>43. výsadkový pluk</span>
          <span className='mx-2'>|</span>
          <span className='text-stone-500'>vytvořeno výsadkáři</span>
        </div>
        <div className='flex space-x-3 text-stone-500'>
          <a
            href='https://www.facebook.com/43vysadkovypluk/'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 hover:text-white'
              fill='currentColor'
            >
              <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'></path>
            </svg>
          </a>

          <a
            href='https://www.instagram.com/43vysadkovypluk/'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 hover:text-white'
              fill='currentColor'
            >
              <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z'></path>
            </svg>
          </a>

          <a
            href='https://www.youtube.com/channel/UCMgzkkvpqrsFJaTP3B9Msdg'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 hover:text-white'
              fill='currentColor'
            >
              <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'></path>
            </svg>
          </a>

          <a
            href='https://open.spotify.com/show/4OQHOu6h4MREb38RN1jV92?si=dMXDge8tRlCCeMfpKkYkbQ'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 hover:text-white'
              fill='currentColor'
            >
              <path d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z'></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
