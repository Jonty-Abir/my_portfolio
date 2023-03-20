import { GetStaticProps } from "next";
import Head from "next/head";
// components
import About from "../Components/About";
import ContactUs from "../Components/ContactMe";
import Content from "../Components/Content";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Portfolio from "../Components/Porfolio";
import SocialIcone from "../Components/SciolIcone";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Abir Santra | Jonty | Developer | Web Developer</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="abir santra profile" />
        <meta name="keywords" content="abir santra web developer " />
        <meta name="author" content="abir santra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/favicone.png" />
      </Head>
      <main className="">
        <Content />
        <SocialIcone />
        <About />
        <Experience />
        <Portfolio />
        <ContactUs />
      </main>{" "}
      <Footer />
    </>
  );
}

// just for static genration
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
