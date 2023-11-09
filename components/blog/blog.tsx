import { IProps } from "@/interface/interface";
import { Suspense, useRef } from "react";
import SwiperCompo from "../shared/swiper";
import FullStack from "./category/FullStack";
import Skeleton from "./category/Skeleton";
import LatestWriting from "./latestWriting";

export default function Blog({
  accessToken,
  refreshToken,
  user,
  isAuthenticate,
}: IProps) {
  const valueRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white dark:bg-slate-400 overflow-x-hidden ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Head */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-8 py-20">
            <div className=" text-center">
              <h2 className=" text-6xl font-bold uppercase">My Blogs</h2>
              <div className=" text-xl text-gray-700 font-bold">
                Latest news from my blog
              </div>
            </div>
          </div>
        </div>
        {/* POST SECTION */}
        <div className="w-full space-y-4 mb-1">
          <SwiperCompo />
          <div
            className="text-sm font-semibold leading-tight text-purple-700"
            ref={valueRef}
          >
            Abir Santra • 20 Jan 2023
          </div>
          <div className="text-3xl font-semibold leading-9 text-gray-900">
            Welcome to my blog section.
          </div>
          <div className="text-base leading-normal text-gray-600 dark:text-gray-700 font-semibold">
            Here we have few category. let{"'"}s explore this category.
          </div>

          {/* Category Section Start */}
          <div className="flex w-full items-end overflow-x-scroll lg:overflow-auto font-bold text-lg">
            <div className="cursor-pointer px-4 py-2  font-bold leading-normal text-gray-900 first:border-b-2 first:border-gray-700">
              FullStack
            </div>
            <div className="cursor-pointer px-4 py-2  font-bold leading-normal text-gray-900 first:border-b-2 first:border-gray-700">
              Design
            </div>
            <div className="cursor-pointer px-4 py-2  font-bold leading-normal text-gray-900 first:border-b-2 first:border-gray-700">
              SoftwareEngineering
            </div>
            <div className="cursor-pointer px-4 py-2  font-bold leading-normal text-gray-900 first:border-b-2 first:border-gray-700">
              Other{"'s"}
            </div>
          </div>
          {/* Category Section End */}
        </div>
        <hr />

        {/* Current Post */}
        <Suspense fallback={<Skeleton />}>
          <FullStack accessToken={accessToken} refreshToken={refreshToken} />
        </Suspense>
      </div>
      {/*  ==============================
                  Latest writings        
            =============================*/}
      <Suspense fallback={<Skeleton />}>
        <LatestWriting
          accessToken={accessToken}
          refreshToken={refreshToken}
          valueRef ={valueRef}
        />
      </Suspense>
    </div>
  );
}

Blog.displayName = "Blog";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

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
