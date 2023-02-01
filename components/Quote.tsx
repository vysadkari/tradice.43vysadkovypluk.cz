import Image from "next/image";
import { ReactNode } from "react";

interface QuoteProps {
  author: string;
  image: string;
  children: ReactNode;
}

const Quote = ({ author, image, children }: QuoteProps) => {
  return (
    <div className='flex flex-col items-center gap-5 md:flex-row group'>
      <Image
        src={image}
        width={200}
        height={200}
        alt={author}
        className='my-0 border-0 rounded-full border-stone-500'
        style={{ filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, .7))" }}
      />
      <blockquote className='flex flex-col gap-10 pt-5 my-0 transition-colors duration-200 border-t-4 md:border-t-0 md:pl-5 md:pt-0 md:border-l-4 border-stone-500 group-hover:border-primary'>
        <p className='mt-0 text-3xl text-shadow before:content-[open-quote] after:content-[close-quote] text-white'>
          {children}
        </p>
        <footer className='text-xl text-stone-500 text-shadow'>{author}</footer>
      </blockquote>
    </div>
  );
};

export default Quote;
