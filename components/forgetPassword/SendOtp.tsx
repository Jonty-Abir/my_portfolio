import { sendOtp } from "@/helper/helper";
import { IComponentProps } from "@/interface/interface";
import { setHashOtp, setUserName } from "@/redux/sclice/otpSclice";
import { sendOtpValidate } from "@/utility/ResetPassword/validate";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FcPrevious } from "react-icons/fc";
import { useDispatch } from "react-redux";
import NoficationToast from "../notification/NoficationToast";

interface formikObj {
  userName: string;
}

const initialValues: formikObj = {
  userName: "",
};

function SendOtp({ setCount }: IComponentProps) {
  // react hook
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // redux hooks
  const disPatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validate: sendOtpValidate,
    onSubmit: async (value) => {
      try {
        setLoading(true);
        const response = await sendOtp(value);
        setLoading(false);
        disPatch(setUserName(value.userName));
        disPatch(setHashOtp(response?.OTP));
        toast.custom((t) => (
          <NoficationToast t={t} msg={response?.msg} success={true} />
        ));
        handleIncrement();
      } catch (error: any) {
        setLoading(false);
        setError(error?.message);
        toast.custom((t) => (
          <NoficationToast
            t={t}
            msg={`Can't send OTP! try again..`}
            success={false}
          />
        ));
      }
    },
  });

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount === 0) return prevCount;
      return prevCount - 1;
    });
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
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              autoComplete="off"
              placeholder="Enter Your Email Address"
              type="email"
              {...formik.getFieldProps("userName")}
              className={` w-full border-2 px-4 py-3 rounded-md placeholder:text-indigo-800 text-white font-semibold bg-transparent ${
                formik?.errors?.userName && formik.touched.userName
                  ? " dark:border-rose-600"
                  : "dark:border-gray-700"
              } ${
                !formik?.errors?.userName && formik?.touched?.userName
                  ? "dark:border-green-500"
                  : "dark:border-gray-700"
              }`}
            />
            <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
              {formik?.errors?.userName && formik.touched.userName
                ? formik.errors.userName
                : ""}
            </p>
            <p
              className={`${
                error ? "block" : " hidden"
              } text-center text-rose-500 pt-2 pl-2 font-semibold text-xs`}
            >
              {error ? error : ""}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div
            onClick={handleDecrement}
            className={`p-3 bg-gray-600 flex justify-center items-center rounded`}
          >
            <FcPrevious size={20} />
          </div>

          <button
            type="submit"
            className="btn bg-indigo-600 hover:bg-indigo-600 text-white whitespace-nowrap transition-transform active:scale-95"
          >
            {loading ? "Sending..." : "Send Mail"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendOtp;
