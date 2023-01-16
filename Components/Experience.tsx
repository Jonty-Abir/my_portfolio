import Image from "next/image";
import { ReactElement } from "react";
import bootstrap from "../public/assets/bootstrap.png";
import c from "../public/assets/c.svg";
import css from "../public/assets/css3.svg";
import expressJs from "../public/assets/express.png";
import git from "../public/assets/git.svg";
import html from "../public/assets/html5.svg";
import javaScript from "../public/assets/javascript.png";
import mongoDd from "../public/assets/mongodb.svg";
import mongoose from "../public/assets/mongoose.png";
import next from "../public/assets/next.svg";
import nodeJs from "../public/assets/nodejs.svg";
import react from "../public/assets/react.svg";
import tailwindCss from "../public/assets/tailwindcss.svg";
import typeScript from "../public/assets/typescript.svg";

function Experience() {
  interface obj {
    id: number;
    img: ReactElement;
    title: string;
    sub: string;
  }
  const objArr: obj[] = [
    {
      id: 1,
      img: (
        <>
          <Image
            src={html}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "HTML",
      title: "web design",
    },
    {
      id: 2,
      img: (
        <>
          <Image
            src={css}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "CSS",
      title: "web design",
    },
    {
      id: 3,
      img: (
        <>
          <Image
            src={bootstrap}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "Bootstrap",
      title: "Framework",
    },
    {
      id: 4,
      img: (
        <>
          <Image
            src={tailwindCss}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "TailwindCss",
      title: "Framework",
    },
    {
      id: 5,
      img: (
        <>
          <Image
            src={javaScript}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "JavaScript",
      title: "programing language",
    },
    {
      id: 6,
      img: (
        <>
          <Image
            src={typeScript}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "TypeScript",
      title: "programing language",
    },
    {
      id: 7,
      img: (
        <>
          <Image
            src={nodeJs}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "Node JS",
      title: "Runtime",
    },
    {
      id: 8,
      img: (
        <>
          <Image
            src={react}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "React JS",
      title: "library",
    },
    {
      id: 9,
      img: (
        <>
          <Image src={next} alt="logo" className="h-20 w-16 object-contain" />
        </>
      ),
      sub: "next JS",
      title: "framework",
    },

    {
      id: 10,
      img: (
        <>
          <Image
            src={expressJs}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "Express JS",
      title: "framework",
    },
    {
      id: 11,
      img: (
        <>
          <Image
            src={mongoDd}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "MongoDB",
      title: "DataBase",
    },
    {
      id: 12,
      img: (
        <>
          <Image
            src={mongoose}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "Mongooose",
      title: "web development",
    },
    {
      id: 13,
      img: (
        <>
          <Image
            src={git}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "Git",
      title: "software development kit",
    },
    {
      id: 14,
      img: (
        <>
          <Image
            src={c}
            alt="logo"
            className="h-20 w-16 object-contain rounded-3xl"
          />
        </>
      ),
      sub: "C",
      title: "programing language",
    },
  ];
  return (
    <div className="flex flex-col mb-12">
      <div className="p-4 flex flex-col gap-8 mb-4">
        <div>
          <h2 className=" text-2xl inline font-bold text-black  pb-4 dark:text-white border-b-4 border-b-black dark:border-b-white">
            Technology
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          there are the technologies i have worked with.
        </p>
      </div>
      <div className="grid gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
        {objArr.map(({ id, img, sub, title }) => {
          return (
            <>
              <div
                key={id}
                className=" hover:ring-2 hover:ring-green-400 h-auto px-6 py-3 rounded-md w-full flex gap-x-6 justify-start items-center dark:shadow-gray-400 shadow-gray-800 hover:shadow-none shadow-md bg-gray-300 dark:bg-gray-700 hover:scale-105 duration-300 "
              >
                <div>
                  {/* img */}
                  {img}
                </div>
                <div className="flex flex-col gap-y-1 justify-center items-start">
                  <h2 className="text-green-500 font-extrabold text-lg capitalize">
                    {sub}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 font-bold capitalize">
                    {title}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
