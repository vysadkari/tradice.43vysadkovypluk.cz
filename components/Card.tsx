import Link from "next/link";

export interface CardProps {
  backgroundImage: string;
  title: string;
  url: string;
}

const Card = ({ backgroundImage, title, url }: CardProps) => {
  return (
    <div
      className='relative col-span-2 overflow-hidden bg-center bg-cover border-t h-60 drop-shadow-black border-stone-800 rounded-xl group'
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <div className='absolute inset-0 flex items-end justify-center p-5 prose bg-gradient-to-t from-black via-transparent prose-invert max-w-none'>
        <h2 className='text-shadow top-0 group-hover:-top-2 transition-all duration-200 relative'>
          {title}
        </h2>
      </div>
      <Link href={url} className='absolute inset-0' />
    </div>
  );
};

export default Card;
