import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Intro />
      <main className='container mx-auto bg-stone-900'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
