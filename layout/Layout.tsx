import { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

interface LayoutProps {
  children: ReactNode;
}

interface LayoutContentProps {
  children: ReactNode;
}

const Content = ({ children }: LayoutContentProps) => {
  return <main className='container mx-auto bg-stone-900'>{children}</main>;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.Intro = Intro;
Layout.Content = Content;

export default Layout;
