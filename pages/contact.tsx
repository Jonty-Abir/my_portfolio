import { GetStaticProps } from "next";
import Head from "next/head";
import ContactMe from "../Components/ContactMe";
import Footer from "../Components/Footer";
function contact() {
  return (
    <>
      <Head>
        <title>Abir Santra | Contact page </title>
        <meta charSet="UTF-8" />
        <meta name="description" content="abir santra profile" />
        <meta name="keywords" content="abir santra web developer " />
        <meta name="author" content="abir santra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/favicone.png" />
      </Head>
      <main className="w-screen h-full flex flex-col gap-y-4">
        <div className="flex flex-col justify-center mt-20">
          <div className="flex flex-col justify-center capitalize dark:text-white">
            <div className="flex flex-col font-bold text-4xl text-green-500 items-center">
              <h2 className="font-bold">Contact me</h2>
            </div>
            <br />
            <ContactMe />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default contact;

// just for static genration
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
