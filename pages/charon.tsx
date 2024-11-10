import Head from "next/head";

import Layout from "@/layout/Layout";
import Image from "next/image";

const CharonPage = () => {
  const title = "Cháron - Tradice výsadkářů";
  const description =
    "Cháron, to je nůž, podle kterého poznáš výsadkáře. Informace o jeho historii, materiálu a výrobě.";
  const url = "https://tradice.43vysadkovypluk.cz/charon";
  const cardImage =
    "https://tradice.43vysadkovypluk.cz/assets/images/og/charon.png";

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
        title='Cháron'
        backgroundImage='/assets/images/charon/intro.jpg'
      />

      <Layout.Content>
        <div className='grid items-center grid-cols-1 md:grid-cols-3 gap-0 p-10'>
          <div className='z-10 md:col-start-1 md:col-end-3 p-5 text-lg prose border-t prose-invert max-w-none bg-black/70 rounded-t-xl md:rounded-xl border-stone-800 md:drop-shadow-black backdrop-blur-sm'>
            <p>
              Duchovními otci nože byli podplukovník Aleš Opata a nadporučík
              Roman Hippík.
            </p>
            <p>
              První byl vyroben v roce 2000 a jeho konstrukce je volně
              inspirována třemi útočnými noži - československým výsadkovým nožem
              VO-07, sovětským průzkumnickým nožem NR-40 a americkým útočným
              nožem námořní pěchoty Ka-Bar.
            </p>
            <p>
              Útočný nůž Cháron dostal do vínku hned trojí úlohu - útočný nůž,
              pracovní nástroj a status symbol výsadkáře.
            </p>
          </div>
          <Image
            src='/assets/images/charon/charon.jpg'
            width={2000}
            height={1125}
            alt='Cháron'
            className='z-0 md:col-start-2 md:col-end-4 md:-mt-24 md:border-t rounded-b-xl md:rounded-xl md:drop-shadow-black border-stone-800'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-10'>
          <div className='flex flex-col items-center gap-5 p-5 text-xl text-white border-t bg-black/70 drop-shadow-black border-stone-800 rounded-xl'>
            <span>Kaleno na</span>
            <span className='text-6xl font-semibold text-shadow text-primary'>
              60
            </span>
            <span>Rockwella</span>
          </div>
          <div className='flex flex-col items-center gap-5 p-5 text-xl text-white border-t bg-black/70 drop-shadow-black border-stone-800 rounded-xl'>
            <span>Předáno přes</span>
            <span className='text-6xl font-semibold text-shadow text-primary'>
              500
            </span>
            <span>nožů</span>
          </div>
          <div className='flex flex-col items-center gap-5 p-5 text-xl text-white border-t bg-black/70 drop-shadow-black border-stone-800 rounded-xl'>
            <span>Více než</span>
            <span className='text-6xl font-semibold text-shadow text-primary'>
              20
            </span>
            <span>let historie</span>
          </div>
        </div>

        <div className='flex justify-center p-10'>
          <iframe
            src='https://www.youtube-nocookie.com/embed/sJ9AkRkaCQE'
            className='w-full md:w-4/5 border-t aspect-video rounded-xl drop-shadow-black border-stone-500'
            title='43. vp | Srovnávací test útočných nožů Cháron'
          ></iframe>
        </div>

        <div className='grid items-end grid-cols-1 md:grid-cols-2 gap-10 p-10 pb-0'>
          <div>
            <div className='p-5 mb-10 prose prose-invert bg-black/70 rounded-xl drop-shadow-black'>
              <p>
                Původní nože Cháron byly vyráběny z československé pružinové
                oceli 14260 o tvrdosti 56-58 HRC.
              </p>
              <p>
                Poté se nůž Cháron vyráběl z práškové oceli K-390 rakouské firmy
                Böhler tvrdosti 61-62 HRC. Špičkových řezných vlastností a
                extrémní houževnatosti by totiž nešlo dosáhnout, pokud by byl
                nůž vyroben z nerezové oceli.
              </p>
              <p>
                Výsadkáři chtějí ale to nejlepší, proto je v současné době
                Cháron vyráběn z prémiové, vysoce legované oceli Sleipner
                švédské firmy Uddeholm o tvrdosti do 60 HRC. Tato ocel výrazně
                lépe odolává korozi, a přitom si zachovává vynikající řezné a
                mechanické vlastnosti.
              </p>
              <p>
                Nože jsou broušeny pod vrcholovým úhlem 35º, brusnou sadou s
                diamantovými brousky o zrnitosti 240-3000 grit, s ostřím finálně
                vytaženým kůží.
              </p>
            </div>
          </div>
          <Image
            src='/assets/images/charon/kmfs.png'
            width={500}
            height={353}
            alt='KMFS'
          />
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default CharonPage;
