import { addReply } from "@/helper/blog.helper";
import { RootState } from "@/redux/store";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineClear, AiOutlineSend } from "react-icons/ai";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import MiniLoader from "../loading/MiniLoader";

function CommentReplyFrom({
  commentId,
  disPatchFun,
  reFetchFun,
}: {
  commentId: string;
  disPatchFun: any;
  reFetchFun: any;
}) {
  const { accessToken, refreshToken } = useSelector(
    (state: RootState) => state.authSclice
  );
  const client = useSelector((state: RootState) => state.authSclice.user);

  const [replyFromData, setReplyFromData] = useState({ body: "" });
  const mutation = useMutation(
    (payload: {
      body: string;
      userId: string | undefined;
      commentId: string;
    }) => addReply({ accessToken, refreshToken, payload: { ...payload } }),
    {
      onSuccess: () => {
        reFetchFun();
      },
      onError: () => {},
      useErrorBoundary: false,
    }
  );
  //Reply handleChange
  const replyHandleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReplyFromData({
      ...replyFromData,
      [name]: value,
    });
  };
  //REPLY handle submit
  const handleReplySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await mutation.mutateAsync({
        body: replyFromData.body,
        userId: client?._id,
        commentId,
      });
      toast.success("Reply added success.🔥", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setReplyFromData({ ...replyFromData, body: "" });
      disPatchFun((prev: any) => {
        return {
          ...prev,
          [commentId]: false,
        };
      });
    } catch (error: any) {
      toast.error("Reply add Failed!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log("Catch Error", error?.message);
    }
  };
  return (
    <form
      className={`w-full max-w-xl rounded-lg px-4 p-2 pb-0 mt-4`}
      onSubmit={handleReplySubmit}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <h2 className="px-4 pt-3 pb-2 text-gray-800 dark:text-gray-200 text-lg font-semibold">
          Add a new reply
        </h2>

        <div className="w-full md:w-full px-3 mb-2 mt-2">
          <textarea
            className="bg-gray-100 dark:bg-gray-800 rounded border border-gray-500 leading-normal resize-none w-full h-20 py-2 px-3 font-sm placeholder-gray-700 dark:placeholder-gray-400 dark:text-gray-200 focus:outline-none  focus:ring-0"
            name="body"
            onChange={replyHandleChange}
            value={replyFromData.body}
            placeholder="Type Your Comment"
            rows={1}
            required
          ></textarea>
        </div>
        <div className="w-full md:w-full flex items-start px-3">
          <div className="-mr-1 space-x-2">
            <button
              type="button"
              onClick={() =>
                disPatchFun((prev: any) => {
                  return {
                    ...prev,
                    [commentId]: false,
                  };
                })
              }
              className="inline-flex items-center py-2.5 px-4 text-xs text-center text-white bg-rose-700 rounded-lg focus:none focus:ring-primary-200 dark:focus:ring-rose-900 hover:bg-rose-800 font-semibold capitalize transition-transform active:scale-95"
            >
              Cancel <AiOutlineClear size={24} className="pl-2" />
            </button>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs text-center text-white bg-primary-700 rounded-lg focus:none focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 font-semibold capitalize transition-transform active:scale-95"
            >
             {mutation.isLoading && <MiniLoader/>} reply <AiOutlineSend size={24} className="pl-2" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CommentReplyFrom;
