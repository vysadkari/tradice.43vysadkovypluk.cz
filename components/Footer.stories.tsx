import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer, {
  Social,
  Link,
  AboutUs,
  ExternalLinks,
  Contact,
  ContactRecord,
  Bottom,
} from "./Footer";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  PhoneIcon,
  SpotifyIcon,
  YoutubeIcon,
} from "./Icons";

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

const contacts: Array<ContactRecord> = [
  {
    icon: LocationIcon,
    content: (
      <a
        href='https://mapy.cz/s/bamumocava'
        target='_blank'
        rel='noreferrer'
        className='flex items-center hover:underline'
      >
        <address className='not-italic'>
          Obce Ležáků 14
          <br />
          573 01 Chrudim
        </address>
      </a>
    ),
  },
  {
    icon: PhoneIcon,
    content: (
      <address className='not-italic'>
        <a className='hover:underline' href='tel:+420973248239'>
          973 248 239
        </a>{" "}
        <span className='text-gray-500'>(personální oddělení)</span>
        <br />
        <a className='hover:underline' href='tel:+420776115033'>
          776 115 033
        </a>{" "}
        <span className='text-gray-500'>(tiskový mluvčí)</span>
      </address>
    ),
  },
  {
    icon: EmailIcon,
    content: (
      <address className='not-italic'>
        <a href='mailto:info@43vysadkovypluk.cz' className='hover:underline'>
          info@43vysadkovypluk.cz
        </a>
        <br />
        <a href='mailto:az@43vysadkovypluk.cz' className='hover:underline'>
          az@43vysadkovypluk.cz
        </a>
      </address>
    ),
  },
];

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args}>
    <div className='grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3'>
      <AboutUs links={aboutUsLinks} />
      <ExternalLinks links={externalLinks} />
      <Contact contacts={contacts} />
    </div>
    <Bottom socialLinks={socialLinks} />
  </Footer>
);

export const Footer__ = Template.bind({});

Footer__.args = {};
