import { GetStaticProps } from "next";

import Head from "next/head";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
function experience() {
  return (
    <>
      <Head>
        <title>Abir Santra | About page </title>
        <meta charSet="UTF-8" />
        <meta name="description" content="abir santra profile" />
        <meta name="keywords" content="abir santra web developer " />
        <meta name="author" content="abir santra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/favicone.png" />
      </Head>
      <div className="flex flex-col  w-full h-full">
        <main className="w-screen h-full flex flex-col gap-y-4">
          <div className="mt-20">
            <div className="flex justify-center items-center">
              <h2 className="text-green-500 font-extrabold text-4xl capitalize ">
                experience
              </h2>
            </div>
            <br />
            <Experience />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default experience;

// just for static genration
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
