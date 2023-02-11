import Image from "next/image";

export type Person = {
  name: string;
  position: string;
  photo: string;
  bio: string;
};

export type CommanderPortrait = {
  name: string;
  photo: string;
  from: number;
  to?: number;
};

interface BioProps {
  person: Person;
}

const Bio = ({ person }: BioProps) => {
  return (
    <div>
      <div className='grid grid-cols-3 gap-10 px-10 bg-primary-dark border-y-2 border-primary '>
        <div className='-my-10'>
          <Image
            src={person.photo}
            width={400}
            height={400}
            alt={person.name}
            className='rounded-xl drop-shadow-black'
          />
        </div>
        <div className='flex flex-col justify-center col-span-2 prose prose-invert max-w-none'>
          <h2 className='mb-0 text-shadow'>{person.name}</h2>
          <p className='opacity-60'>{person.position}</p>
          <p>{person.bio}</p>
        </div>
      </div>
    </div>
  );
};

export const Portrait = ({ name, photo, from, to }: CommanderPortrait) => {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src={photo}
        width={200}
        height={200}
        alt={name}
        className='transition-all duration-200 rounded-full drop-shadow-black hover:scale-105'
      />
      <span className='mt-3 font-semibold text-white'>{name}</span>
      <span className='text-stone-500'>
        {from} - {to ?? "dosud"}
      </span>
    </div>
  );
};

export default Bio;
