import { findAllPost } from "@/helper/blog.helper";
import { IPost } from "@/interface/interface";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";
import { FaComments } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { IoIosArrowUp } from "react-icons/io";

function LatestWriting({
  accessToken,
  refreshToken,
  valueRef,
}: {
  accessToken: string;
  refreshToken: string;
  valueRef: RefObject<HTMLDivElement>;
}) {
  const { error, isLoading, data, isError } = useQuery(
    ["all-post"],
    () => findAllPost(accessToken, refreshToken),
    { useErrorBoundary: false, staleTime: 1000 * 30 }
  );

  // if (isLoading) return <Loading />;
  if (!data) {
    return <h3 className="isError">Some think went wrong!</h3>;
  }

  const posts: IPost[] = data;
  const scrollToTop = () => {
    valueRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
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
            <div
              onClick={scrollToTop}
              className="rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-indigo-800  inline-flex justify-center items-center"
            >
              <IoIosArrowUp size={32} className="" />
            </div>
          </div>
        </div>
        <div className="grid gap-4 gap-y-8 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts &&
            posts.slice(-3).map((post, i) => (
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
                    {post.author.name} <FcClock size={22} /> {post.published}
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
  );
}

export default LatestWriting;
