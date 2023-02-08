import { ReactNode } from "react";

import Footer, {
  Social,
  Link,
  AboutUs,
  ExternalLinks,
  Contact,
  Bottom,
} from "@/components/Footer";
import Header, { MenuItem } from "@/components/Header";
import Intro from "@/components/Intro";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
  YoutubeIcon,
} from "@/components/Icons";

interface LayoutProps {
  children: ReactNode;
}

interface LayoutContentProps {
  children: ReactNode;
}

const menuItems: Array<MenuItem> = [
  {
    title: "Historie",
    url: "/historie",
    backgroundImage: "/assets/images/menu/historie.jpg",
  },
  {
    title: "Zahraniční operace",
    url: "/zahranicni-operace",
    backgroundImage: "/assets/images/menu/zahranicni-operace.jpg",
  },
  {
    title: "Velitelé",
    url: "/velitele",
    backgroundImage: "/assets/images/menu/velitele.jpg",
  },
  {
    title: "Uniforma",
    url: "/uniforma",
    backgroundImage: "/assets/images/menu/uniforma.jpg",
  },
  {
    title: "Cháron",
    url: "/charon",
    backgroundImage: "/assets/images/menu/charon.jpg",
  },
];

const socialLinks: Array<Social> = [
  {
    url: "https://www.facebook.com/43vysadkovypluk/",
    icon: FacebookIcon,
  },
  {
    url: "https://www.instagram.com/43vysadkovypluk/",
    icon: InstagramIcon,
  },
  {
    url: "https://www.youtube.com/channel/UCMgzkkvpqrsFJaTP3B9Msdg",
    icon: YoutubeIcon,
  },
  {
    url: "https://open.spotify.com/show/4OQHOu6h4MREb38RN1jV92?si=dMXDge8tRlCCeMfpKkYkbQ",
    icon: SpotifyIcon,
  },
];

const externalLinks: Array<Link> = [
  {
    title: "43. výsadkový pluk",
    url: "https://43vysadkovypluk.cz/",
  },
  {
    title: "Aktivní záloha",
    url: "https://az.43vysadkovypluk.cz/",
  },
  {
    title: "Tradice výsadkářů",
    url: "https://tradice.43vysadkovypluk.cz/",
  },
  {
    title: "Memoriál parašutistů",
    url: "http://www.memorialparasutistu.cz/",
  },
];

const aboutUsLinks: Array<Link> = [
  {
    title: "Historie",
    url: "/historie",
  },
  {
    title: "Zahraniční operace",
    url: "/zahranicni-operace",
  },
  {
    title: "Velitelé",
    url: "/velitele",
  },
  {
    title: "Uniforma",
    url: "/uniforma",
  },
  {
    title: "Cháron",
    url: "/charon",
  },
];

const Content = ({ children }: LayoutContentProps) => {
  return <main className='container mx-auto bg-stone-900'>{children}</main>;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Header menuItems={menuItems} activeItem={router.route} />
      {children}
      <Footer>
        <div className='grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3'>
          <AboutUs links={aboutUsLinks} />
          <ExternalLinks links={externalLinks} />
          <Contact />
        </div>
        <Bottom socialLinks={socialLinks} />
      </Footer>
    </>
  );
};

Layout.Intro = Intro;
Layout.Content = Content;

export default Layout;
