import { createPost } from "@/helper/blog.helper";
import { IBlog_payload } from "@/interface/interface";
import { Iuser } from "@/redux/sclice/authSclice";
import { blogValidate } from "@/utility/blog.validate";
import convertToBase64 from "@/utility/covertBase64";
import { useFormik } from "formik";
import { ChangeEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { FaBlog } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import LoadingBtn from "../shared/LoadingBtn";

interface IpageProops {
  client: Iuser;
  accessToken: string;
  refreshToken: string;
}

interface IAuthorPayload {
  name: string;
  designation: string;
  img: string;
}

export interface ICreatePostPayload {
  title: string;
  subtitle: string;
  category: string;
  img: string;
  description: string;
  published: string;
  author: IAuthorPayload;
}
const initialValues: IBlog_payload = {
  title: "",
  subtitle: "",
  category: "",
  description: "",
  published: "",
  authorName: "",
};

function BlogFrom({ client, accessToken, refreshToken }: IpageProops) {
  const disPatch = useState();

  const [success, setSuccess] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  const [posterBase64, setPosterBase64] = useState("");
  const [authorBase64, setAuthorBase64] = useState("");

  const upload = async (
    event: ChangeEvent<HTMLInputElement>,
    setState: any
  ) => {
    const imgType = ["image/jpeg", "image/jpg", "image/png"];

    if (event.target.files?.length && event.target.files?.length > 0) {
      if (event.target.files[0].size <= 8000000) {
        const typeArray = imgType.filter(
          //@ts-ignore
          (v) => v === event.target.files[0].type
        );
        if (typeArray.length === 1) {
          const base64Format: any = await convertToBase64(
            event.target.files[0]
          );
          setState(base64Format);
        } else {
          toast.error("Only JPG/PNG/JPEG accepted!");
        }
      } else {
        toast.error("File Is too Large! (highest 5Mb accepted) ");
      }
    } else {
      setState("");
      toast.error("avatar not seleted!");
    }
  };

  //  Use Formick Hooks

  const formik = useFormik({
    initialValues,
    validate: blogValidate,
    onSubmit: async (value) => {
      setloading(true);

      if (authorBase64 && posterBase64) {
        let payload: ICreatePostPayload = {
          title: value.title,
          subtitle: value.subtitle,
          category: value.category,
          img: posterBase64,
          description: value.description,
          published: value.published,
          author: {
            name: value.authorName,
            designation: client.role,
            img: authorBase64,
          },
        };
        try {
          const response = await createPost(payload, {
            accessToken,
            refreshToken,
          });

          if (response?.title) {
            setloading(false);
            setSuccess(true);
            setError(false);
            formik.resetForm();
          } else {
            throw new Error();
          }
        } catch (error) {
          setError(true);
          setloading(false);
          setSuccess(false);
        }
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" text-gray-800 font-semibold"
    >
      <div className="">
        {/* Panel body */}
        <div className="p-6">
          <h2 className="text-2xl text-indigo-500 font-bold mb-5 flex items-center gap-x-2 ">
            Add Your Blog <FaBlog />
          </h2>

          {/* Blog */}
          {/* Tittle and Subtitle  */}
          <section className="text-gray-800">
            <div className="text-sm text-gray-500 ">
              Let{"'"}s share some experience about your traveling, learning,
              weekend etc through your blogs.
            </div>
            <h3 className=" text-gray-800 capitalize pt-8">Blog Details:</h3>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2 form-input-width">
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  placeholder="Enter Title"
                  autoComplete="off"
                  id="title"
                  className="form-input "
                  type="text"
                  {...formik.getFieldProps("title")}
                />
                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                  {formik?.errors?.title && formik.touched.title
                    ? formik.errors.title
                    : ""}
                </p>
              </div>
              <div className="sm:w-1/3 ml-auto">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="subtitle"
                >
                  Subtitle
                </label>
                <input
                  placeholder="Enter SubTitle"
                  id="subtitle"
                  autoComplete="off"
                  className="form-input "
                  type="text"
                  {...formik.getFieldProps("subtitle")}
                />
                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                  {formik?.errors?.subtitle && formik.touched.subtitle
                    ? formik.errors.subtitle
                    : ""}
                </p>
              </div>
            </div>
          </section>
          {/* category and poster */}
          <section className="text-gray-800">
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2 form-input-width">
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  className="form-input"
                  id="category"
                  {...formik.getFieldProps("category")}
                >
                  <option
                    className=" font-semibold text-gray-600"
                    value="full Stack"
                  >
                    Full Stack
                  </option>
                  <option
                    className=" font-semibold text-gray-600"
                    value="web design"
                  >
                    Web Design
                  </option>
                  <option
                    className=" font-semibold text-gray-600"
                    value="web development"
                  >
                    Web Development
                  </option>

                  <option
                    className=" font-semibold text-gray-600"
                    value="software engineering"
                  >
                    Software Engineering
                  </option>
                  <option
                    className=" font-semibold text-gray-600"
                    value="font end"
                  >
                    Font End
                  </option>
                  <option
                    className=" font-semibold text-gray-600"
                    value="server end"
                  >
                    Server End
                  </option>
                  <option
                    className=" font-semibold text-gray-600"
                    value="data base"
                  >
                    Data Base
                  </option>

                  <option
                    className=" font-semibold text-gray-600"
                    value="cloud computing"
                  >
                    Cloud Computing
                  </option>
                  <option
                    className=" font-semibold text-gray-600"
                    value="devOps"
                  >
                    DevOps
                  </option>

                  <option className=" font-semibold text-gray-600" value="food">
                    Food
                  </option>
                  <option
                    className=" font-semibold text-gray-600"
                    value="travel"
                  >
                    Travel
                  </option>
                  <option
                    className=" font-semibold text-gray-600"
                    value="others"
                  >
                    Other{"'"}s
                  </option>
                </select>
                {/* <input
                  placeholder="Enter Category"
                  autoComplete="off"
                  id="category"
                  className="form-input"
                  type="text"
                  {...formik.getFieldProps("category")}
                /> */}
                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                  {formik?.errors?.category && formik.touched.category
                    ? formik.errors.category
                    : ""}
                </p>
              </div>
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="poster"
                >
                  Blog Poster
                </label>
                <input
                  id="poster"
                  autoComplete="off"
                  name="poster_img"
                  className="form-input w-full text-indigo-500 bg-indigo-50 "
                  type="file"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    upload(event, setPosterBase64)
                  }
                  required
                />

                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                  {!posterBase64 ? "Required*" : ""}
                </p>
              </div>
            </div>
          </section>
          {/* Publish Date */}
          <section className="text-gray-800">
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="published"
                >
                  Publish Date:
                </label>
                <input
                  id="published"
                  autoComplete="off"
                  className="form-input xmd:w-[34.5rem] md:w-[38rem] lg:w-[36rem]"
                  type="date"
                  {...formik.getFieldProps("published")}
                />

                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                  {formik?.errors?.published && formik.touched.published
                    ? formik.errors.published
                    : ""}
                </p>
              </div>
            </div>
          </section>
          {/* description*/}
          <section className="text-gray-800">
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2 ">
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  autoComplete="off"
                  placeholder="Enter Blog Description"
                  className="form-input xmd:w-[34.5rem] md:w-[38rem] lg:w-[36rem] h-[14rem]"
                  {...formik.getFieldProps("description")}
                />
                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                  {formik?.errors?.description && formik.touched.description
                    ? formik.errors.description
                    : ""}
                </p>
              </div>
            </div>
          </section>
          {/* author details */}
          <section className="text-gray-800">
            <h3 className=" text-gray-500 capitalize">Author Details:</h3>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2 form-input-width">
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="author_img"
                >
                  Author Image:
                </label>
                <input
                  id="author_img"
                  autoComplete="off"
                  name="avatar_img"
                  className="form-input w-full text-indigo-500 bg-indigo-50 "
                  type="file"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    upload(event, setAuthorBase64)
                  }
                  required
                />

                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                  {!authorBase64 ? "Required*" : ""}
                </p>
              </div>
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="autorName"
                >
                  Author Name:
                </label>
                <input
                  id="autorName"
                  autoComplete="off"
                  placeholder="Enter Author Name"
                  className="form-input"
                  type="text"
                  {...formik.getFieldProps("authorName")}
                />
                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                  {formik?.errors?.authorName && formik.touched.authorName
                    ? formik.errors.authorName
                    : ""}
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Panel footer */}
        <div
          className={`flex ${
            success || error ? "justify-between" : "flex-col"
          } px-6 py-5 border-t border-slate-200`}
        >
          <section
            className={` ${
              success ? "flex" : "hidden"
            }  justify-center items-center `}
          >
            <div>
              <div className="inline-flex min-w-80 px-4 py-2 rounded-sm text-sm bg-emerald-100 border border-emerald-200 text-emerald-600">
                <div className="flex w-full justify-between items-start">
                  <div className="flex">
                    <svg
                      className="w-6 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
                    </svg>
                    <div>Post added successfully.</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="opacity-70 hover:opacity-80 ml-3 mt-[3px]"
                  >
                    <div className="sr-only">Close</div>
                    <svg className="w-4 h-4 fill-current">
                      <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section
            className={` ${
              error && !success ? "flex" : "hidden"
            }  justify-center items-center `}
          >
            <div>
              <div className="inline-flex min-w-80 px-4 py-2 rounded-sm text-sm bg-rose-100 border border-rose-200 text-rose-600">
                <div className="flex w-full justify-between items-start">
                  <div className="flex">
                    <svg
                      className="w-6 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
                    </svg>
                    <div>Post added faild!.</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setError(false)}
                    className="opacity-70 hover:opacity-80 ml-3 mt-[3px]"
                  >
                    <div className="sr-only">Close</div>
                    <svg className="w-4 h-4 fill-current">
                      <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="flex ml-[75%]">
            {/* <button type="button" className="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancel</button> */}
            <button
              disabled={loading ? true : false}
              type="submit"
              className="btn bg-indigo-600 hover:bg-indigo-700 text-white ml-3"
            >
              {loading ? <LoadingBtn /> : <MdSend size={26} />}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default BlogFrom;
