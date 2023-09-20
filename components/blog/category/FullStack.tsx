import { postPagination } from "@/helper/blog.helper";
import { IPost } from "@/interface/interface";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaComment } from "react-icons/fa";
import { FcClock } from "react-icons/fc";

function FullStack({
  refreshToken,
  accessToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  // react hooks

  const [pageNo, setPageNO] = useState(1);
  const [limit, setLimit] = useState(3);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    handlePagination();
    return () => {};
  }, [pageNo]);

  const handlePagination = async () => {
    try {
      setLoading(true);
      const result = await postPagination(
        accessToken,
        refreshToken,
        pageNo,
        limit
      );
      setData(result);
      setLoading(false);
      return result;
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  // const { isLoading, data, isFetching, isSuccess } = useQuery({
  //   queryKey: ["pagination-post"],
  //   queryFn: async () => postPagination(accessToken, refreshToken, pageNo, 3),
  // });

  if (isLoading) {
    return <h2 className="loadingPagination">loading..</h2>;
  }
  if (isError) return <h2 className="isError">Failed..!</h2>;

  const posts: IPost[] = data?.blogs;
  const totalLengthOfPost = parseInt(data?.totalLength);
  return (
    <>
      <div
        id="letsUp"
        className="mt-4 grid gap-4 gap-y-8 py-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {posts?.length > 0 &&
          posts?.map((post, i) => {
            const data = post.description.split(" ");
            // const blogDescription = data.filter((v, i) => i <= 20).join(" ");
            const blogDescription = data.slice(0, 15).join(" ");
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
                      <FaComment size={20} />
                      comments: 0
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="flex-1 px-2 text-2xl font-semibold text-gray-900">
                      {post.title}
                    </div>
                  </div>
                  <div className="w-full px-2 text-base leading-normal text-gray-600 dark:text-gray-700 font-semibold">
                    {blogDescription} ...
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      { posts?.length < 1 && (
        <h2 className=" text-3xl text-gray-900 font-bold  text-center">
          {" "}
          Data Not Found!
        </h2>
      )}
      <hr className="my-6" />

      {/*  ==============================
                  pagination        
            =============================*/}

      <div className="mt-4 w-full border-gray-300">
        <div className="mt-2 flex items-center justify-end">
          <div className="space-x-2">
            <button
              type="button"
              className={`rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                pageNo > 1
                  ? ""
                  : " cursor-not-allowed bg-gray-400 text-gray-600"
              }`}
              onClick={() => {
                if (pageNo > 1) {
                  setPageNO((prev) => prev - 1);
                }
              }}
            >
              <FaAngleLeft className=" inline-flex items-center" /> Previous
            </button>
            <span>{/* {pageNo} of {totalLengthOfPost} */}</span>
            <button
              type="button"
              className={`rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                pageNo <= totalLengthOfPost
                  ? ""
                  : " cursor-not-allowed bg-gray-400 text-gray-600"
              }`}
              onClick={() => {
                if (pageNo <= totalLengthOfPost) {
                  setPageNO((prev) => prev + 1);
                }
              }}
            >
              Next <FaAngleRight className=" inline-flex items-center" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullStack;
