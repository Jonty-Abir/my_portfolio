import { findAllPost } from "@/helper/blog.helper";
import { IPost, IProps } from "@/interface/interface";
import { useQuery } from "@tanstack/react-query";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Suspense } from "react";
import { BsTagsFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import { FcBusinessContact, FcClock } from "react-icons/fc";
import CommentSkeleton from "../loading/commentSkeleton";
import SpinnerCompo from "../shared/spinner";
import CommentSection from "./commentSection";

function SingleBlogCompo({
  user,
  accessToken,
  refreshToken,
  isAuthenticate,
}: IProps) {
  const router = useRouter();
  const { blogId } = router.query;
  const {
    isError: isErrorOfAllPost,
    isLoading: isLoadingAllPost,
    data: dataAllPost,
    error,
  } = useQuery({
    queryKey: ["all-post"],
    queryFn: () => findAllPost(accessToken, refreshToken),
    useErrorBoundary: false,
    staleTime: 1000 * 30,
  });
  /*==============HANDLE ERROR================*/
  if (error && isErrorOfAllPost) {
    const errorQuery: any = error;
    return <h2 className="isError">{JSON.stringify(errorQuery.message)}</h2>;
  }

  if (isLoadingAllPost)
    return (
      <div className="toCenter">
        <SpinnerCompo />
      </div>
    );

  const posts: IPost[] = dataAllPost;
  return (
    <div className="w-full bg-gray-900">
      <section className="relative overflow-hidden py-20 ">
        <div className="relative">
          <div className="mx-auto max-w-xl lg:max-w-7xl">
            <div className="mx-auto mb-14 max-w-2xl text-center px-6">
              <h1 className="text-5xl font-bold capitalize text-gray-400">
                Latest news from our blog
              </h1>
            </div>
            <div className="my-18 -mx-4 flex flex-wrap px-4">
              {/*  =============== Current Blog ================*/}
              {posts &&
                blogId &&
                posts
                  .filter((v) => v._id === blogId)
                  .map((post: IPost) => {
                    return (
                      <div
                        key={post._id}
                        className="mb-12 w-full px-4 lg:mb-0 lg:w-3/5 bg-indigo-100 py-4 rounded-md shadow-lg shadow-indigo-800 hover:shadow-none"
                      >
                        <a className="group block w-full">
                          <Image
                            className="mb-5 block w-full rounded-lg"
                            src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/blogs/poster/${post.img}`}
                            alt=""
                            width={800}
                            height={600}
                          />
                          <div className=" flex mb-5 items-center md:px-4">
                            <div className="mx-2">
                              <div className="w-full text-sm flex items-center gap-x-1 md:gap-x-2 font-semibold leading-tight text-gray-600">
                                <Image
                                  src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/blogs/author/${post.author.img}`}
                                  width={25}
                                  height={20}
                                  alt="avtar_user"
                                  className="w-6 h-6 ring-2 ring-green-500 rounded-full"
                                />{" "}
                                {post.author.name} <FcClock size={22} />{" "}
                                {post.published}
                                <div className=" inline-flex gap-x-1">
                                  <FaComments size={20} />
                                  comments: 0
                                </div>
                              </div>
                            </div>
                            <div className="text-gray-500 dark:text-gray-900 font-bold ml-auto">
                              {post.subtitle}
                            </div>
                          </div>
                          <div className=" flex items-center justify-center gap-x-2 mb-5">
                            <h4 className=" text-3xl font-bold text-gray-900 dark:text-gray-900">
                              {post.title}
                            </h4>
                          </div>
                          <p className="max-w-xl text-lg text-gray-500 dark:text-gray-700 font-semibold mx-auto">
                            {post.description}
                          </p>
                          <div className=" border-t-2 border-gray-600 mt-6"></div>
                          <div className="mt-4 flex flex-col md:flex-row items-center justify-between mx-auto ">
                            <div className=" text-indigo-600 flex items-center gap-x-2">
                              <p className=" flex items-center gap-x-2">
                                {" "}
                                <FcBusinessContact size={24} />{" "}
                                <span className=" font-semibold text-gray-800">
                                  Business{" "}
                                </span>
                              </p>
                              <p className="flex items-center gap-x-2">
                                <BsTagsFill size={20} />
                                <span className=" font-semibold text-gray-800">
                                  {" "}
                                  Creative, Tips, Marketing{" "}
                                </span>
                              </p>
                            </div>
                            <div className=" text-indigo-600 flex items-center gap-x-2 pt-4 md:pt-0">
                              <FacebookIcon size={20} />
                              <TwitterIcon size={20} />
                              <InstagramIcon size={20} />
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  })}

              {/*  =============== Related Blog ================*/}

              <div className="w-full px-4 lg:w-2/5">
                {/* false side */}
                <h3 className="text-gray-400 font-bold text-center capitalize text-2xl">
                  Related blog
                </h3>
                <hr className="mx-4 my-5" />

                {isErrorOfAllPost && !isLoadingAllPost ? (
                  <h2 className="isError">Some think went wrong!</h2>
                ) : isLoadingAllPost ? (
                  dataAllPost && (
                    <div className="toCenter">
                      <SpinnerCompo />
                    </div>
                  )
                ) : (
                  ""
                )}

                {/* true side */}

                {blogId &&
                  posts &&
                  posts
                    .filter((v: IPost) => blogId !== v._id)
                    .map((value: IPost) => {
                      return (
                        <Link
                          key={value._id}
                          href={`/blog/${value._id}`}
                          className="group cursor-pointer mb-8 md:flex "
                        >
                          <Image
                            className="h-30 w-44 rounded-lg"
                            src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/blogs/poster/${value.img}`}
                            alt=""
                            width={200}
                            height={100}
                          />
                          <div className="mt-2 md:mt-0  flex flex-col justify-evenly ">
                            <h3 className=" pl-2 text-gray-900 font-semibold">
                              {value.title}
                            </h3>
                            <span className="mb-2 pl-2 block text-gray-600 dark:text-gray-400">
                              {value.published}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={<CommentSkeleton />}>
          <CommentSection
            accessToken={accessToken}
            refreshToken={refreshToken}
          />
        </Suspense>
      </section>

      <hr className="py-8 pb-0 mx-16 bg-gray-900" />

      {/*  ===============pagination START==================*/}

      {/* <div className="flex w-full justify-center">
        <div className="mx-auto flex">
          <a
            href="#"
            className="mx-1 flex cursor-not-allowed items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 dark:border-gray-800 dark:text-gray-900"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </a>
          <div className="hidden md:flex ">
            {["1", "2", "3", "...", "9", "10"].map((page, i) => (
              <a
                key={i}
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
      </div> */}

      {/*  ===============pagination END==================*/}
      <div className="py-8 pb-16 text-center">
        <Link
          href={"/blog"}
          type="button"
          className="rounded-md border-none border-black dark:bg-indigo-600 hover:dark:bg-indigo-700  px-3 py-2 text-sm font-semibold text-black dark:text-gray-50 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}

export default SingleBlogCompo;
