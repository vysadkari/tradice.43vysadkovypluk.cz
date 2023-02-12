import Head from "next/head";

import Layout from "@/layout/Layout";
import Image from "next/image";

const CharonPage = () => {
  return (
    <Layout>
      <Head>
        <title>Cháron - 43. výsadkový pluk</title>
        <meta
          name='description'
          content='Cháron, to je nůž, podle kterého poznáš výsadkáře. Informace o jeho historii, materiálu a výrobě.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout.Intro
        title='Cháron'
        backgroundImage='/assets/images/charon/intro.jpg'
      />

      <Layout.Content>
        <div className='grid items-center grid-cols-3 gap-0 p-10'>
          <div className='z-10 col-start-1 col-end-3 p-5 text-lg prose border-t prose-invert max-w-none bg-black/70 rounded-xl border-stone-800 drop-shadow-black backdrop-blur-sm'>
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
            className='z-0 col-start-2 col-end-4 -mt-24 border-t rounded-xl drop-shadow-black border-stone-800'
          />
        </div>

        <div className='grid grid-cols-3 gap-10 p-10'>
          <div className='flex flex-col items-center gap-5 p-5 text-xl text-white border-t bg-black/70 drop-shadow-black border-stone-800 rounded-xl'>
            <span>Kaleno na</span>
            <span className='text-6xl font-semibold text-shadow text-primary'>
              62
            </span>
            <span>Rockwella</span>
          </div>
          <div className='flex flex-col items-center gap-5 p-5 text-xl text-white border-t bg-black/70 drop-shadow-black border-stone-800 rounded-xl'>
            <span>Předáno přes</span>
            <span className='text-6xl font-semibold text-shadow text-primary'>
              400
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
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            className='w-4/5 border-t aspect-video rounded-xl drop-shadow-black border-stone-500'
          ></iframe>
        </div>

        <div className='grid items-end grid-cols-2 gap-10 p-10 pb-0'>
          <div>
            <div className='p-5 mb-10 prose prose-invert bg-black/70 rounded-xl drop-shadow-black'>
              <p>
                Původní nože Cháron byly vyráběny z československé pružinové
                oceli 14260 o tvrdosti 56-58 HRC.
              </p>
              <p>
                Nově je Cháron vyráběn ze špičkové práškové oceli K-390 rakouské
                firmy Böhler o tvrdosti 61-62 HRC. Špičkových řezných vlastností
                a extrémní houževnatosti by nešlo dosáhnout, pokud by byl
                vyroben z nerezové oceli.
              </p>
              <p>
                Nože jsou broušeny pod vrcholovým úhlem 35°, brusnou sadou s
                diamantovými brousky o zrnitosti 240 - 3000 grit, s ostřím
                finálně vytaženým kůží.
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
