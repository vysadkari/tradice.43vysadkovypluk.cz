import Image from "next/image";

interface IntroProps {
  title: string;
  backgroundImage: string;
  showLogo?: boolean;
}

const Intro = ({ title, backgroundImage, showLogo }: IntroProps) => {
  return (
    <header className='relative overflow-y-hidden'>
      <div
        className='bg-cover bg-top parallax flex content-center justify-around h-[32rem]'
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        {showLogo && (
          <Image
            src='/assets/images/logo/logo.svg'
            className='relative w-52 top-12 drop-shadow-black'
            width={180}
            height={180}
            alt='43. výsadkový pluk'
          />
        )}
      </div>
      <div
        className='absolute bottom-0 w-full py-4 prose text-center text-white uppercase bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm prose-invert max-w-none'
        style={{ backdropFilter: "blur(2px)" }}
      >
        <h1 className='text-shadow'>{title}</h1>
      </div>
    </header>
  );
};

export default Intro;
