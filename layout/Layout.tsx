import { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header, { MenuItem } from "@/components/Header";
import Intro from "@/components/Intro";
import { useRouter } from "next/router";

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

const Content = ({ children }: LayoutContentProps) => {
  return <main className='container mx-auto bg-stone-900'>{children}</main>;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Header menuItems={menuItems} activeItem={router.route} />
      {children}
      <Footer />
    </>
  );
};

Layout.Intro = Intro;
Layout.Content = Content;

export default Layout;
