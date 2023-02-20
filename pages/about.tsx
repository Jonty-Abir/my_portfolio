import { GetStaticProps } from "next";
import Head from "next/head";
import About from "../Components/About";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
function about() {
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
      <main className="w-screen h-full flex flex-col gap-y-4">
        <NavBar />
        <div className="flex flex-col justify-center items-center mt-20">
          <div className="flex flex-col justify-center items-center capitalize dark:text-white text-4xl">
            <h2 className="text-green-500 font-extrabold">About me</h2>
            <About />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default about;

// just for static genration
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
