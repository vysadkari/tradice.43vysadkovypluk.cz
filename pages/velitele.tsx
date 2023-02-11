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
    bio: "Současný velitel 43. výsadkového pluku, který dříve velel mechanizovanému praporu v Žatci a byl náčelníkem výsadkového vojska.",
  },
  {
    name: "pplk. Petr Matouš",
    position: "zástupce velitele",
    photo: "/assets/images/velitele/portrety/petr-matous.jpg",
    bio: "Že by chtěl být vojákem, ho napadlo v 15 letech, když ležel v nemocnici se zlomenou páteří. O sedm let později byl Petr Matouš v nejelitnějším útvaru české armády a letos v říjnu převzal státní vyznamenání za zneškodnění pachatelů teroristických útoků v Afghánistánu.",
  },
  {
    name: "pplk. Marek Štěpánek",
    position: "náčelník štábu",
    photo: "/assets/images/velitele/portrety/marek-stepanek.jpg",
    bio: "Bývalý velitel 2. výsadkové roty, který se v roce 2021 stal náčelníkem štábu 43. výsadkového pluku.",
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
  return (
    <Layout>
      <Head>
        <title>Velitelé - 43. výsadkový pluk</title>
        <meta
          name='description'
          content='Informace o současném velení 43. výsadkové pluku, ale také přehled bývalých velitelů.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout.Intro
        title='Velitelé'
        backgroundImage='/assets/images/velitele/intro.jpg'
      />

      <Layout.Content>
        <div className='grid grid-cols-1 gap-32 py-20'>
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
                <div className='grid grid-cols-5 gap-10 mt-10'>
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
