import PromoCard, { PromoCardProps } from "@/components/PromoCard";
import Head from "next/head";
import Image from "next/image";

const largePromo: PromoCardProps = {
  backgroundImage: "assets/images/homepage/promo/charon.jpg",
  title: "Nůž pro výsadkáře",
  url: "/charon",
};

const promo: Array<PromoCardProps> = [
  {
    backgroundImage: "assets/images/homepage/promo/historie.jpg",
    title: "Počátky výsadkářů",
    url: "/historie",
  },
  {
    backgroundImage: "assets/images/homepage/promo/zahranicni-operace.jpg",
    title: "Nasazení v zahraničí",
    url: "/zahranicni-operace",
  },
  {
    backgroundImage: "assets/images/homepage/promo/velitele.jpg",
    title: "Současní i bývalí velitelé",
    url: "/velitele",
  },
  {
    backgroundImage: "assets/images/homepage/promo/uniforma.jpg",
    title: "Baret, nášivka, prapor, znaky",
    url: "/uniforma",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Tradice výsadkářů</title>
        <meta
          name='description'
          content='Informace o historii výsadkářů, zahraničních operacích, velitelích, uniformě a noži Cháron.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col gap-5 prose prose-invert max-w-none p-5'>
        <div className='flex flex-row gap-5 items-center group'>
          <Image
            src='/assets/images/homepage/browning.jpg'
            width={200}
            height={200}
            alt='generálmajor Frederick Browning'
            className='rounded-full border-0 border-stone-500 my-0'
            style={{ filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, .7))" }}
          />
          <blockquote className='border-stone-500 group-hover:border-primary transition-colors duration-200 my-0 pl-5'>
            <p className='text-3xl mt-0 text-shadow'>
              Výsadkáři nemají žádnou minulost, ale o to slavnější budou mít
              budoucnost!
            </p>
            <footer className='text-xl text-stone-500 text-shadow'>
              generálmajor Frederick Browning
            </footer>
          </blockquote>
        </div>

        <p className='mt-0 text-lg'>
          Citát z roku 1941 je připisovaný &quot;otci&quot; britských
          výsadkových jednotek, prvnímu veliteli 1. výsadkové divize,
          generálmajorovi Fredericku Browningovi. Výrok, bezpochyby platný ve
          své době, je dnes přesný už jen ve své druhé části. Přesvědčte se o
          tom sami.
        </p>
      </div>

      <div className='grid grid-cols-2 p-5 gap-5'>
        <div className='col-span-2'>
          <PromoCard
            backgroundImage={largePromo.backgroundImage}
            title={largePromo.title}
            url={largePromo.url}
          />
        </div>

        {promo.map(
          ({ backgroundImage, title, url }: PromoCardProps, index: number) => {
            return (
              <div key={index}>
                <PromoCard
                  backgroundImage={backgroundImage}
                  title={title}
                  url={url}
                />
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
