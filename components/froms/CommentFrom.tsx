import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import MiniLoader from "../loading/MiniLoader";

function CommentFrom({ mutation }: { mutation: any }) {
  const [fromData, setFromData] = useState({ body: "" });
  const client = useSelector((state: RootState) => state.authSclice.user);
  const router = useRouter();
  const id = router.query?.blogId;

  // handleChange
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFromData({
      ...fromData,
      [name]: value,
    });
  };
  // handle submit
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await mutation.mutateAsync({
        body: fromData.body,
        userId: (client && client._id) || "",
        blogId: id,
      });
      toast.success("Comment added success.🔥", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setFromData({ ...fromData, body: "" });
    } catch (error: any) {
      toast.error("Comment add Failed!", {
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
    <form className="mb-6" onSubmit={handleSubmit}>
      <div
        className={`py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
      >
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          name="body"
          value={fromData.body}
          onChange={handleChange}
          rows={6}
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-4 text-md font-semibold text-center text-white bg-primary-700 rounded-lg focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 transition-transform active:scale-95"
      >
        {mutation.isLoading && <MiniLoader />} Post
        <AiOutlineSend size={24} className="pl-2" />
      </button>
    </form>
  );
}

export default CommentFrom;
