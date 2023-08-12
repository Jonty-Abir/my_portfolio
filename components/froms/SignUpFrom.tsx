import { register } from "@/helper/helper";
import { formikValidateHandlerSignUp } from "@/utility/validate";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  HiDeviceMobile,
  HiFingerPrint,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";
import { HiClipboardDocumentList } from "react-icons/hi2";
import NoficationToast from "../notification/NoficationToast";

export interface formikObj {
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  password: string;
  cPassword: string;
}

const initialValues: formikObj = {
  firstName: "",
  lastName: "",
  number: "",
  email: "",
  password: "",
  cPassword: "",
};

function SignUpFrom() {
  // react hook
  const [showPw, setShowPw] = useState(false);
  const [showcPw, setShowcPw] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validate: formikValidateHandlerSignUp,
    onSubmit: async (value) => {
      setLoading(true);
      const registerPromise = register(value);
      registerPromise
        .then((data) => {
          toast.custom((t) => (
            <NoficationToast
              t={t}
              success={true}
              msg={`Register successfull...`}
            />
          ));
          setLoading(false);
          router.push("/signIn");
        })
        .catch((err) => {
          toast.custom((t) => (
            <NoficationToast
              t={t}
              success={false}
              msg={`Register faild try again!`}
            />
          ));
          setError(err?.response?.data?.message);
          setLoading(false);
        });
    },
  });

  return (
    <form className="mt-8 space-y-4" onSubmit={formik.handleSubmit}>
      <div className="grid w-full lg:grid-flow-col lg:items-center gap-y-4 md:gap-x-4 lg:grid-cols-2">
        {/* First Name */}
        <div className="grid w-full  items-center gap-1.5">
          <label
            className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="first_name"
          >
            First Name
          </label>
          <div className="flex justify-center items-center gap-x-2">
            <input
              className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${
                formik.errors.firstName && formik.touched.firstName
                  ? "dark:border-rose-600"
                  : "dark:border-gray-700"
              } ${
                !formik.errors.firstName && formik.touched.firstName
                  ? "dark:border-green-500"
                  : "dark:border-gray-700"
              }`}
              type="text"
              autoComplete="off"
              {...formik.getFieldProps("firstName")}
              id="first_name"
              placeholder="First Name"
            />
            <HiClipboardDocumentList size={26} className=" lg:hidden" />
          </div>
          <p className="text-rose-500 font-semibold text-xs text-left">
            {formik?.errors?.firstName && formik.touched.firstName
              ? formik.errors.firstName
              : ""}
          </p>
        </div>
        {/* last Name */}
        <div className="grid w-full  items-center gap-1.5">
          <label
            className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="last_name"
          >
            Last Name
          </label>
          <div className="flex justify-center items-center gap-x-2">
            <input
              className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${
                formik.errors.lastName && formik.touched.lastName
                  ? "dark:border-rose-600"
                  : "dark:border-gray-700"
              } ${
                !formik.errors.lastName && formik.touched.lastName
                  ? "dark:border-green-500"
                  : "dark:border-gray-700"
              }`}
              type="text"
              autoComplete="off"
              {...formik.getFieldProps("lastName")}
              id="last_name"
              placeholder="Last Name"
            />
            <HiClipboardDocumentList size={26} className=" lg:hidden" />
          </div>
          <p className="text-rose-500 font-semibold text-xs text-left">
            {formik?.errors?.lastName && formik.touched.lastName
              ? formik.errors.lastName
              : ""}
          </p>
        </div>
        <HiClipboardDocumentList size={26} className=" hidden lg:block" />
      </div>
      {/* Email */}
      <div className="grid w-full  items-center gap-1.5">
        <label
          className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="email"
        >
          Email
        </label>
        <div className="flex justify-center items-center gap-x-2">
          <input
            className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${
              formik.errors.email && formik.touched.email
                ? "dark:border-rose-600"
                : "dark:border-gray-700"
            } ${
              !formik.errors.email && formik.touched.email
                ? "dark:border-green-500"
                : "dark:border-gray-700"
            }`}
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("email")}
            id="email"
            placeholder="Email"
          />
          <HiFingerPrint
            className="text-gray-400 hover:text-indigo-700"
            onClick={() => setShowcPw((prev) => !prev)}
            size={22}
          />
        </div>
        <p className="text-rose-500 font-semibold text-xs text-left">
          {formik?.errors?.email && formik.touched.email
            ? formik.errors.email
            : ""}
        </p>
      </div>
      {/* Phone No */}
      <div className="grid w-full  items-center gap-1.5">
        <label
          className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="phone_number"
        >
          Phone number
        </label>
        <div className="flex justify-center items-center gap-x-2">
          <input
            className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${
              formik.errors.number && formik.touched.number
                ? "dark:border-rose-600"
                : "dark:border-gray-700"
            } ${
              !formik.errors.number && formik.touched.number
                ? "dark:border-green-500"
                : "dark:border-gray-700"
            }`}
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("number")}
            id="phone_number"
            placeholder="Phone number"
          />
          <HiDeviceMobile
            className="text-gray-400 hover:text-indigo-700"
            size={22}
          />
        </div>
        <p className="text-rose-500 font-semibold text-xs text-left">
          {formik?.errors?.number && formik.touched.number
            ? formik.errors.number
            : ""}
        </p>
      </div>
      {/* Password */}
      <div className="grid w-full  items-center gap-1.5">
        <label
          className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="password"
        >
          Password
        </label>
        <div className="flex justify-center items-center gap-x-2">
          <input
            className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${
              formik.errors.password && formik.touched.password
                ? "dark:border-rose-600"
                : "dark:border-gray-700"
            } ${
              !formik.errors.password && formik.touched.password
                ? "dark:border-green-500"
                : "dark:border-gray-700"
            }`}
            type={showPw ? "text" : "password"}
            autoComplete="off"
            {...formik.getFieldProps("password")}
            id="password"
            placeholder="Password"
          />
          <span>
            {showPw ? (
              <HiOutlineEyeOff
                className="text-gray-400 hover:text-indigo-700"
                onClick={() => setShowPw(!showPw)}
                size={22}
              />
            ) : (
              <HiOutlineEye
                className="text-gray-400 hover:text-indigo-700"
                onClick={() => setShowPw(!showPw)}
                size={22}
              />
            )}
          </span>
        </div>
        <p className="text-rose-500 font-semibold text-xs text-left">
          {formik?.errors?.password && formik.touched.password
            ? formik.errors.password
            : ""}
        </p>
      </div>
      {/* Confirm password */}
      <div className="grid w-full  items-center gap-1.5">
        <label
          className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="c_password"
        >
          Confirm password
        </label>
        <div className="flex justify-center items-center gap-x-2">
          <input
            className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${
              formik.errors.cPassword && formik.touched.cPassword
                ? "dark:border-rose-600"
                : "dark:border-gray-700"
            } ${
              !formik.errors.cPassword && formik.touched.cPassword
                ? "dark:border-green-500"
                : "dark:border-gray-700"
            }`}
            type={showcPw ? "text" : "password"}
            autoComplete="off"
            {...formik.getFieldProps("cPassword")}
            id="c_password"
            placeholder="Confirm password"
          />
          <span>
            {showcPw ? (
              <HiOutlineEyeOff
                className="text-gray-400 hover:text-indigo-700"
                onClick={() => setShowcPw((prev) => !prev)}
                size={22}
              />
            ) : (
              <HiOutlineEye
                className="text-gray-400 hover:text-indigo-700"
                onClick={() => setShowcPw((prev) => !prev)}
                size={22}
              />
            )}
          </span>
        </div>
        <p className="text-rose-500 font-semibold text-xs text-left">
          {formik?.errors?.cPassword && formik.touched.cPassword
            ? formik.errors.cPassword
            : ""}
        </p>
      </div>

      <p className="text-rose-500 font-semibold text-xs text-center">
        {error && error}
      </p>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-x-2 uppercase rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {loading ? "sending..." : "register"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="ml-2 h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    </form>
  );
}

export default SignUpFrom;
