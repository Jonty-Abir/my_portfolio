import Image from "next/image";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";
import img from "../public/assets/hero-min.jpg";

export default function Content() {
  return (
    <div id="home" className="h-full w-screen flex items-center">
      <div className="max-w-screen-2xl h-full flex flex-col items-center px-4 md:flex-row mt-28 md:mt-40 p-4 md:mx-18 lg:mx-[10%] 2xl:mx-96 xl:mx-56">
        <div className="h-full flex flex-col justify-start">
          <div>
            <h2 className="p-4 text-4xl dark:text-white font-bold capitalize text-gray-600">
              i{"'"}m a full stack web developer
            </h2>
          </div>
          <div className="flex justify-start">
            <p className="text-justify p-4 text-gray-600 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              labore atque dolorem aspernatur asperiores id voluptas accusantium
              perferendis. Saepe corrupti recusandae minima culpa dolor quis
              pariatur voluptatem quidem perferendis expedita.
            </p>
          </div>
          <div className="p-4">
            <Link href={"#portfolio"}>
              <style jsx>{`
                html {
                  scroll-behavior: smooth;
                }
              `}</style>
              <button className="group p-4 flex justify-start  text-white dark:text-white  w-fit px-4 py-2 hover:ring-4 hover:ring-green-500  rounded-md font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio{" "}
                <span className="pl-1">
                  <AiOutlineDoubleRight
                    className="inline font-semibold group-hover:rotate-90 duration-200"
                    size={20}
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center px-4 md:m-0 mob-sm:mx-10 mob-sm:mt-2 w-[600] h-[500]">
          <Image
            src={img}
            alt="heroImg"
            width={600}
            height={500}
            className="bg-cover rounded-3xl ring-2 object-cover md:ring-4 ring-green-400 p-4 mob-sm:my-4 mob-sm:mx-10 mob-lg:w-3/5 sm:w-3/5 md:w-3/3 md:w-full lg:w-3/4"
            // style={{ borderRadius: "3.5rem" }}
          />
        </div>
      </div>
    </div>
  );
}
