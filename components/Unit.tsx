import Image from "next/image";

export type UnitData = {
  name: string;
  description: string;
  logos: Array<string>;
  logosIR: Array<string>;
};

const Unit = ({
  name,
  description,
  logos,
  logosIR,
  fullWidth,
}: UnitData & { fullWidth?: boolean }) => {
  return (
    <div
      className={`relative p-5 prose border prose-invert max-w-none border-stone-500 rounded-xl group ${
        fullWidth && "col-span-2"
      }`}
    >
      <div className='absolute inset-x-0 top-0 flex flex-row justify-center gap-0 -translate-y-1/2 not-prose'>
        <div className='flex flex-row p-px bg-gradient-to-r from-stone-500 via-transparent to-stone-500'>
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              width={200}
              height={200}
              alt={name}
              className='w-16 h-16'
            />
          ))}
        </div>
      </div>

      <h3 className='mt-5 text-center'>{name}</h3>
      <p className='text-justify'>{description}</p>

      <div className='absolute inset-x-0 top-0 flex flex-row justify-center gap-0 transition-opacity duration-200 -translate-y-1/2 opacity-0 group-hover:opacity-100 not-prose'>
        <div className='flex flex-row p-px bg-gradient-to-r from-stone-500 via-transparent to-stone-500'>
          {logosIR.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              width={200}
              height={200}
              alt={name}
              className='w-16 h-16'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Unit;
