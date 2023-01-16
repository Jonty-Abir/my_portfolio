import Head from "next/head";
import About from "../Components/About";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
function about() {
  return (
    <>
      <Head>
        <title>Abir Santra | About page </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/favicone.png" />
      </Head>
      <main className="w-screen h-full flex flex-col gap-y-4">
        <NavBar />
        <div className="flex flex-col justify-center items-center mt-20 mx-4">
          <div className="flex flex-col justify-center items-center capitalize  dark:text-white text-2xl">
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
