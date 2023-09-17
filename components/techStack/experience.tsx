
import Image from "next/image";
import { ReactElement } from "react";
import uniqid from "uniqid";
import bootstrap from "../../public/assets/bootstrap.png";
import c from "../../public/assets/c.svg";
import css from "../../public/assets/css3.svg";
import expressJs from "../../public/assets/express.png";
import git from "../../public/assets/git.svg";
import html from "../../public/assets/html5.svg";
import javaScript from "../../public/assets/javascript.png";
import mongoDd from "../../public/assets/mongodb.svg";
import mongoose from "../../public/assets/mongoose.png";
import mysql from "../../public/assets/mysql.png";
import nestjs from "../../public/assets/nestjs.svg";
import next from "../../public/assets/next-js.svg";
import nodeJs from "../../public/assets/nodejs.svg";
import postgre from "../../public/assets/postgre.png";
import react_Query from "../../public/assets/react-query.svg";
import react from "../../public/assets/react.svg";
import redux from "../../public/assets/redux.svg";
import sql from "../../public/assets/sql.png";
import tailwindCss from "../../public/assets/tailwindcss.svg";
import typeorm from "../../public/assets/typeorm.svg";
import typeScript from "../../public/assets/typescript.svg";
import ejs from "../../public/assets/ejs.png";
import jwt from "../../public/assets/jwt.png";
import rest_api from "../../public/assets/rest-api.png";
import netlify from "../../public/assets/netlify.png";
import vercel from "../../public/assets/Vercel.png";
import fireBase from "../../public/assets/firebase.png";





function Experience() {
    interface obj {
        id: string;
        img: ReactElement;
        title: string;
        sub: string;
    }

    const objArr: obj[] = [
        {
            id: uniqid(),
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
            id: uniqid(),
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
            id: uniqid(),
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
            id: uniqid(),
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
            id: uniqid(),
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
            id: uniqid(),
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
            id: uniqid(),
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
            id: uniqid(),
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
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={react_Query}
                        alt="logo"
                        className="h-20 w-16 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "React Query",
            title: "library",
        },
        {
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={redux}
                        alt="logo"
                        className="h-20 w-16 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "Redux Toolkit",
            title: "library",
        },
        {
            id: uniqid(),
            img: (
                <>
                    <Image src={next} alt="logo" className="h-20 w-16 object-contain" />
                </>
            ),
            sub: "next JS",
            title: "framework",
        },
        {
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={jwt}
                        alt="logo"
                        className="h-20 w-16 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "JWT",
            title: "Token base authorization ",
        },
        {
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={rest_api}
                        alt="logo"
                        className="h-20 w-16 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "REST-API",
            title: "Architecture",
        },
        {
            id: uniqid(),
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
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={ejs}
                        alt="logo"
                        className="h-20 w-16 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "EJS",
            title: "Template engine",
        },
        {
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={nestjs}
                        alt="logo"
                        className="h-20 w-16 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "Nest JS",
            title: "framework",
        },
        {
            id: uniqid(),
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
            id: uniqid(),
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
        }, {
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={typeorm}
                        alt="logo"
                        className="h-20 w-16 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "TypeOrm",
            title: "ORM",
        },
        {
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={sql}
                        alt="logo"
                        className="h-20 w-16 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "SQL",
            title: "Query Language",
        },
        {
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={postgre}
                        alt="logo"
                        className="h-20 w-16 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "Postgre",
            title: "Data Base",
        },
        {
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={mysql}
                        alt="logo"
                        className="h-20 w-16 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "Mysql",
            title: "Data Base",
        },
        {
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={fireBase}
                        alt="logo"
                        className="h-20 w-16 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "FireBase",
            title: "Data Base",
        },
        {
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={netlify}
                        alt="logo"
                        className="h-14 w-12 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "Netlify",
            title: "web hosting",
        },
        {
            id: uniqid(),
            img: (
                <>
                    <Image
                        src={vercel}
                        alt="logo"
                        className="h-20 w-16 object-contain rounded-3xl"
                    />
                </>
            ),
            sub: "Vercel",
            title: "web hosting",
        },
        {
            id: uniqid(),
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
            id: uniqid(),
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
        <div className="flex flex-col mb-12 h-full pt-8">
            <div className=" text-center pt-[6rem]">
                <h2 className=" text-6xl font-bold">Teck-Stack</h2>
                <p className=" text-xl text-indigo-700 font-bold capitalize">my favorite tools</p>
            </div>
            <div className="p-4 flex flex-col gap-y-8 mb-4">
                <div className="mt-4">
                    <h2 className=" text-2xl inline font-bold text-black  pb-4 dark:text-white border-b-4 border-b-black dark:border-b-white">
                        Experience
                    </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-semibold text-left mt-8 px-4">
                    Here i have some technologies which are i used daily.
                </p>
            </div>
            <div className="grid gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
                {objArr.map(({ id, img, sub, title }) => {
                    return (
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
                    );
                })}
            </div>
        </div>
    )
}



export default Experience;

