export type PromoCardProps = {
  backgroundImage: string;
  title: string;
  url: string;
};

const PromoCard = ({ backgroundImage, title, url }: PromoCardProps) => {
  return (
    <div
      className='col-span-2 h-60 drop-shadow-black border border-stone-800 relative overflow-hidden'
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <div className='absolute inset-0 flex justify-center items-end p-5 bg-gradient-to-t from-black via-transparent prose prose-invert max-w-none'>
        <h2 className='text-shadow'>{title}</h2>
      </div>
    </div>
  );
};

export default PromoCard;
