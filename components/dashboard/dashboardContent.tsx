import { RootState } from "@/redux/store";
import Link from "next/link";
import { FaBlog, FaShopify } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { useSelector } from "react-redux";

import uniqId from "uniqid";

function DashboardContent() {
  const client= useSelector((state: RootState)=> state.authSclice.user);
  const items = [
    {
      id: uniqId(),
      icone: <FaShopify className=" text-indigo-800" size={32} />,
      category: "E-Commerce",
      about: "Let's shop somethink.",
      link: "/ecommerce",
    },
    {
      id: uniqId(),
      icone: <FaBlog className=" text-indigo-800" size={32} />,
      category: "Blog",
      about: "Add some awsome memory.",
      link: "/blog",
    },
  ];
  return (
    <>
      <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-16 bg-indigo-500 overflow-hidden">
        {/* Glow */}
        <div className="absolute pointer-events-none" aria-hidden="true">
          <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="50%"
                id="ill-a"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#FFF" stopOpacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <circle
              cx="588"
              cy="650"
              r="256"
              transform="translate(-332 -394)"
              fill="url(#ill-a)"
              fillRule="evenodd"
              opacity=".48"
            />
          </svg>
        </div>
        {/* Illustration */}
        <div className="absolute pointer-events-none" aria-hidden="true">
          <svg
            width="1280"
            height="361"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ill2-b">
                <stop stopColor="#A5B4FC" offset="0%" />
                <stop stopColor="#818CF8" offset="100%" />
              </linearGradient>
              <linearGradient
                x1="50%"
                y1="24.537%"
                x2="50%"
                y2="100%"
                id="ill2-c"
              >
                <stop stopColor="#4338CA" offset="0%" />
                <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
              </linearGradient>
              <path id="ill2-a" d="m64 0 64 128-64-20-64 20z" />
              <path id="ill2-e" d="m40 0 40 80-40-12.5L0 80z" />
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="rotate(51 -92.764 293.763)">
                <mask id="ill2-d" fill="#fff">
                  <use xlinkHref="#ill2-a" />
                </mask>
                <use fill="url(#ill2-b)" xlinkHref="#ill2-a" />
                <path
                  fill="url(#ill2-c)"
                  mask="url(#ill2-d)"
                  d="M64-24h80v152H64z"
                />
              </g>
              <g transform="rotate(-51 618.151 -940.113)">
                <mask id="ill2-f" fill="#fff">
                  <use xlinkHref="#ill2-e" />
                </mask>
                <use fill="url(#ill2-b)" xlinkHref="#ill2-e" />
                <path
                  fill="url(#ill2-c)"
                  mask="url(#ill2-f)"
                  d="M40.333-15.147h50v95h-50z"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="relative w-full max-w-2xl mx-auto text-center">
          <div className="mb-5">
            <h1 className="text-2xl md:text-3xl text-white font-bold">
              👋 Welcome back {client?.firstName} 🥳
            </h1>
          </div>
          <form className="relative flex justify-center text-center">
            {/* <label htmlFor="action-search" className="sr-only">Seaaaaaaaaaaaarch</label> */}
            <input
              id="action-search"
              className="form-input pl-9 py-3 text-gray-500 font-semibold focus:border-slate-300 w-full text-lg"
              placeholder="What are you looking for?"
              type="search"
              onChange={() => {}}
            />
            <button
              type="button"
              className="absolute top-2 left-auto right-1 group"
              aria-label="Search"
            >
              <FcSearch size={38} />
            </button>
          </form>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* Sections */}
        <div className="space-y-8">
          <div>
            <div className="mb-5">
              <h2 className="text-xl text-slate-50 font-bold">
                Popular Topics
              </h2>
            </div>
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:sidebar-expanded:grid-cols-2 xl:sidebar-expanded:grid-cols-4 gap-6">
              {/* Items */}
              {/*  */}
              {items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-indigo-200 text-center rounded-md p-5 dark:shadow-gray-400 shadow-gray-800 hover:shadow-none shadow-md hover:scale-105 duration-300 "
                  >
                    <div className="flex flex-col h-full">
                      <div className="grow mb-2">
                        {/* Icon */}
                        <div className="inline-flex justify-center items-center w-12 h-12 relative rounded-full bg-indigo-50">
                          {item.icone}
                          {/* TODO */}
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-bold text-indigo-800 mb-1">
                          {item.category}
                        </h3>
                        <div className="text-sm font-semibold text-indigo-500">
                          {item.about}
                        </div>
                      </div>
                      {/* Link */}
                      <div>
                        <Link
                          className=" text-md font-medium outline-none text-slate-50 border-2 rounded-md bg-indigo-600 hover:bg-indigo-700 py-1 flex items-center justify-center gap-x-2 "
                          href={`${item.link}`}
                        >
                          {" "}
                          View <HiChevronDoubleRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardContent;
