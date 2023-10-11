import { resetPassword } from "@/helper/helper";
import { IComponentProps } from "@/interface/interface";
import { RootState } from "@/redux/store";
import { resetPasswordValidate } from "@/utility/ResetPassword/validate";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FcPrevious } from "react-icons/fc";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useSelector } from "react-redux";
import NoficationToast from "../notification/NoficationToast";

interface formikObj {
  password: string;
  cPassword: string;
}

const initialValues: formikObj = {
  password: "",
  cPassword: "",
};

function ResetPassword({ setCount }: IComponentProps) {
  // react hook
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showCPw, setShowCPw] = useState(false);
  const router = useRouter();
  // redux hook
  const userName = useSelector((state: RootState) => state.otpSclice.userName);
  const resetToken = useSelector(
    (state: RootState) => state.otpSclice.resetPwToken
  );

  const formik = useFormik({
    initialValues,
    validate: resetPasswordValidate,
    onSubmit: async (value) => {
      try {
        setLoading(true);
        const response = await resetPassword(value, userName, resetToken);
        setLoading(false);
        setError(null);
        toast.custom((t) => (
          <NoficationToast t={t} msg={"SUCCESS"} success={true} />
        ));
        router.push("/signIn");
      } catch (error: any) {
        setLoading(false);
        setError(error?.message);
        toast.custom((t) => (
          <NoficationToast t={t} msg={"FAILED"} success={false} />
        ));
      }
    },
  });

  const handleIncrement = () => {
    setCount((prevCount) => {
      if (prevCount === 2) return prevCount;
      return prevCount + 1;
    });
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="max-w-sm mx-auto px-4 py-8 ">
      <h1 className="text-3xl text-slate-200 font-bold mb-6">
        Reset your Password ✨
      </h1>
      {/* Form */}
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="pw">
              Passwors <span className="text-rose-500">*</span>
            </label>
            <div className="flex items-center gap-x-2">
              <input
                type={showPw ? "text" : "password"}
                autoComplete="off"
                id="pw"
                placeholder="New Password"
                className={` w-full border-2 px-4 py-3 rounded-md placeholder:text-indigo-800 text-white font-semibold bg-transparent ${
                  formik.errors.password && formik.touched.password
                    ? "dark:border-rose-600"
                    : "dark:border-gray-700"
                } ${
                  !formik?.errors?.password && formik?.touched?.password
                    ? "dark:border-green-500"
                    : "dark:border-gray-700"
                }`}
                {...formik.getFieldProps("password")}
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
            <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
              {formik?.errors?.password && formik.touched.password
                ? formik.errors.password
                : ""}
            </p>
            <div className="flex items-center gap-x-2">
              <input
                type={showCPw ? "text" : "password"}
                autoComplete="off"
                id="pw"
                placeholder="Confirm New Password"
                className={`w-full border-2 px-4 py-3 mt-2 rounded-md placeholder:text-indigo-800 text-white font-semibold bg-transparent ${
                  formik.errors.cPassword && formik.touched.cPassword
                    ? "dark:border-rose-600"
                    : "dark:border-gray-700"
                } ${
                  !formik?.errors?.cPassword && formik?.touched?.cPassword
                    ? "dark:border-green-500"
                    : "dark:border-gray-700"
                }`}
                {...formik.getFieldProps("cPassword")}
              />
              <span>
                {showCPw ? (
                  <HiOutlineEyeOff
                    className="text-gray-400 hover:text-indigo-700"
                    onClick={() => setShowCPw(!showCPw)}
                    size={22}
                  />
                ) : (
                  <HiOutlineEye
                    className="text-gray-400 hover:text-indigo-700"
                    onClick={() => setShowCPw(!showCPw)}
                    size={22}
                  />
                )}
              </span>
            </div>
            <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
              {formik?.errors?.cPassword && formik.touched.cPassword
                ? formik.errors.cPassword
                : ""}
            </p>
          </div>
          <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
            {error && JSON.stringify(error)}
          </p>
        </div>
        <div className="flex justify-between mt-6">
          <div
            onClick={() => {}}
            className=" p-3 bg-gray-600 flex justify-center items-center rounded"
          >
            <FcPrevious size={20} />
          </div>
          <button
            type="submit"
            className="btn bg-indigo-600 hover:bg-indigo-600 text-white whitespace-nowrap transition-transform active:scale-95"
          >
            {loading ? "sending..." : "Save Password"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
