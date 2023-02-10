import { ReactNode } from "react";

import Image from "next/image";

import { AfghanistanFlag, MaliFlag, IraqFlag, YugoslaviaFlag } from "./Flags";

export type DeploymentData = {
  country: string;
  flag: string;
  situation: ReactNode;
  task: ReactNode;
  photos: Array<string>;
};

interface FlagProps {
  country: string;
}

const Flag = ({ country }: FlagProps) => {
  const className = "w-36 drop-shadow-black";

  switch (country) {
    case "afghanistan":
      return <AfghanistanFlag className={className} />;
    case "mali":
      return <MaliFlag className={className} />;
    case "iraq":
      return <IraqFlag className={className} />;
    case "yugoslavia":
      return <YugoslaviaFlag className={className} />;
    default:
      return <></>;
  }
};

const Deployment = ({
  country,
  flag,
  situation,
  task,
  photos,
}: DeploymentData) => {
  return (
    <div className='prose prose-invert max-w-none'>
      <div className='flex flex-row items-center'>
        <Flag country={flag} />
        <h2 className='relative p-2 my-0 rounded-md text-shadow bg-black/70 -left-10'>
          {country}
        </h2>
      </div>
      <div className='grid grid-cols-2 gap-10'>
        <div>
          <h3>Situace v zemi</h3>
          {situation}
        </div>

        <div>
          <h3>Činnost výsadkářů</h3>
          {task}
        </div>
      </div>

      <div className='grid grid-cols-2 gap-10'>
        {photos.map((photo: string, index: number) => (
          <Image
            key={index}
            src={photo}
            width={930}
            height={500}
            className='mt-5 rounded-lg drop-shadow-black'
            alt='Afghánistán'
          />
        ))}
      </div>
    </div>
  );
};

export default Deployment;
