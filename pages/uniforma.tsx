import Head from "next/head";
import Image from "next/image";

import Layout from "@/layout/Layout";
import Unit, { UnitData } from "@/components/Unit";

const units: Array<UnitData> = [
  {
    name: "1. - 5. komando",
    description:
      "Všechna komanda mají rukávové označení v podobě zlatě lemovaného štítu s polem v barvě jedné ze čtyřech základních heraldických barev (červená, modrá, zelená a černá). V případě 5. komanda je použito tzv. “doplňkové” heraldické barvy, hnědé. Zlaté lemování symbolizuje jednotky hlavního úsilí pluku.",
    logos: [
      "/assets/images/uniforma/znaky/1k.svg",
      "/assets/images/uniforma/znaky/2k.svg",
      "/assets/images/uniforma/znaky/3k.svg",
      "/assets/images/uniforma/znaky/4k.svg",
      "/assets/images/uniforma/znaky/5k.svg",
    ],
    logosIR: [
      "/assets/images/uniforma/znaky/1k-ir.svg",
      "/assets/images/uniforma/znaky/2k-ir.svg",
      "/assets/images/uniforma/znaky/3k-ir.svg",
      "/assets/images/uniforma/znaky/4k-ir.svg",
      "/assets/images/uniforma/znaky/5k-ir.svg",
    ],
  },
  {
    name: "Středisko zbraní",
    description:
      "Dělený zlato černý štít svou černou barvou symbolicky odkazuje na historické označení 22. dělostřeleckého výsadkového oddílu, zlatá barva značí jednotku bojové podpory hlavního úsilí pluku.",
    logos: ["/assets/images/uniforma/znaky/sz.svg"],
    logosIR: ["/assets/images/uniforma/znaky/sz-ir.svg"],
  },
  {
    name: "Středisko bojové podpory",
    description:
      "Dělený zlato zelený štít svým zeleným polem asociuje hlavní poslání jednotky (vedení průzkumu), zlatá barva značí jednotku bojové podpory hlavního úsilí pluku.",
    logos: ["/assets/images/uniforma/znaky/sbp.svg"],
    logosIR: ["/assets/images/uniforma/znaky/sbp-ir.svg"],
  },
  {
    name: "Středisko zabezpečení velení",
    description:
      "Čtvrcený modro stříbrný štít svými dvěma vzhůru mířícími (z pohledu pozorovatele) čtvrtěmi asociuje nejdůležitější úkol jednotky (spojení na nadřízený stupeň), stříbrná barva značí jednotku bojového zabezpečení pluku.",
    logos: ["/assets/images/uniforma/znaky/szv.svg"],
    logosIR: ["/assets/images/uniforma/znaky/szv-ir.svg"],
  },
  {
    name: "Středisko logistického zabezpečení",
    description:
      "Čtvrcený hnědo stříbrný štít svými dvěma dolů mířícími (z pohledu pozorovatele) hnědými čtvrtěmi odkazuje na historické označení týlu 22. výsadkové brigády a asociuje klíčový úkol jednotky (logistické zabezpečení ze stupně útvaru až po tu nejmenší jednotku), stříbrná barva značí jednotku bojového zabezpečení pluku.",
    logos: ["/assets/images/uniforma/znaky/slz.svg"],
    logosIR: ["/assets/images/uniforma/znaky/slz-ir.svg"],
  },
  {
    name: "Zdravotnický odřad",
    description:
      "Stříbrný štít s červeným ondřejským křížem svou volbou tvarů i barev přirozeně asociuje hlavní úkol jednotky, kterým je zdravotnické zabezpečení útvaru.",
    logos: ["/assets/images/uniforma/znaky/zo.svg"],
    logosIR: ["/assets/images/uniforma/znaky/zo-ir.svg"],
  },
  {
    name: "Středisko bojového výcviku",
    description:
      "Stříbrný štít s dole zahroceným černým kůlem odkazuje svým heraldickým znamením na praktickou pomůcku všech instruktorů taktického výcviku – zahrocenou hůl. Stříbrná barva značí jednotku bojového zabezpečení pluku.",
    logos: ["/assets/images/uniforma/znaky/sbv.svg"],
    logosIR: ["/assets/images/uniforma/znaky/sbv-ir.svg"],
  },
  {
    name: "Středisko výsadkové přípravy",
    description:
      "Modrý štít s oboustranně zahroceným stříbrným břevnem asociuje základní poslání jednotky. Oboustranně zahrocené stříbrné břevno je totiž stylizovaným vyobrazením instruktora výsadkové přípravy v prsní poloze při volném pádu na modrém nebi.",
    logos: ["/assets/images/uniforma/znaky/svp.svg"],
    logosIR: ["/assets/images/uniforma/znaky/svp-ir.svg"],
  },
  {
    name: "Velení a štáb",
    description:
      "Vyobrazení převrácené zlaté krokve na červeném štítu právě pro velení pluku má svůj heraldický význam. Krokev bývala svorníkem celé stavby a její převrácená podoba odkazuje na útok seshora. Tento prvek využili českoslovenští výsadkáři ve svém prvním návrhu výsadkového odznaku. Červená barva asociuje barvu výsadkového baretu.",
    logos: ["/assets/images/uniforma/znaky/stab.svg"],
    logosIR: ["/assets/images/uniforma/znaky/stab-ir.svg"],
  },
];

const UniformPage = () => {
  const title = "Uniforma - Tradice výsadkářů";
  const description =
    "Baret, bojový prapor, znak a označení jednotek. To všechno jsou symboly výsadkářů.";
  const url = "https://tradice.43vysadkovypluk.cz/uniforma";
  const cardImage =
    "https://tradice.43vysadkovypluk.cz/assets/images/og/uniforma.png";

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
        title='Uniforma'
        backgroundImage='/assets/images/uniforma/intro.jpg'
      />

      <Layout.Content>
        <h2 className='py-3 text-2xl font-semibold text-center text-white bg-gradient-to-r from-transparent via-primary-dark to-transparent text-shadow'>
          Baret
        </h2>
        <div className='grid items-center grid-cols-1 md:grid-cols-3 p-10'>
          <div className='z-10 md:col-span-2 md:-mr-10 backdrop-blur-sm md:drop-shadow-black'>
            <div className='p-5 prose border-t prose-invert bg-black/70 rounded-t-xl md:rounded-xl max-w-none border-stone-800'>
              <p>
                Původ červeného (správně „vínového“) baretu sahá, jako celá
                tradice výsadkových sil, až do období 2. světové války. První
                velitel britské 1. výsadkové divize generálmajor Frederick
                Browning zvolil barvu baretu, jak praví legenda, po rozhovoru s
                prvním výsadkářem, kterého potkal a dal mu na výběr mezi modrou
                a červenou barvou baretu. Odpověď výsadkáře zněla: „Ovšemže
                červený, pane“.
              </p>
              <p>
                Dnes je nošen výsadkáři s velkým státním znakem se zkříženými
                meči (symbol v československé armádě původně vyhrazen jen pro
                vojáky „zbraní“ – vojáci „služeb“ nosili velký státní znak bez
                zkřížených mečů) nad levým okem. Okraj baretu se vepředu nosí na
                dva prsty od kořenu nosu.
              </p>
              <p>
                Výsadkáři získávají nárok na nošení výsadkového baretu až po
                splnění Základního výsadkového kurzu po svém prvním seskoku. Do
                té doby nosí nováčci polní čepici.
              </p>
            </div>
          </div>
          <Image
            src='/assets/images/uniforma/baret.jpg'
            width={725}
            height={725}
            alt='Červený baret'
            className='rounded-b-xl md:rounded-xl'
          />
        </div>

        <h2 className='py-3 text-2xl font-semibold text-center text-white bg-gradient-to-r from-transparent via-primary-dark to-transparent text-shadow'>
          Bojový prapor
        </h2>

        <div className='grid items-center grid-cols-1 md:grid-cols-6 gap-0 md:gap-5 p-10'>
          <Image
            src='/assets/images/uniforma/prapor-1.jpg'
            width={900}
            height={600}
            alt='Bojový prapor'
            className='md:col-span-4 rounded-t-xl md:rounded-xl'
          />

          <div className='z-10 md:col-span-2 md:-ml-14 backdrop-blur-sm md:drop-shadow-black'>
            <div className='p-5 prose border-t prose-invert bg-black/70 rounded-b-xl md:rounded-xl max-w-none border-stone-800'>
              <p>
                Základní řád (Zákl-1) říká: „Bojový prapor je symbolem vojenské
                cti a statečnosti, připomíná každému vojákovi povinnost sloužit
                vlasti a bránit ji proti vnějšímu napadení“. Bojový prapor
                udělil 43. výsadkovému pluku prezident České republiky v den
                jeho vzniku 1. října 2020.
              </p>
              <p>
                Útvar nese čestný název „Československých parašutistů“, který
                nesl 71. výsadkový prapor od svého vzniku až do roku 1952. Ten
                byl 71. výsadkovému údernému praporu navrácen v roce 1991 a od
                té doby provází chrudimský výsadkový útvar. 43. výsadkový pluk
                nad to používá stejné krycí číslo jako 71. výsadkový prapor do
                roku 1949 - VÚ 2298.
              </p>
            </div>
          </div>

          <div className='z-10 md:col-span-3 md:drop-shadow-black mt-10 md:mt-0'>
            <div className='p-5 prose border-t prose-invert bg-black/70 rounded-t-xl md:rounded-xl max-w-none border-stone-800'>
              <p>
                Na bojovém praporu (100x100 cm) je na podkladě tmavě červené
                barvy umístěn barevný znak 43. výsadkového pluku: na kruhovém,
                děleném, tmavočerveně lemovaném štítě je v horní, černé polovině
                položen britský výsadkový symbol z let druhé světové války, bílá
                (stříbrná) puma na padáku, doplněná z obou stran světle modrými
                křídly o sedmi letkách. Dolní polovina je bílo - červeno - modře
                dvakrát polcená. Lem znaku je v tmavočervené barvě výsadkového
                baretu.
              </p>
              <p>
                Nad znakem pluku vyveden nápis: „43. VÝSADKOVÝ“. Pod znakem
                vyveden nápis: „PLUK“. Z heraldicky levé strany znaku je na
                praporu umístěn lipový lístek, z heraldicky pravé strany znaku
                je umístěn erb města Chrudimi. Obvod praporu je ozdoben
                plamínkovým lemem v barvách národní trikolory, v pořadí modrá,
                červená, bílá.
              </p>
            </div>
          </div>

          <Image
            src='/assets/images/uniforma/prapor-2.jpg'
            width={900}
            height={902}
            alt='Bojový prapor'
            className='md:col-span-3 rounded-b-xl md:rounded-xl'
          />
        </div>

        <h2 className='py-3 text-2xl font-semibold text-center text-white bg-gradient-to-r from-transparent via-primary-dark to-transparent text-shadow'>
          Znak
        </h2>

        <div className='grid items-center grid-cols-1 md:grid-cols-2 gap-5 p-10'>
          <Image
            src='/assets/images/logo/logo.svg'
            width={430}
            height={430}
            alt='Znak 43. výsadkového pluku'
            className='w-full md:w-auto'
          />

          <div className='z-10 drop-shadow-black'>
            <div className='p-5 prose border-t prose-invert bg-black/70 rounded-xl max-w-none border-stone-800'>
              <p>
                Znak 43. výsadkového pluku se sestává ze dvou částí – tzv.
                „malého znaku“ kruhového tvaru, který doplňuje tzv. „mluvící
                stuha“ nahoře.
              </p>
              <p>
                Kruhový znak se skládá z československé trikolóry a britských
                výsadkových křídel. Odkazuje tedy na místo vzniku
                československého výsadkového vojska.
              </p>
              <p>
                Mluvící stuha, jak název napovídá, slovně doplňuje heraldický
                znak. Asi nejznámější mluvící stuhou v českém prostředí je
                mluvící stuha nad erbem Jana Lucemburského „Ich Dien“. Stuha
                výsadkového pluku odkazuje na stuhu 43. výsadkového praporu a
                slovně vyjadřuje zkrácený název útvaru.
              </p>
            </div>
          </div>
        </div>

        <h2 className='py-3 text-2xl font-semibold text-center text-white bg-gradient-to-r from-transparent via-primary-dark to-transparent text-shadow'>
          Označení jednotek
        </h2>

        <p className='p-10 prose prose-lg prose-invert max-w-none'>
          Smysl rukávového označení výsadkových jednotek je ryze praktický.
          Vzniklo již za 2. světové války ve formě tzv. „Drop Zone Flashes“ pro
          britské výsadkáře z důvodu snazšího rozlišení jednotlivých skupin na
          doskokové ploše. Nejinak tomu bylo v poválečném období s rukávovým
          označením jednotlivých výsadkových útvarů československé 22. výsadkové
          brigády. Konkrétní podoba je dnes jiná, praktický důvod ale zůstal. U
          43. výsadkového pluku se nosí nad znakem útvaru jako jeho doplněk, lze
          však využít i pro označení shromaždišť po seskoku (plachty) a vojenské
          techniky (černobílé vyobrazení).
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-14'>
          {units.map((unit, index) => (
            <Unit key={unit.name} fullWidth={index === 0} {...unit} />
          ))}
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default UniformPage;
