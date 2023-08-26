import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import uniqid from "uniqid";

function ProjectCompo() {
  interface markup {
    id: string;
    image: ReactElement;
    title: string;
    about: string;
    technology: string[];
    link: string;
  }
  const markupArray: markup[] = [
    {
      id: uniqid(),
      image: (
        <>
          <Image
            src="/assets/pf1.jpg"
            width={600}
            height={600}
            alt="P_1"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
        </>
      ),
      title: "Our Family Chat App",
      about:
        "This is a real-time chat application. with token base authorization. inspired by @learnWithSumit ❤",
      technology: ["#express", "#scokit.io", "#ejs", "#jwt", "#mongoDB"],
      link: "https://ourfamilychatapp.onrender.com/",
    },
    {
      id: uniqid(),
      image: (
        <>
          <Image
            src="/assets/pf2.jpg"
            width={600}
            height={600}
            alt="p_2"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
        </>
      ),
      title: "weather app",
      about: "A weather app.  inspired by @thapaTechnical ❤",
      technology: ["#express", "#ejs"],
      link: "#",
    },
    {
      id: uniqid(),
      image: (
        <>
          <Image
            src="/assets/pf3.png"
            width={600}
            height={600}
            alt="p_3"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
        </>
      ),
      title: "mahapravu furniture",
      about:
        "A furniture shop. and implementing JWT authorization with REST-API. ",
      technology: ["#express", "#react", "#jwt", "#mongoDB"],
      link: "#",
    },
    {
      id: uniqid(),
      image: (
        <>
          <Image
            src="/assets/pf4.png"
            width={600}
            height={600}
            alt="p_4"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
        </>
      ),
      title: "Quize App",
      about:
        "This is a quize application and implementing authentication with FireBase authorization. inspired by @learnWithSumit ❤",
      technology: ["#express", "#react", "#jwt", "#fireBase"],
      link: "https://quize-app-by-abir.netlify.app/login",
    },
  ];
  return (
    <div>
      <div className="">
        <div className=" text-center mt-[6rem]">
          <h2 className=" text-6xl font-bold">Project</h2>
          <p className=" text-xl text-indigo-700 font-bold capitalize pt-2">
            my favorite project
          </p>
        </div>
        <div className="p-4 flex flex-col gap-y-8 mb-4">
          <div className="mt-4">
            <h2 className=" text-2xl inline font-bold text-black  pb-4 dark:text-white border-b-4 border-b-black dark:border-b-white">
              Project
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-semibold text-left mt-8 px-4">
            Chek out my project right here
          </p>
        </div>
      </div>
      {/* main parent */}
      <div
        className="space-y-4 pb-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 "
        id="portfolio"
      >
        {markupArray.map((markUp) => {
          {
            /* Card section */
          }
          return (
            <div
              key={markUp.id}
              className="w-[300px] hover:scale-105 duration-300 rounded-md border dark:shadow-gray-400 shadow-gray-800 hover:shadow-none shadow-md bg-slate-50"
            >
              {/* Image */}
              {markUp.image}
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-bold text-gray-800">
                  {/* Heading */}
                  {markUp.title.toUpperCase()} &nbsp;{" "}
                  <ArrowUpRight className="h-4 w-4" />
                </h1>
                <p className="mt-3 text-sm text-gray-600 text-left">
                  {/* about */}
                  {markUp.about}
                </p>
                <div className="mt-4">
                  {/* #Tags */}
                  {markUp.technology.map((v, i) => {
                    return (
                      <span
                        key={uniqid()}
                        className={`mb-2 mr-2 inline-block rounded-full  px-3 py-1 text-[10px] font-semibold ${
                          colors[i % markUp.technology.length]
                        }`}
                      >
                        {v}
                      </span>
                    );
                  })}
                </div>
                <Link href={markUp.link} target="_blank">
                  <button
                    type="button"
                    className="mt-4 mb-2 w-full rounded-md bg-indigo-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <span className="flex justify-center text- items-center gap-x-2">
                      {" "}
                      Get Link <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCompo;
const colors = [
  "text-pink-700 bg-pink-100",
  "text-green-700 bg-green-100",
  "text-indigo-700 bg-indigo-100",
  "text-red-700 bg-red-100",
  "text-cyan-700 bg-cyan-100",
  "text-yellow-700 bg-yellow-100",
  "text-gray-700 bg-gray-100",
  "text-slate-700 bg-slate-100",
  "text-orange-700 bg-orange-100",
  "text-teal-700 bg-teal-100",
];
