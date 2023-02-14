import { ReactNode } from "react";

import Image from "next/image";
import Head from "next/head";

import Layout from "@/layout/Layout";

type TimelineItemProps = {
  year: number;
  title: string;
  image: string;
  children: ReactNode;
};

const TimelineItemLeft = ({
  year,
  title,
  image,
  children,
}: TimelineItemProps) => {
  return (
    <div className='relative w-full border-b-4 border-l-4 rounded-bl-3xl border-primary group'>
      <div className='absolute grid w-16 h-16 font-semibold transition-colors duration-150 -translate-x-1/2 -translate-y-1/2 border-4 rounded-full border-primary bg-stone-900 group-hover:bg-primary place-content-center'>
        {year}
      </div>
      <div className='flex flex-col gap-5 pt-5 pb-10 pl-10 pr-5 prose prose-invert max-w-none'>
        <h2 className='mb-0 text-center text-shadow'>{title}</h2>
        <div className='grid grid-cols-4 gap-5 items-center'>
          <Image
            src={image}
            width={400}
            height={270}
            alt={title}
            className='w-full my-0 rounded-lg drop-shadow-black z-0 grid-area-[1_1_1_4]'
          />
          <p className='my-0 text-justify z-10 bg-black/90 p-5 rounded-xl backdrop-filter backdrop-blur-sm grid-area-[1_3_1_5]'>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

const TimelineItemRight = ({
  year,
  title,
  image,
  children,
}: TimelineItemProps) => {
  return (
    <div className='relative w-full border-b-4 border-r-4 rounded-br-3xl border-primary group'>
      <div className='absolute top-0 right-0 grid w-16 h-16 font-semibold transition-colors duration-150 translate-x-1/2 -translate-y-1/2 border-4 rounded-full border-primary bg-stone-900 place-content-center group-hover:bg-primary'>
        {year}
      </div>
      <div className='flex flex-col gap-5 pt-5 pb-10 pl-5 pr-10 prose prose-invert max-w-none'>
        <h2 className='mb-0 text-center text-shadow'>{title}</h2>
        <div className='grid grid-cols-4 gap-5 items-center'>
          <p className='my-0 text-justify z-10 bg-black/90 p-5 rounded-xl backdrop-filter backdrop-blur-sm grid-area-[1_1_1_3]'>
            {children}
          </p>
          <Image
            src={image}
            width={400}
            height={270}
            alt={title}
            className='w-full my-0 rounded-lg drop-shadow-black z-0 grid-area-[1_2_1_5]'
          />
        </div>
      </div>
    </div>
  );
};

const HistoryPage = () => {
  return (
    <Layout>
      <Head>
        <title>Historie - 43. výsadkový pluk</title>
        <meta
          name='description'
          content='Nejdůležitější milníky při formování výsadkového vojska u nás. Od 2. světové války po současný výsadkový pluk.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout.Intro
        title='Historie'
        backgroundImage='/assets/images/historie/intro.jpg'
      />

      <Layout.Content>
        <div className='flex flex-col items-center p-10 pt-12 text-white'>
          <TimelineItemLeft
            year={1941}
            title='2. světová válka'
            image='/assets/images/historie/timeline/1941.jpg'
          >
            Ačkoliv se první plány na zřízení výsadkové jednotky v
            československé armádě datují již do roku 1938, kvůli mnichovským
            událostem už k vzniku jednotky nedošlo. Československá exilová vláda
            následně zřídila na konci roku 1940 ve Velké Británii &quot;Zvláštní
            skupinu D&quot;, ze které poté od roku 1941 vysílala výsadky do
            Němci okupovaného Československa. V roce 1944 nad to ustanovila v
            SSSR 2. čs. samostatnou paradesantní brigádu, která se zapojila do
            bojů v rámci karpatsko-dukelské operace a Slovenského národního
            povstání.
          </TimelineItemLeft>

          <TimelineItemRight
            year={1947}
            title='Vznik čs. výsadkového vojska'
            image='/assets/images/historie/timeline/1947.jpg'
          >
            Záhy po obnovení samostatného Československa se rozeběhla příprava
            zřízení výsadkového vojska. Toto úsilí bylo završeno dne 1. října
            roku 1947 zřízením Pěšího praporu 71 (výsadkového). Ten byl posléze,
            už pod jménem 71. výsadkový prapor, následován 65. a 72. výsadkovým
            praporem spolu s dalšími útvary rychle rostoucího druhu vojska. To
            navazovalo na zkušenosti západního i východního odboje, což se
            odráželo ve výcviku jak diverzních, tak takticko-operačních výsadků.
            Ve svém „zlatém věku“ čs. výsadkové vojsko zahrnovalo jak výsadkáře,
            tak průzkumníky i speciální síly.
          </TimelineItemRight>

          <TimelineItemLeft
            year={1969}
            title='Deaktivace 71. výsadkového praporu'
            image='/assets/images/historie/timeline/1969.jpg'
          >
            Kvůli tragickým událostem 21. srpna 1968 došlo k rozsáhlé
            reorganizaci československé armády, která zasáhla (i kvůli činnosti
            samotných jednotek výsadkového vojska během prvních dní okupace)
            výsadkáře mimořádně tvrdě. 7. výsadkový pluk zvláštního určení
            přestal existovat, 22. výsadková brigáda, které byl prapor součástí,
            byla redukována na pluk a „jednasedmdesátka“ tak po téměř dvacet let
            žila jen ve vzpomínkách výsadkářů. Výsadkové vojsko tím na dlouhou
            dobu přišlo o jednu ze třech svých dosavadních opor - výsadkáře
            určené pro taktické a operační výsadky. Síly speciálního určení se
            podařilo kvapnou reorganizací zachránit jen částečně a „výsadkovou
            pochodeň“ tak dál na čas nesli osamoceně zejména průzkumníci.
          </TimelineItemLeft>

          <TimelineItemRight
            year={1987}
            title='Aktivace 71. úderného výsadkového praporu'
            image='/assets/images/historie/timeline/1987.jpg'
          >
            Podmínky pro výsadkové vojsko se začaly dramaticky měnit, s nástupem
            nové politické garnitury v Sovětském svazu, v druhé polovině 80.
            let. Symbolicky 1. října 1987 tak došlo k reaktivaci
            „jednasedmdesátky“ v posádce Chrudim, a to pod názvem 71. úderný
            výsadkový prapor. Od roku 1969 uplynulo téměř dvacet let, ale ten
            čas nezaznamenal nic pro tehdejší příslušníky výsadkových rot, z
            nichž mnozí mezitím dosáhli generálských hodností. Nebýt podpory
            generála Karla Kuby a majora Petra Čejky, mnohaletý sen na
            znovuobnovení 71. výsadkového praporu by se nikdy nesplnil. Spolu s
            (1. listopadu 1987) transformovaným 22. plukem speciálního určení v
            Prostějově započalo výsadkové vojsko znovu budovat všechny své
            někdejší schopnosti.
          </TimelineItemRight>

          <TimelineItemLeft
            year={1994}
            title='Transformace na 43. výsadkový prapor'
            image='/assets/images/historie/timeline/1994.jpg'
          >
            31. října 1991 byl útvar, v té době již pod názvem 71. výsadkový
            úderný prapor, („úderný“ znamenalo v dobové terminologii
            „aeromobilní“) kvůli změněným požadavkům přejmenován na 71. prapor
            rychlého nasazení. Ten se následně stal, 1. dubna 1994, jádrem
            nového vysoce mobilního, z části výsadkového, svazku - 4. brigády
            rychlého nasazení. V den vzniku svazku byl přejmenován na 43.
            výsadkový mechanizovaný prapor, přičemž zůstal jeho součástí dalších
            25 let. Charakter útvaru se dále změnil na samém konci 90. let, kdy
            byla struktura útvaru posunuta od klasické výsadkové struktury blíže
            ke struktuře jednotek Rangers. Tento proces, dále posilovaný četnými
            operačními nasazeními v bývalé Jugoslávii, Iráku, Afghánistánu a
            nakonec Mali, byl formálně stvrzen přejmenováním útvaru na „43.
            výsadkový prapor“.
          </TimelineItemLeft>

          <TimelineItemRight
            year={2020}
            title='Rozšíření na 43. výsadkový pluk'
            image='/assets/images/historie/timeline/2020.jpg'
          >
            Stejně jako byly změny v úkolech a struktuře u přechozích inkarnací
            43. výsadkového pluku taženy především změnami v bezpečnostní a
            politické sféře, nebylo tomu ani tentokrát jinak. Události roku 2014
            na Ukrajině zapříčinily dramatickou změnu ve vnímání hrozeb u všech
            států Severoatlantické aliance. Požadavek Auditu národní bezpečnosti
            na schopnost AČR „reagovat na hrozby v extrémně krátkém čase“ a
            direktiva vlády na rozšíření armády o 5.000 mužů a žen daly
            vzniknout analytickému týmu, který určil jako nejvhodnější řešení
            „vznik třetího manévrového prvku v podobě výsadkového pluku“ na bázi
            43. výsadkového praporu. Po roční paralelní existenci 43.
            výsadkového praporu a nově zřízeného Organizačního jádra výsadkového
            pluku vzniká jejich sloučením, symbolicky 1. října 2020, 43.
            výsadkový pluk. Ten se tak stává primární silou okamžité reakce AČR.
          </TimelineItemRight>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default HistoryPage;
