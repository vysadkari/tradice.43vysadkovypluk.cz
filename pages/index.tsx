import Card, { CardProps } from "@/components/Card";
import Quote from "@/components/Quote";
import Layout from "@/layout/Layout";
import Head from "next/head";

const largePromo: CardProps = {
  backgroundImage: "assets/images/homepage/promo/charon.jpg",
  title: "Nůž pro výsadkáře",
  url: "/charon",
};

const promo: Array<CardProps> = [
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
  const title = "Tradice výsadkářů";
  const description =
    "Informace o historii výsadkářů, zahraničních operacích, velitelích, uniformě a noži Cháron.";
  const url = "https://tradice.43vysadkovypluk.cz/";
  const cardImage =
    "https://tradice.43vysadkovypluk.cz/assets/images/og/homepage.png";

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={cardImage} />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content={title} />
        <meta property='og:url' content={url} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={cardImage} />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout.Intro
        showLogo
        title='Tradice výsadkářů'
        backgroundImage='/assets/images/homepage/intro.jpg'
      />

      <Layout.Content>
        <div className='flex flex-col gap-5 p-5'>
          <Quote
            author='generálmajor Frederick Browning'
            image='/assets/images/homepage/browning.jpg'
          >
            Výsadkáři nemají žádnou minulost, ale o to slavnější budou mít
            budoucnost!
          </Quote>

          <p className='mt-0 text-lg text-shadow prose prose-invert max-w-none'>
            Citát z roku 1941 je připisovaný &quot;otci&quot; britských
            výsadkových jednotek, prvnímu veliteli 1. výsadkové divize,
            generálmajorovi Fredericku Browningovi. Výrok, bezpochyby platný ve
            své době, je dnes přesný už jen ve své druhé části. Přesvědčte se o
            tom sami.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-5 p-5 md:grid-cols-2'>
          <div className='md:col-span-2'>
            <Card
              backgroundImage={largePromo.backgroundImage}
              title={largePromo.title}
              url={largePromo.url}
            />
          </div>

          {promo.map(
            ({ backgroundImage, title, url }: CardProps, index: number) => {
              return (
                <div key={index}>
                  <Card
                    backgroundImage={backgroundImage}
                    title={title}
                    url={url}
                  />
                </div>
              );
            }
          )}
        </div>
      </Layout.Content>
    </Layout>
  );
}
