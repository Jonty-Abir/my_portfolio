import { login } from "@/helper/helper";
import { setAccessToken, setIsAuthenticate } from "@/redux/sclice/authSclice";
import { formikValidateHandlerSignIn } from "@/utility/validate";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { HiOutlineEye, HiOutlineEyeOff, HiUser } from "react-icons/hi";
import { useDispatch } from "react-redux";
import NoficationToast from "../notification/NoficationToast";
import LoadingBtn from "../shared/LoadingBtn";

export interface formikObj {
  userName: string;
  pw: string;
}

const initialValues: formikObj = {
  userName: "",
  pw: "",
};

function SignInFrom() {
  // React Hook
  const dispatch = useDispatch();
  const [showPw, setShowPw] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues,
    validate: formikValidateHandlerSignIn,
    onSubmit: async (value) => {
      setLoading(true);
      const loginPromise = login(value);
      // toast.promise(loginPromise, { success: "Login successfull...", error: "Login Faild, try again!", loading: "Sending..." });
      loginPromise
        .then((data) => {
          toast.custom((t) => (
            <NoficationToast
              t={t}
              success={true}
              msg={`Login successfull...`}
            />
          ));
          dispatch(setAccessToken(data["accessToken"]));
          dispatch(setIsAuthenticate(true));
          setError(null);
          router.push("/dashboard");
        })
        .catch((err) => {
          toast.custom((t) => (
            <NoficationToast
              t={t}
              success={false}
              msg={`Login faild try again!`}
            />
          ));
          setError(err?.response?.data?.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <form className="mt-8" onSubmit={formik.handleSubmit}>
      <div className="space-y-5">
        <div>
          <label
            htmlFor=""
            className="text-base font-medium text-gray-900 dark:text-gray-200"
          >
            {" "}
            UserName{" "}
          </label>
          <div className="mt-2.5 flex justify-center  items-center gap-x-2">
            <input
              autoComplete="off"
              className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${
                formik.errors.userName && formik.touched.userName
                  ? "dark:border-rose-600"
                  : "dark:border-gray-700"
              } ${
                !formik.errors.userName && formik.touched.userName
                  ? "dark:border-green-500"
                  : "dark:border-gray-700"
              } dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900`}
              type="text"
              placeholder="Email or Mobile No"
              {...formik.getFieldProps("userName")}
            ></input>
            <HiUser className="text-gray-400 hover:text-indigo-700" size={22} />
          </div>
          <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
            {formik?.errors?.userName && formik.touched.userName
              ? formik.errors.userName
              : ""}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor=""
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Password{" "}
            </label>

            <Link
              href="/reset-password"
              title=""
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline focus:text-indigo-700"
            >
              {" "}
              Forgot password?{" "}
            </Link>
          </div>
          <div className="mt-2.5 flex justify-center  items-center gap-x-2">
            <input
              autoComplete="off"
              className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${
                formik.errors.pw && formik.touched.pw
                  ? "dark:border-rose-600"
                  : "dark:border-gray-700"
              } ${
                !formik.errors.pw && formik.touched.pw
                  ? "dark:border-green-500"
                  : "dark:border-gray-700"
              } dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900`}
              type={showPw ? "text" : "password"}
              placeholder="Password"
              {...formik.getFieldProps("pw")}
            ></input>
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
          <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
            {formik?.errors?.pw && formik.touched.pw ? formik.errors.pw : ""}
          </p>
        </div>
        <p
          className={`text-rose-500 pt-2 pl-2 font-semibold text-xs text-center ${
            error ? "" : " hidden"
          }`}
        >
          Login faild! please try again.
        </p>
        <div>
          <button
            type="submit"
            disabled={loading ? true : false}
            className="inline-flex uppercase w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
          >
            {loading ? <LoadingBtn /> : "Sign In"}
            {!loading && (
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
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignInFrom;
