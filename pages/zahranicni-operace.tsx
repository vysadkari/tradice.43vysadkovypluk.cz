import Head from "next/head";
import Image from "next/image";

import { ComposableMap, Geographies, Geography, Line } from "react-simple-maps";

import Layout from "@/layout/Layout";
import { AfghanistanFlag } from "@/components/Flags";
import Deployment, { DeploymentData } from "@/components/Deployment";

const getUrlWorld =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const countryBackground = (countryId: string) => {
  switch (countryId) {
    case "CZE":
      return "#4c7c94";
    case "AFG":
    case "MLI":
    case "IRQ":
    case "CS-KM":
    case "BIH":
    case "MKD":
    case "SVK":
      return "#1e323b";
    default:
      return "#292524";
  }
};

const deployments: Array<DeploymentData> = [
  {
    country: "Afghánistán",
    flag: "afghanistan",
    situation: (
      <>
        <p>
          Neexistuje snad komplikovanější území na stabilizaci než právě
          Afghánistán. Země moha etnik i jazyků, která od roku 1979 nepoznala
          nic jiného než válku. Měnily se její příčiny i intenzita, ale hlavní
          hybatelé zůstávali stejní.
        </p>
        <p>
          Západní koalice do země intervenovala nedlouho po 11. září 2001, a to
          z důvodu, že tehdejší hlava hnutí Talibán a vládce Afghánistánu, Mula
          Omar, ukrýval strůjce teroristických útoků Usámu bin Ládina, se kterým
          byl pokrevně spřízněn.
        </p>
        <p>
          Intervence měla tři fáze. V té první se podařilo vojensky porazit
          hnutí Talibán a ustanovit vládu pod vedením Hámida Kárzáje. Ve druhé
          byla tíha činnosti zaměřena na rekonstrukci země zcela zničené
          předchozí válkami. Ve třetí fázi byla pozornost věnována zejména
          výcviku bezpečnostních složek (armády, policie...) a postupnému
          předávání zodpovědnosti za osud země do rukou samotných Afghánců.
        </p>
      </>
    ),
    task: (
      <>
        <p>
          Chrudimští výsadkáři byli pravidelně nasazování na území Afghánistánu
          od roku 2007 ve velkých počtech, což mělo zásadní formativní vliv na
          celou generaci výsadkářů. Nasazení bylo zaměřeno především na
          rekonstrukční činnost, činnost vojenského poradenství a bojové
          patrolování. Mezi hlavní nasazení patřila:
        </p>

        <ul>
          <li>PRT Fajzabád, PRT Logar (průzkumné a bezpečnostní úkoly)</li>
          <li>
            OMLT Wardak a JPAV Logar (mentoring bojového praporu ANA a speciální
            jednotky ANP)
          </li>
          <li>SR BAF (bojové patrolování v okolí letiště Bagram)</li>
        </ul>
      </>
    ),
    photos: [
      "/assets/images/zahranicni-operace/cover/afghanistan-1.jpg",
      "/assets/images/zahranicni-operace/cover/afghanistan-2.jpg",
    ],
  },
  {
    country: "Mali",
    flag: "mali",
    situation: (
      <>
        <p>
          Základní dělící linie v Mali se, už od získání samostatnosti na
          koloniální Francii v roce 1960, táhne mezi většinovými Bambary
          žijícími na jihu a menšinovými Tuarégy kočujícími na severu. Problém
          je to historicko-etnický, jelikož Tuaregové ovládali karavany s otroky
          napříč Saharou, přičemž otroky byli především Bambarové. Ti se však v
          novém státě stali vládnoucí třídou, což způsobuje opakované povstání
          Tuaregů proti centrální vládě.
        </p>
        <p>
          Situace v roce 2013, kdy byla Francie nucena intervenovat v rámci
          Operace SERVAL ve prospěch malijské vlády proti tuarežským povstalcům,
          byla o to obtížnější, jelikož se mohli Tuarégové v důsledku tzv.
          Arabského &ldquo;jara&rdquo; opřít o pomoc islamistů z okolních států.
        </p>
      </>
    ),
    task: (
      <>
        <p>
          Výsadkáři byli v rámci mise Evropské unie nasazeni na pomoc vládě Mali
          od samého počátku v roce 2013. Zajímavostí bylo, že pro první
          kontingent uplynulo od prvních úvah vlády ČR po nasazení prvního
          výsadkáře jen několik málo týdnů, což plně prověřilo bojovou
          připravenost útvaru k vyslání jednotky bez možnosti cílené přípravy.
        </p>

        <p>
          Charakter úkolů se od prvního nasazení zásadně nezměnil, zvětšil se
          jen jeho rozsah. Hlavní tíha úkolů stále spočívá v úkolech ostrahy
          základen a konvojů (zejména v Bamaku), přičemž část jednotky se podílí
          na výcviku ozbrojených složek Mali (zejména výcvikové středisko
          Koulikouro).
        </p>
      </>
    ),
    photos: [
      "/assets/images/zahranicni-operace/cover/mali-1.jpg",
      "/assets/images/zahranicni-operace/cover/mali-2.jpg",
    ],
  },
  {
    country: "Irák",
    flag: "iraq",
    situation: (
      <>
        <p>
          Situace v Iráku je nestabilní přinejmenším už od Irácko-Iránské války
          mezi lety 1980-88. Po krátkém období klidu Irák v roce 1990 vojensky
          obsadil sousední Kuvajt a prohlásil ho za svou provincii. Následovala
          vojenská intervence OSN vedená Spojenými státy americkými, která v
          Operace POUŠTNÍ BOUŘE Kuvajt osvobodila, avšak ponechala vládnoucí
          režim v Iráku v čele se Sadámem Husajnem u moci. To se změnilo až
          během tzv. Války proti teroru, kdy v roce 2003 intervenovala koalice
          vedené Spojenými státy Americkými proti samotnému iráckému režimu
          strany Baas, který svrhla.
        </p>
        <p>
          Hlavní štěpná linie, kterou dovedně využívají povstalci, je
          náboženská. Menšinoví Sunité byli za minulého režimu vládnoucí třídou,
          zatímco většinoví Šíité patřili mezi ovládané. To se po svržení režimu
          strany Baas změnilo, což nelibě nese dřívější vládnoucí menšina.
        </p>
      </>
    ),
    task: (
      <>
        <p>
          Ačkoliv jednotlivci ze 71. úderného výsadkového praporu se účastnili
          už první války v Zálivu jakožto součást Operace POUŠTNÍ BOUŘE v roce
          1990/91, kdy zodpovídali za ochranu nasazené československé
          protichemické jednotky, první nasazení organické jednotky se datuje až
          do druhé války v Zálivu jako součást Operace TRVALÁ SVOBODA v letech
          2002/03.
        </p>

        <p>
          Nejprve četa ochrany, postavená na základě 3. výsadkové čety, 1.
          výsadkové roty, poskytovala bojové zajištění prostoru dekontaminace a
          zabezpečovala doprovody humanitárních konvojů do Iráku.
        </p>
        <p>
          Tu vystřídala četa ochrany, postavená na základě 1. výsadkové čety, 1.
          výsadkové roty, poskytující bojové zajištění prostoru rozmístění 7.
          polní nemocnice ve městě Basra na jihu Iráku.
        </p>
      </>
    ),
    photos: [
      "/assets/images/zahranicni-operace/cover/irak-1.jpg",
      "/assets/images/zahranicni-operace/cover/irak-2.jpg",
    ],
  },
  {
    country: "Země bývalé Jugoslávie",
    flag: "yugoslavia",
    situation: (
      <>
        <p>
          Balkán byl vždy příslovečným sudem střelného prachu a Jugoslávie
          (jejíž původní název &ldquo;Království Srbů, Chorvatů a
          Slovinců&rdquo; napovídá, o jak mnohonárodnostní celek se jednalo),
          rozhodně nebyla výjimkou.
        </p>
        <p>
          Po skončení 2. světové války se sice podařilo tehdejšími partyzánskému
          vůdci Josipovi Brozovi Titovi utlumit národnostní tenze v rámci
          Jugoslávie, ale hospodářské problémy a sílící moc svazových republik
          na úkor centrální vlády po jeho smrti daly těmto tenzím nový život. Po
          sérii válek se bývalá Jugoslávie rozpadla na nezávislé státy Srbsko,
          Chorvatsko, Slovinsko, Bosna a Hercegovina, Makedonie, Černá Hora a
          Kosovo.
        </p>
        <p>
          Ačkoliv je bezpečnostní situace po několika vojenských intervencí
          západního společenství v současné době klidná, na charakteru regionu a
          jeho specificích se nic nezměnilo.
        </p>
      </>
    ),
    task: (
      <>
        <p>
          I když jednotlivci z řad 43. výsadkového mechanizovaného praporu byli
          nasazeni na území bývalé Jugoslávie již v pozorovatelských misích OSN
          UNPROFOR před uzavřením Daytonských mírových dohod, hlavní tíha
          nasazení přišla až v rámci misí IFOR, SFOR a SFOR II. Právě tato
          nasazení významně předurčila další směřování útvaru. Dokázala
          vyselektovat budoucí velitelské kádry a zároveň znamenala řadu
          prvenství pro AČR jako takovou. Nasazení v misi SFOR II v roce 2000
          bylo totiž vůbec první nasazení profesionálního útvaru AČR do
          zahraniční mise, a to pod velením budoucího NGŠ podplukovníka Aleše
          Opaty.
        </p>

        <p>
          Ojedinělou zahraniční misí bylo nasazením 3. výsadkové roty pod
          velením kapitána Oldřicha Nápravníka do Operace ESSENTIAL HARVEST v
          roce 2001 na území Makedonie. Po urychleném vzdušném přesunu z České
          Republiky do Skopje zajišťovala jednotka proces výběru zbraní od
          albánských povstalců po nedávné občanské válce.
        </p>
        <p>
          Další mísí, která formovala útvar až do zahájení operačního nasazení v
          Afghánistánu, bylo opakované nasazení v misi KFOR na území Kosova.
          Charakter nasazení spočíval zejména v provádění patrolovací činnosti a
          poskytování bezpečnosti etnickým menšinám.
        </p>
      </>
    ),
    photos: [
      "/assets/images/zahranicni-operace/cover/jugoslavie-1.jpg",
      "/assets/images/zahranicni-operace/cover/jugoslavie-2.jpg",
    ],
  },
];

const DeploymentPage = () => {
  return (
    <Layout>
      <Head>
        <title>Zahraniční operace - 43. výsadkový pluk</title>
        <meta
          name='description'
          content='Výsadkáři byli a jsou nasazováni všude po světě. Informace o jejich nasazeních a plněných úkolech.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout.Intro
        title='Zahraniční operace'
        backgroundImage='/assets/images/zahranicni-operace/intro.jpg'
      />

      <Layout.Content>
        <div className='h-[32rem] overflow-hidden relative'>
          <div className='absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-stone-900 to-transparent'></div>
          <div className='absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-stone-900 to-transparent'></div>
          <ComposableMap
            projection='geoMercator'
            projectionConfig={{
              center: [15, 18],
              scale: 400,
            }}
          >
            <Geographies geography={getUrlWorld}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: countryBackground(geo.id),
                        stroke: "#1c1917",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: countryBackground(geo.id),
                        stroke: "#1c1917",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      pressed: {
                        fill: countryBackground(geo.id),
                        stroke: "#1c1917",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
            <Line
              from={[15.797342, 49.934947]}
              to={[67.7034313, 33.9340384]}
              stroke='#b3ccd8'
              strokeWidth={1}
              strokeLinecap='round'
            />
            <Line
              from={[15.797342, 49.934947]}
              to={[-3.9861092, 17.5739347]}
              stroke='#b3ccd8'
              strokeWidth={1}
              strokeLinecap='round'
            />
            <Line
              from={[15.797342, 49.934947]}
              to={[43.6847595, 33.2209265]}
              stroke='#b3ccd8'
              strokeWidth={1}
              strokeLinecap='round'
            />
            <Line
              from={[15.797342, 49.934947]}
              to={[21.0001, 42.5833]}
              stroke='#b3ccd8'
              strokeWidth={1}
              strokeLinecap='round'
            />
            <Line
              from={[15.797342, 49.934947]}
              to={[17.6721508, 43.9165389]}
              stroke='#b3ccd8'
              strokeWidth={1}
              strokeLinecap='round'
            />
            <Line
              from={[15.797342, 49.934947]}
              to={[21.743258, 41.6137143]}
              stroke='#b3ccd8'
              strokeWidth={1}
              strokeLinecap='round'
            />
            <Line
              from={[15.797342, 49.934947]}
              to={[19.696058, 48.6737532]}
              stroke='#b3ccd8'
              strokeWidth={1}
              strokeLinecap='round'
            />
          </ComposableMap>
        </div>

        <div className='flex flex-col gap-10 p-10'>
          {deployments.map((deployment) => (
            <Deployment key={deployment.country} {...deployment} />
          ))}
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default DeploymentPage;
