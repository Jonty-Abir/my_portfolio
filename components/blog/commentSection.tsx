import {
  addAndRemoveLikeForComment,
  addAndRemoveLikeForReply,
  addComment,
  getComment,
} from "@/helper/blog.helper";
import { RootState } from "@/redux/store";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uniqId from "uniqid";
import CommentFrom from "../froms/CommentFrom";
import CommentReplyFrom from "../froms/CommentReplyFrom";
function CommentSection({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  // HACK
  const ids = {};
  const [showReplyFrom, setShowReplyFrom] = useState({});

  const client = useSelector((state: RootState) => state.authSclice.user);
  const router = useRouter();
  const id = router.query?.blogId;

  const { isLoading, error, isError, data, refetch } = useQuery({
    queryKey: ["comment", id],
    queryFn: async () => getComment({ accessToken, id, refreshToken }),
    useErrorBoundary: false,
    staleTime: 1000 * 10,
  });
  // create query client
  const mutation = useMutation(
    (payload: { body: string; userId: string; blogId: any }) =>
      addComment({ accessToken, refreshToken, payload }),
    {
      onSuccess: () => {
        // queryClient.invalidateQueries(["comment", id]);
        refetch();
      },
      onError: () => {},
      useErrorBoundary: false,
    }
  );

  // ADD and remove likes for reply comment
  const replyLikedMutation = useMutation(
    (payload: { userId: string; replyId: string }) =>
      addAndRemoveLikeForReply({ accessToken, refreshToken, ...payload }),
    {
      onSuccess: () => {
        // queryClient.invalidateQueries(["comment", id]);
        refetch();
      },
      onError: () => {},
      useErrorBoundary: false,
    }
  );
  const handleReplyIdForLike = async (userId: string, replyId: string) => {
    try {
      await replyLikedMutation.mutateAsync({ userId, replyId });
    } catch (error) {
      toast.error("Like add Failed! try again", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  // ADD and remove likes for comment
  const commentLikedMutation = useMutation(
    (payload: { userId: string; commentId: string }) =>
      addAndRemoveLikeForComment({ accessToken, refreshToken, ...payload }),
    {
      onSuccess: () => {
        // queryClient.invalidateQueries(["comment", id]);
        refetch();
      },
      onError: () => {},
      useErrorBoundary: false,
    }
  );

  const handleCommentIdForLike = async (userId: string, commentId: string) => {
    try {
      await commentLikedMutation.mutateAsync({ userId, commentId });
    } catch (error) {
      toast.error("Like add Failed! try again", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Comments: {data?.length}
          </h2>
        </div>
        {/* COMMENT FROM START */}
        <CommentFrom mutation={mutation} />
        {/* COMMENT FROM END */}
        {!isError &&
          !error &&
          data &&
          data.map((value) => {
            // HACK
            // @ts-ignore
            ids[value._id] = false;
            const date = new Date(value?.createdAt);
            return (
              <div key={value._id}>
                <div className="p-6 py-2 pb-2 text-base bg-white rounded-lg dark:bg-gray-900">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                        <Image
                          width={50}
                          height={50}
                          className="mr-2 w-6 h-6 rounded-full"
                          src={value?.userId?.avatar}
                          alt="Avatar"
                        />
                        {`${value?.userId?.firstName} ${value?.userId?.lastName}`}
                      </p>
                      {/* Publish Date */}
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {`${date.getDate()} 
                          ${date.toLocaleString("default", {
                            month: "long",
                          })}
                          ${date.getFullYear()}`}
                      </p>
                    </div>
                    <div className="m-1.5">
                      {/* Edit Start */}
                      <button className="btn border-slate-200 hover:border-slate-300 mr-1 active:scale-95">
                        <svg
                          className="w-4 h-4 fill-current text-slate-500 shrink-0"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                        </svg>
                      </button>
                      {/* Edit End */}
                      {/* DELETED Start */}
                      <button className="btn border-slate-200 hover:border-slate-300 active:scale-95">
                        <svg
                          className="w-4 h-4 fill-current text-rose-500 shrink-0"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                        </svg>
                      </button>
                      {/*DELETED End */}
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    {value?.body}
                  </p>
                  <div className="flex items-center mt-1 space-x-4">
                    <button
                      type="button"
                      className="flex items-center text-sm text-gray-500  dark:text-gray-400 font-medium"
                    >
                      {/* LIKE ICON */}
                      <span
                        onClick={() =>
                          client &&
                          handleCommentIdForLike(client?._id, value._id)
                        }
                      >
                        {value.userId.likedComment.includes(value._id) ? (
                          <AiFillLike
                            size={25}
                            className={`mr-1  transition-transform active:scale-105`}
                            color="green"
                          />
                        ) : (
                          <BiLike
                            size={25}
                            className={`mr-1  transition-transform active:scale-105`}
                          />
                        )}
                      </span>
                      {/* LIKE quantity */}
                      <span className="mr-4 font-serif">{value.likes}</span>
                      {/* COMMENT ICON */}
                      <FaComment size={24} className="mr-2" />
                      <span
                        className="hover:underline"
                        onClick={() =>
                          setShowReplyFrom((prev) => {
                            return {
                              ...prev,
                              [value?._id]: true,
                            };
                          })
                        }
                      >
                        Reply
                      </span>
                    </button>
                  </div>
                  {/* REPLY FROM ST*/}
                  {/* HACK */}
                  {/* @ts-ignore */}
                  {showReplyFrom[value?._id] && (
                    <CommentReplyFrom
                      commentId={value?._id}
                      disPatchFun={setShowReplyFrom}
                      reFetchFun={refetch}
                    />
                  )}
                  {/* REPLY FROM END*/}
                </div>
                {/* REPLY ================ STR */}
                {value?.replyIds.map((replyComment) => {
                  const replyCommentDate = new Date(replyComment?.createdAt);
                  return (
                    <div
                      key={uniqId()}
                      className="p-6 py-1 mb-1 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                            <Image
                              width={50}
                              height={50}
                              className="mr-2 w-6 h-6 rounded-full"
                              src={replyComment?.userId?.avatar}
                              alt="avatar"
                            />
                            {`${replyComment?.userId?.firstName} ${replyComment?.userId?.lastName}`}
                          </p>
                          {/* Publish Date */}
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {`${replyCommentDate.getDate()} 
                          ${replyCommentDate.toLocaleString("default", {
                            month: "long",
                          })}
                          ${replyCommentDate.getFullYear()}`}
                          </p>
                        </div>
                        <div className="m-1.5">
                          {/* Edit Start */}
                          <button className="btn border-slate-200 hover:border-slate-300 mr-1 active:scale-95">
                            <svg
                              className="w-4 h-4 fill-current text-slate-500 shrink-0"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                            </svg>
                          </button>
                          {/* Edit End */}
                          {/* DELETED Start */}
                          <button className="btn border-slate-200 hover:border-slate-300 active:scale-95">
                            <svg
                              className="w-4 h-4 fill-current text-rose-500 shrink-0"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                            </svg>
                          </button>
                          {/*DELETED End */}
                        </div>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">
                        {replyComment?.body}
                      </p>
                      <div className="flex items-center mt-1 space-x-4">
                        <button
                          type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                        >
                          {/* LIKE ICON  */}
                          <span
                            onClick={() =>
                              client &&
                              handleReplyIdForLike(client._id, replyComment._id)
                            }
                          >
                            {value.userId.likedReply.includes(
                              replyComment._id
                            ) ? (
                              <AiFillLike
                                size={25}
                                className={`mr-2  transition-transform active:scale-105`}
                                color="green"
                              />
                            ) : (
                              <BiLike
                                size={25}
                                className={`mr-2  transition-transform active:scale-105 `}
                              />
                            )}
                          </span>
                          {/* LIKE quantity */}
                          <span className="mr-1 font-semibold">
                            {replyComment?.likes}
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
                <hr />
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default CommentSection;
