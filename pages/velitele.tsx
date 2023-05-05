import Head from "next/head";
import Image from "next/image";

import Layout from "@/layout/Layout";
import { Person } from "@/components/Bio";
import Bio, { Portrait, CommanderPortrait } from "@/components/Bio";

type Unit = {
  name: string;
  logo: string;
  commanders: Array<CommanderPortrait>;
};

const fantasticFour: Array<Person> = [
  {
    name: "plk. Jiří Líbal",
    position: "velitel 43. výsadkového pluku",
    photo: "/assets/images/velitele/portrety/jiri-libal.jpg",
    bio: "Do „výsadkářské“ Chrudimi jsem nastoupil z Prahy, kde jsem zastával funkci náčelníka výsadkového vojska a výsadkové a záchranné služby na generálním štábu. Díky tomu jsem měl vliv i přehled, co pluk dělá a potřebuje. Výsadkářem jsem už od svého studia na vysoké škole ve Vyškově, kde jsem byl členem skupiny, která prováděla výsadkový výcvik. Všechny mé pozice v armádě byly vždy výsadkové (od velitele čety po velitele praporu). Zkušenosti jsem také získával na misích v Bosně, Kosovu, Afganistánu a Litvě, jako instruktor a velitel kurzu Komando a BMATT a v neposlední řadě na školách v USA (Command and General Staff College a US Army War College). Je pro mě ctí velet 43. výsadkovému pluku.",
  },
  {
    name: "pplk. Petr Matouš",
    position: "zástupce velitele",
    photo: "/assets/images/velitele/portrety/petr-matous.jpg",
    bio: "K výsadkovému vojsku mě to táhlo už od vojenské vysoké školy z dob skupiny Commandos, kdy jsme začali skákat v civilu. Výsadkářem jsem byl následně celou předchozí službu u 601. skupiny speciálních sil, se kterou jsem byl 4x nasazen v Afghánistánu a 2x v Africe. Během své služby jsem působil na Úřadu vlády jako vojenský přidělenec MO - poradce předsedy vlády a koordinátor agendy čelení hybridnímu působení (pro Odbornou pracovní skupinu Bezpečnostní rady státu). Na výsadkový pluk jsem nastoupil k 1. 11. 2022 z pozice poradce ministryně obrany. Být součástí velení 43. výsadkového pluku pro mě znamená čest a hrdost. ",
  },
  {
    name: "pplk. Marek Štěpánek",
    position: "náčelník štábu",
    photo: "/assets/images/velitele/portrety/marek-stepanek.jpg",
    bio: "K výsadkářům a 43. výsadkovému praporu jsem nastoupil v roce 2008 po studiu na Univerzitě obrany. Prošel jsem všemi důstojnickými funkcemi na výsadkové rotě, následně jsem působil jako zástupce náčelníka štábu pro operace. Ještě před vznikem pluku jsem zastával funkci zástupce velitele praporu, poté jsem se na dva roky odebral na odbor bojové přípravy Velitelství pro operace, abych se odtud vrátil na svoji současnou funkci náčelníka štábu 43. výsadkového pluku. Jsem odkojen výsadkáři a absolvoval jsem s nimi čtyři zahraniční nasazení, tři v Afghánistánu a jedno v Mali. Sloužit v Chrudimi je pro mne ctí a velkým závazkem.",
  },
  {
    name: "nprap. Robert Otáhal",
    position: "vrchní praporčík",
    photo: "/assets/images/velitele/portrety/robert-otahal.jpg",
    bio: "K výsadkářům jsem nastoupil tři roky po ukončení vojenské základní služby, jako délesloužící, ihned po transformaci útvaru na 43.vmpr v roce 1994. Byla to cesta, jak se dostat k výsadkovým jednotkám, jež se honosí mottem: MEČE ARMÁDY HROT.",
  },
];

const pastCommanders: Array<Unit> = [
  {
    name: "43. výsadkový pluk",
    logo: "/assets/images/velitele/znaky/43vp.png",
    commanders: [
      {
        name: "plk. Jiří Líbal",
        photo: "/assets/images/velitele/portrety/jiri-libal-2.jpg",
        from: 2021,
      },
      {
        name: "plk. Róbert Dziak",
        photo: "/assets/images/velitele/portrety/robert-dziak-2.jpg",
        from: 2020,
        to: 2022,
      },
    ],
  },
  {
    name: "43. výsadkový prapor",
    logo: "/assets/images/velitele/znaky/43vpr.png",
    commanders: [
      {
        name: "pplk. Ivo Zelinka",
        photo: "/assets/images/velitele/portrety/ivo-zelinka-2.jpg",
        from: 2019,
        to: 2020,
      },
      {
        name: "pplk. Jiří Adamec",
        photo: "/assets/images/velitele/portrety/jiri-adamec.jpg",
        from: 2016,
        to: 2019,
      },
      {
        name: "pplk. Róbert Dziak",
        photo: "/assets/images/velitele/portrety/robert-dziak-3.jpg",
        from: 2014,
        to: 2016,
      },
      {
        name: "pplk. Ladislav Švejda",
        photo: "/assets/images/velitele/portrety/ladislav-svejda.jpg",
        from: 2010,
        to: 2014,
      },
      {
        name: "pplk. Zdeněk Kolář",
        photo: "/assets/images/velitele/portrety/zdenek-kolar.jpg",
        from: 2005,
        to: 2010,
      },
      {
        name: "pplk. Oldřich Nápravník",
        photo: "/assets/images/velitele/portrety/oldrich-napravnik.jpg",
        from: 2003,
        to: 2005,
      },
      {
        name: "pplk. Aleš Opata",
        photo: "/assets/images/velitele/portrety/ales-opata.jpg",
        from: 2000,
        to: 2003,
      },
      {
        name: "pplk. Aleš Vodehnal",
        photo: "/assets/images/velitele/portrety/ales-vodehnal.jpg",
        from: 1998,
        to: 2000,
      },
      {
        name: "pplk. Alexandr Kokuňko",
        photo: "/assets/images/velitele/portrety/alexandr-kokunko.jpg",
        from: 1996,
        to: 1998,
      },
      {
        name: "pplk. Josef Prokš",
        photo: "/assets/images/velitele/portrety/josef-proks.jpg",
        from: 1993,
        to: 1996,
      },
    ],
  },
  {
    name: "71. výsadkový úderný prapor",
    logo: "/assets/images/velitele/znaky/71vupr.png",
    commanders: [
      {
        name: "pplk. Pavel Lukáš",
        photo: "/assets/images/velitele/portrety/pavel-lukas.jpg",
        from: 1991,
        to: 1993,
      },
      {
        name: "pplk. Josef Marguš",
        photo: "/assets/images/velitele/portrety/josef-margus.jpg",
        from: 1987,
        to: 1991,
      },
    ],
  },
  {
    name: "71. výsadkový prapor",
    logo: "/assets/images/velitele/znaky/71vpr.png",
    commanders: [
      {
        name: "kpt. Milan Vaigl",
        photo: "/assets/images/velitele/portrety/milan-vaigl.jpg",
        from: 1967,
        to: 1969,
      },
      {
        name: "mjr. Jan Michňák",
        photo: "/assets/images/velitele/portrety/jan-michnak.jpg",
        from: 1966,
        to: 1967,
      },
      {
        name: "kpt. Jan Tisovský",
        photo: "/assets/images/velitele/portrety/jan-tisovsky.jpg",
        from: 1957,
        to: 1966,
      },
      {
        name: "kpt. Vlastimil Gallat",
        photo: "/assets/images/velitele/portrety/vlastimil-gallat.jpg",
        from: 1956,
        to: 1957,
      },
      {
        name: "kpt. Jan Tisovský",
        photo: "/assets/images/velitele/portrety/jan-tisovsky.jpg",
        from: 1955,
        to: 1956,
      },
      {
        name: "npor. Josef Mrázek",
        photo: "/assets/images/velitele/portrety/josef-mrazek.jpg",
        from: 1953,
        to: 1955,
      },
      {
        name: "škpt. Karel Komínek",
        photo: "/assets/images/velitele/portrety/karel-kominek.jpg",
        from: 1952,
        to: 1953,
      },
      {
        name: "škpt. František Mansfeld",
        photo: "/assets/images/velitele/portrety/frantisek-mansfeld.jpg",
        from: 1951,
        to: 1952,
      },
      {
        name: "mjr. František Moravec",
        photo: "/assets/images/velitele/portrety/frantisek-moravec.jpg",
        from: 1950,
        to: 1951,
      },
      {
        name: "mjr. Miroslav Kňourek",
        photo: "/assets/images/velitele/portrety/miroslav-knourek.jpg",
        from: 1949,
        to: 1950,
      },
      {
        name: "mjr. Oldřich Talášek",
        photo: "/assets/images/velitele/portrety/oldrich-talasek.jpg",
        from: 1947,
        to: 1949,
      },
    ],
  },
];

const CommandersPage = () => {
  const title = "Velitelé - Tradice výsadkářů";
  const description =
    "Informace o současném velení 43. výsadkové pluku, ale také přehled bývalých velitelů.";
  const url = "https://tradice.43vysadkovypluk.cz/velitele";
  const cardImage =
    "https://tradice.43vysadkovypluk.cz/assets/images/og/velitele.png";

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
        title='Velitelé'
        backgroundImage='/assets/images/velitele/intro.jpg'
      />

      <Layout.Content>
        <div className='grid grid-cols-1 gap-10 py-20'>
          {fantasticFour.map((person: Person) => (
            <Bio person={person} key={person.name} />
          ))}
        </div>

        <div>
          <h2 className='py-3 text-2xl font-semibold text-center text-white bg-gradient-to-r from-transparent via-primary-dark to-transparent text-shadow'>
            Historie velitelů
          </h2>

          <div className='flex flex-col gap-10 p-10'>
            {pastCommanders.map((unit: Unit) => (
              <div key={unit.name}>
                <h3 className='flex flex-row items-center gap-5 p-3 pl-10 -ml-10 text-xl font-semibold text-white text-shadow bg-gradient-to-r from-primary-dark via-transparent to-transparent'>
                  <Image
                    src={unit.logo}
                    width={100}
                    height={100}
                    alt={unit.name}
                    className='w-20 h-20'
                  />
                  <span>{unit.name}</span>
                </h3>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-10 mt-10'>
                  {unit.commanders.map((commander: CommanderPortrait) => (
                    <Portrait
                      name={commander.name}
                      photo={commander.photo}
                      from={commander.from}
                      to={commander.to}
                      key={commander.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default CommandersPage;
