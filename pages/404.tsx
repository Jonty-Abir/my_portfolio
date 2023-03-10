import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../Components/Footer";
function NotFound() {
  return (
    <>
      <Head>
        <title>Abir Santra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/favicone.png" />
      </Head>
      <div className="flex flex-col  w-full h-screen">
        <main className="w-screen h-full flex flex-col gap-y-4">
          <div className=" flex flex-col items-center justify-center h-full  text-white gap-6 p-4 ">
            <h2 className=" font-bold text-gray-500 dark:text-white text-xl md:text-3xl ">
              <code>Page Was Not Found {":("}</code>
            </h2>
            <div className="text-gray-700 dark:text-gray-500 font-semibold text-lg md:text-xl hover:underline group capitalize">
              <Link href="/" className=" group-hover:text-green-500">
                go back to home page.
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default NotFound;

// just for static genration
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
