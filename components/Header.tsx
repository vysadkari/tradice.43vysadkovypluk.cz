import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className='fixed bg-repeat-x top-0 left-0 right-0 z-10 backdrop-filter backdrop-blur text-[13px] bg-gradient-to-r from-black/70 to-primary/70 box-shadow-d-lg'>
      <div className='container flex flex-wrap items-center justify-between p-3 mx-auto lg:p-0'>
        <Link className='z-50' href='/'>
          <Image
            src='assets/images/logo/logo-round.svg'
            className='absolute h-16 top-3 drop-shadow-black'
            alt='43. výsadkový pluk'
            width={100}
            height={100}
          />
        </Link>

        <button className='relative inline-block w-10 h-10 text-white lg:hidden'>
          <div className='absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
            <span
              aria-hidden='true'
              className='block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -translate-y-1.5'
            ></span>
            <span
              aria-hidden='true'
              className='block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out'
            ></span>
            <span
              aria-hidden='true'
              className='block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out translate-y-1.5'
            ></span>
          </div>
        </button>

        <nav className='flex-col items-end hidden w-full px-2 mt-2 font-semibold uppercase lg:flex lg:flex-row lg:items-center lg:space-x-5 xl:space-x-10 lg:w-auto lg:mt-0'>
          <a
            className='hidden py-0 text-gray-300 transition duration-100 hover:text-white lg:py-5 hover:overline lg:inline'
            href='/historie'
          >
            Historie
          </a>

          <a
            className='flex text-center text-white bg-center bg-cover border border-black rounded drop-shadow-lg lg:hidden aspect-video text-shadow-sm'
            href='/historie'
          >
            <div className='flex items-end justify-center w-full h-full p-2 bg-gradient-to-t from-black via-transparent'>
              <span>Historie</span>
            </div>
          </a>
          <a
            className='hidden py-0 text-gray-300 transition duration-100 hover:text-white lg:py-5 hover:overline lg:inline'
            href='/vyzbroj'
          >
            Zahraniční operace
          </a>

          <a
            className='flex text-center text-white bg-center bg-cover border border-black rounded drop-shadow-lg lg:hidden aspect-video text-shadow-sm'
            href='/vyzbroj'
          >
            <div className='flex items-end justify-center w-full h-full p-2 bg-gradient-to-t from-black via-transparent'>
              <span>Zahraniční operace</span>
            </div>
          </a>
          <a
            className='hidden py-0 text-gray-300 transition duration-100 hover:text-white lg:py-5 hover:overline lg:inline'
            href='/organizacni-struktura'
          >
            Velitelé
          </a>

          <a
            className='flex text-center text-white bg-center bg-cover border border-black rounded drop-shadow-lg lg:hidden aspect-video text-shadow-sm'
            href='/organizacni-struktura'
          >
            <div className='flex items-end justify-center w-full h-full p-2 bg-gradient-to-t from-black via-transparent'>
              <span>Velitelé</span>
            </div>
          </a>
          <a
            className='hidden py-0 text-gray-300 transition duration-100 hover:text-white lg:py-5 hover:overline lg:inline'
            href='/volna-mista'
          >
            Uniforma
          </a>

          <a
            className='flex text-center text-white bg-center bg-cover border border-black rounded drop-shadow-lg lg:hidden aspect-video text-shadow-sm'
            href='/volna-mista'
          >
            <div className='flex items-end justify-center w-full h-full p-2 bg-gradient-to-t from-black via-transparent'>
              <span>Uniforma</span>
            </div>
          </a>
          <a
            className='hidden py-0 text-gray-300 transition duration-100 hover:text-white lg:py-5 hover:overline lg:inline'
            href='/volna-mista'
          >
            Cháron
          </a>

          <a
            className='flex text-center text-white bg-center bg-cover border border-black rounded drop-shadow-lg lg:hidden aspect-video text-shadow-sm'
            href='/volna-mista'
          >
            <div className='flex items-end justify-center w-full h-full p-2 bg-gradient-to-t from-black via-transparent'>
              <span>Cháron</span>
            </div>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
