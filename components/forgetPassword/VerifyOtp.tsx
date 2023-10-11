import { verifyOtp } from "@/helper/helper";
import { IComponentProps } from "@/interface/interface";
import { setResetToken } from "@/redux/sclice/otpSclice";
import { RootState } from "@/redux/store";
import { verifyOtpValidate } from "@/utility/ResetPassword/validate";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FcPrevious } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import NoficationToast from "../notification/NoficationToast";

interface formikObj {
  otp: string;
}

const initialValues: formikObj = {
  otp: "",
};

function VerifyOtp({ setCount }: IComponentProps) {
  const [countdown, setCountdown] = useState(120);
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [countdown]);

  // react hook
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // redux Hook
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.otpSclice);

  const formik = useFormik({
    initialValues,
    validate: verifyOtpValidate,
    onSubmit: async (value) => {
      try {
        setLoading(true);
        const response = await verifyOtp({
          otp: value?.otp,
          email: state.userName,
        });
        dispatch(setResetToken(response?.token));
        setLoading(false);
        toast.custom((t) => (
          <NoficationToast t={t} msg={response?.message} success={true} />
        ));

        handleIncrement();
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
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="max-w-sm mx-auto px-4 py-8 ">
      <h1 className="text-3xl text-slate-200 font-bold mb-6">
        {" "}
        Verify Your OTP ✨
      </h1>
      {/* Form */}
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              {" "}
              OTP <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              autoComplete="off"
              placeholder="Enter Your OTP"
              className={` w-full border-2 px-4 py-3 rounded-md placeholder:text-indigo-800 text-white font-semibold bg-transparent ${
                formik.errors.otp && formik.touched.otp
                  ? "dark:border-rose-600"
                  : "dark:border-gray-700"
              } ${
                !formik?.errors?.otp && formik?.touched?.otp
                  ? "dark:border-green-500"
                  : "dark:border-gray-700"
              }`}
              type="text"
              {...formik.getFieldProps("otp")}
            />
            <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
              {formik?.errors?.otp && formik.touched.otp
                ? formik.errors.otp
                : ""}
            </p>
            <p
              className={`${
                error ? "block" : " hidden"
              } text-center text-rose-500 pt-2 pl-2 font-semibold text-xs`}
            >
              {error ? error : ""}
            </p>
            <p className=" font-bold text-rose-600 text-right">{`${
              countdown >= 60 ? "01" : "00"
            } : ${countdown > 60 ? countdown - 60 : countdown}`}</p>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div
            onClick={handleDecrement}
            className=" p-3 bg-gray-600 flex justify-center items-center rounded"
          >
            <FcPrevious size={20} />
          </div>
          <button
            type="submit"
            className="btn bg-indigo-600 hover:bg-indigo-600 text-white whitespace-nowrap transition-transform active:scale-95"
          >
            {loading ? "sending..." : "Send OTP"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default VerifyOtp;
