import Loading from "@/components/loading/loading";
import { findAllPost } from "@/helper/blog.helper";
import { IPost, IProps } from "@/interface/interface";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { FaComments } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { IoIosArrowUp } from "react-icons/io";
import uniqId from "uniqid";
import SwiperCompo from "../shared/swiper";

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
    console.log(data);
    return <h2 className="isError">Some think went wrong!</h2>;
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
            <div className="ace-x-2 flex w-80 items-center space-x-2 overflow-hidden rounded-lg border border-gray-300  bg-white px-3.5 shadow">
              <MagnifyingGlassIcon className="h-5 w-5 rounded-lg" />
              <input
                type="text"
                className="flex-1 bg-white  py-3 text-base leading-normal text-gray-500 outline-none focus:outline-none focus:ring-0 "
                placeholder="What are you looking for?"
              />
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
          <div className="flex w-full items-end">
            <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-gray-700">
              Full-Stack
            </div>
            <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-gray-700">
              Design
            </div>
            <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-gray-700">
              Software Engineering
            </div>
            <div className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-gray-700">
              Other{"'s"}
            </div>
          </div>
        </div>
        <hr />

        {/* =========================
                   Current Post
           ==========================*/}

        <div
          id="letsUp"
          className="mt-4 grid gap-4 gap-y-8 py-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {posts &&
            posts.map((post, i) => {
              const data = post.description.split(" ");
              const blogDescription = data.filter((v, i) => i <= 20).join(" ");
              return (
                <div
                  key={post.title}
                  className="flex flex-col justify-between space-y-2  px-2 py-4 rounded-md bg-indigo-100 pb-8"
                >
                  <div className="space-y-2 ">
                    <Link href={`/blog/${post._id}`}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/blogs/poster/${post.img}`}
                        className="aspect-video w-full rounded-md cursor-pointer"
                        alt=""
                        width={400}
                        height={300}
                      />
                    </Link>
                    <div className="w-full text-sm flex items-center gap-x-2 font-semibold leading-tight text-gray-600">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/blogs/author/${post.author.img}`}
                        width={25}
                        height={20}
                        alt="avtar_user"
                        className="w-6 h-6 ring-2 ring-green-500 rounded-full"
                      />{" "}
                      {post.author.name} <FcClock size={22} /> {post.published}
                      <div className=" inline-flex gap-x-1">
                        <FaComments size={20} />
                        comments: 0
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="flex-1 px-2 text-2xl font-semibold text-gray-900">
                        {post.title}
                      </div>
                    </div>
                    <div className="w-full px-2 text-base leading-normal text-gray-600 dark:text-gray-700 font-semibold">
                      {blogDescription}...
                    </div>
                  </div>
                  <div className=" flex items-center justify-between pt-8">
                    <div className="flex  space-x-3 ">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-center text-sm font-medium leading-tight ${
                          colors[i % +posts.length]
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                    {/*  */}
                    <Link
                      href={`/blog/${post._id}`}
                      className=" hover:underline btn bg-indigo-700"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>

        <hr className="my-6" />

        {/*  ==============================
                  pagination        
            =============================*/}

        <div className="flex w-full justify-center">
          <div className="mx-auto flex">
            <a
              href="#"
              className="mx-1 flex cursor-not-allowed items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 dark:border-gray-800 dark:text-gray-900"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </a>
            <div className="hidden md:flex ">
              {["1", "2", "3", "...", "9", "10"].map((page) => (
                <a
                  key={uniqId()}
                  href={`/blog/${page}`}
                  className="mx-1 flex items-center rounded-md border border-gray-400 te px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-900"
                >
                  {page}
                </a>
              ))}
            </div>
            <div className="mx-10 flex flex-1 items-center text-sm leading-tight text-gray-700 md:hidden">
              Page 1 of 10
            </div>

            <a
              href="#"
              className="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-900"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
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
