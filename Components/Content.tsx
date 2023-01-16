import Image from "next/image";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";
import img from "../public/assets/hero-min.jpg";

export default function Content() {
  return (
    <div id="home" className="h-screen md:h-screen w-screen flex items-center">
      <div className="max-w-screen-2xl h-auto flex flex-col items-start  px-4 md:flex-row mt-28  p-4 md:mx-18 lg:mx-[10%] 2xl:mx-96 xl:mx-56">
        <div className="h-full flex flex-col justify-center items-start">
          {/* heading */}
          <div>
            <h2 className="p-4 text-4xl dark:text-white font-bold capitalize text-gray-600">
              i{"'"}m Abir & web developer
            </h2>
          </div>
          {/* para */}
          <div className="flex flex-col justify-start p-4 gap-y-4">
            <p className="text-left leading-3 text-gray-600 dark:text-gray-400 text-lg font-semibold">
              Hi, am abir & a web developer | UI designer. Besides this i am
              undergraduate studen.
            </p>
          </div>
          {/* button */}
          <div className="p-4">
            <button className="group p-4 flex justify-start  text-white dark:text-white  w-fit px-4 py-2 hover:ring-4 hover:ring-green-500  rounded-md font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              <Link href={"#portfolio"}>
                <style jsx>{`
                  html {
                    scroll-behavior: smooth;
                  }
                `}</style>
                Portfolio{" "}
                <span className="pl-1">
                  <AiOutlineDoubleRight
                    className="inline font-semibold group-hover:rotate-90 duration-200"
                    size={20}
                  />
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center px-4 md:m-0 mob-sm:mx-10 mob-sm:mt-2 w-[600] h-[500] ">
          <Image
            src={img}
            alt="heroImg"
            width={300}
            height={300}
            className="bg-cover rounded-3xl ring-2 object-cover md:ring-4 ring-green-400 p-4 mob-sm:my-4 mob-sm:mx-10 mob-lg:w-3/5 sm:w-3/5 md:w-2/3  lg:w-3/4 hover:scale-105 duration-300"
            // style={{ width: "13rem" }}
          />
        </div>
      </div>
    </div>
  );
}
