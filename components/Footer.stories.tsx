import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer, {
  Social,
  Link,
  AboutUs,
  ExternalLinks,
  Contact,
  Bottom,
} from "./Footer";
import { FacebookIcon, InstagramIcon, SpotifyIcon, YoutubeIcon } from "./Icons";

export default {
  title: "Components",
  component: Footer,
  subcomponents: { AboutUs, ExternalLinks, Contact, Bottom },
} as ComponentMeta<typeof Footer>;

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

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args}>
    <div className='grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3'>
      <AboutUs links={aboutUsLinks} />
      <ExternalLinks links={externalLinks} />
      <Contact />
    </div>
    <Bottom socialLinks={socialLinks} />
  </Footer>
);

export const Footer__ = Template.bind({});

Footer__.args = {};
