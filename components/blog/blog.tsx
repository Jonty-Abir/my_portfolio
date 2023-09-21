import Loading from "@/components/loading/loading";
import { findAllPost } from "@/helper/blog.helper";
import { IPost, IProps } from "@/interface/interface";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FaComments } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { IoIosArrowUp } from "react-icons/io";
import SwiperCompo from "../shared/swiper";
import FullStack from "./category/FullStack";
import Skeleton from "./category/Skeleton";

export default function Blog({
  accessToken,
  refreshToken,
  user,
  isAuthenticate,
}: IProps) {
  const { error, isLoading, data, isError } = useQuery(["all-post"], () =>
    findAllPost(accessToken, refreshToken)
  );
  if (isLoading) return <Loading />;
  if (!data) {
    return <h3 className="isError">Some think went wrong!</h3>;
  }

  const posts: IPost[] = data;
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
        {/*  ==============================
                  POST sections        
             =============================*/}

        <div className="w-full space-y-4 mb-1">
          <SwiperCompo />
          <div className="text-sm font-semibold leading-tight text-purple-700">
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

      <div className="mt-8 bg-gray-50 dark:bg-slate-400">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6  lg:px-8">
          <div className="flex flex-col justify-between md:flex-row">
            <div>
              <div className="text-4xl font-semibold leading-10 text-gray-900">
                Latest writings
              </div>
              <div className="text-xl leading-loose text-gray-600 dark:text-gray-700 font-semibold">
                The latest news, technologies, and resources from our team.
              </div>
            </div>
            <div className="mt-8 md:mt-0 ml-auto">
              <Link
                href={"/blog#letsUp"}
                className="rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-indigo-800  inline-flex justify-center items-center"
              >
                <IoIosArrowUp size={32} className="" />
              </Link>
            </div>
          </div>
          <div className="grid gap-4 gap-y-8 py-6 md:grid-cols-2 lg:grid-cols-3">
            {posts &&
              posts
                .filter((e, i) => i < 3)
                .map((post, i) => (
                  <div
                    key={post.title}
                    className="flex flex-col justify-between space-y-2 px-2 py-4 rounded-md bg-indigo-200 pb-8"
                  >
                    <div className="space-y-2">
                      <Link href={`/blog/${post._id}`}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/blogs/poster/${post.img}`}
                          className="aspect-video w-full cursor-pointer rounded-md"
                          alt="poster"
                          width={300}
                          height={200}
                        />
                      </Link>
                      <div className="w-full text-sm flex items-center gap-x-2 font-semibold leading-tight text-gray-600">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/blogs/author/${post.author.img}`}
                          width={25}
                          height={20}
                          alt="avtar_user"
                          className="w-6 h-6 ring-2 ring-green-500 rounded-full"
                        />
                        {post.author.name} <FcClock size={22} />{" "}
                        {post.published}
                        <div className=" inline-flex gap-x-1">
                          <FaComments size={20} />
                          comments:0
                        </div>
                      </div>
                      <div>
                        <div className="flex-1 text-2xl font-semibold px-3 pt-3 text-gray-900">
                          {post.title}
                        </div>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                ))}
          </div>
        </div>
      </div>
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
