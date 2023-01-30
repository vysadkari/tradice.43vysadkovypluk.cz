const Intro = () => {
  return (
    <header className='relative overflow-y-hidden'>
      <div
        className='bg-cover bg-top parallax flex content-center justify-around h-[32rem]'
        style={{ backgroundImage: 'url("assets/images/homepage/intro.jpg")' }}
      >
        <img
          src='assets/images/logo/logo.svg'
          className='relative w-52 top-12'
          style={{ filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, .7))" }}
        />
      </div>
      <div
        className='absolute bottom-0 w-full py-4 prose text-center text-white uppercase bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm prose-invert max-w-none'
        style={{ backdropFilter: "blur(2px)" }}
      >
        <h1 className='text-shadow'>43. výsadkový pluk</h1>
      </div>
    </header>
  );
};

export default Intro;
