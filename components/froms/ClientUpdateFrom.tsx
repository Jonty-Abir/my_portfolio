import { findOne, updateClient } from "@/helper/helper";
import { I_InitialValues } from "@/interface/interface";
import { Iuser, setUser } from "@/redux/sclice/authSclice";
import convertToBase64 from "@/utility/covertBase64";
import { clientUpdateValidate } from "@/utility/validate";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import LoadingBtn from "../shared/LoadingBtn";
import LodderCompo from "../shared/spinner";
import FromAlertMsg from "./FromAlertMsg";

export interface IupdateClientPayload extends I_InitialValues {
  avatar?: string;
}

/***_______  COMPONENTS   ________**/

interface IpageProops {
  client: Iuser;
  accessToken: string;
  refreshToken: string;
}

const ClientUpdateFrom = ({
  client,
  accessToken,
  refreshToken,
}: IpageProops) => {
  const disPatch = useDispatch();
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [base64, setBase64] = useState("");

  // use query

  const { isError, isLoading, data } = useQuery(["update-client"], () =>
    findOne(client._id, accessToken, refreshToken)
  );

  // create query client
  const queryClient = useQueryClient();

  // use query-mutation

  const {
    isIdle,
    mutate,
    isError: mIsError,
    isLoading: mIsLoading,
    data: mData,
  } = useMutation(
    (payload: IupdateClientPayload) => {
      return updateClient(client._id, payload, { accessToken, refreshToken });
    },
    {
      onSuccess: () => {
        setShowAlert(true);
        setSuccess("User Update SuccessFull.");
        setError("");
        setInfo("");
        queryClient.invalidateQueries(["update-client"]);
      },
      onError: (err: any) => {
        setShowAlert(true);
        setSuccess("");
        setInfo("");
        setError(JSON.stringify(err?.message));
        console.log("MUTATON-FAILD");
      },
    }
  );

  /***_______  Coverted to Base64   ________**/

  const upload = async (event: ChangeEvent<HTMLInputElement>) => {
    const imgType = ["image/jpeg", "image/jpg", "image/png"];

    if (event.target.files?.length && event.target.files?.length > 0) {
      if (event.target.files[0].size <= 5000000) {
        const typeArray = imgType.filter(
          //@ts-ignore
          (v) => v === event.target.files[0].type
        );
        if (typeArray.length === 1) {
          const base64Format: any = await convertToBase64(
            event.target.files[0]
          );
          setBase64(base64Format);
        } else {
          toast.error("Only JPG/PNG/JPEG accepted!");
        }
      } else {
        toast.error("File Is too Large! (highest 5Mb accepted) ");
      }
    } else {
      toast.error("avatar not seleted!");
    }
  };

  const initialValues: I_InitialValues = {
    firstName: client.firstName,
    lastName: client.lastName,
    email: client.email,
    number: client.number,
  };
  const formik = useFormik({
    initialValues,
    validate: clientUpdateValidate,
    onSubmit: async (value) => {
      // console.log(client.avatar.split("/uploads/")[1])
      const value1 = JSON.stringify({
        firstName: value.firstName,
        lastName: value.lastName,
        number: value.number,
        email: value.email,
        avatar: base64 || client.avatar,
      });
      const value2 = JSON.stringify({
        firstName: client.firstName,
        lastName: client.lastName,
        number: client.number,
        email: client.email,
        avatar: client.avatar,
      });
      // console.log(value1 === value2);
      let payload;

      if (base64) {
        payload = Object.assign(value, { ...value, avatar: base64 });
      } else if (client.avatar) {
        payload = Object.assign(value, {
          ...value,
          avatar: client.avatar.split("/uploads/")[1],
        });
      } else {
        payload = Object.assign(value, { ...value });
      }

      if (value1 !== value2) {
        mutate(payload);
      } else {
        setShowAlert(true);
        setError("");
        setSuccess("");
        setInfo("Nothing to up-to date.!");

      }
    },
  });

  // Faill back component

  if (!data && !isLoading) {
    return <h2 className="isError">Something went worng!</h2>;
  }

  if (isLoading) {
    return <LodderCompo />;
  }

  if (mData && mData._id && !mIsLoading) {
    disPatch(setUser(mData));
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" text-gray-800 font-semibold"
    >
      <div className="grow">
        {/* Panel body */}
        <div className="p-6 space-y-6">
          <h2 className="text-2xl text-slate-800 font-bold mb-5">My Account</h2>

          {/* Picture */}
          <section className="text-gray-800">
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  className="w-20 h-20 rounded-full ring-2 ring-green-500"
                  src={base64 || client.avatar}
                  width="80"
                  height="80"
                  alt="User avatar"
                />
              </div>
              <label htmlFor="profile_img" className="cursor-pointer">
                <div className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                  Change
                </div>
              </label>
              <input
                type="file"
                autoComplete="off"
                name="avatar"
                id="profile_img"
                className=" hidden"
                onChange={upload}
              />
            </div>
          </section>

          {/* Business Profile */}
          <section className="text-gray-800">
            <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">
              Business Profile
            </h3>
            <div className="text-sm ">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit.
            </div>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  First Name
                </label>
                <input
                  id="name"
                  autoComplete="off"
                  className="form-input w-full"
                  type="text"
                  {...formik.getFieldProps("firstName")}
                />
                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                  {formik?.errors?.firstName && formik.touched.firstName
                    ? formik.errors.firstName
                    : ""}
                </p>
              </div>
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="business-id"
                >
                  Last Name
                </label>
                <input
                  id="business-id"
                  autoComplete="off"
                  className="form-input w-full"
                  type="text"
                  {...formik.getFieldProps("lastName")}
                />
                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                  {formik?.errors?.lastName && formik.touched.lastName
                    ? formik.errors.lastName
                    : ""}
                </p>
              </div>
            </div>
          </section>

          <section className="text-gray-800">
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="location"
                >
                  Number
                </label>
                <input
                  id="location"
                  autoComplete="off"
                  className="form-input w-full"
                  type="text"
                  {...formik.getFieldProps("number")}
                />
                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                  {formik?.errors?.number && formik.touched.number
                    ? formik.errors.number
                    : ""}
                </p>
                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-center">
                  {mData &&
                  mData.response &&
                  mData.response.data.message === "number"
                    ? "number already exist!"
                    : ""}
                </p>
              </div>
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="location"
                >
                  Email
                </label>
                <input
                  id="location"
                  autoComplete="off"
                  className="form-input w-full"
                  type="text"
                  {...formik.getFieldProps("email")}
                />
                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                  {formik?.errors?.email && formik.touched.email
                    ? formik.errors.email
                    : ""}
                </p>
                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-center">
                  {mData &&
                  mData.response &&
                  mData.response.data.message === "email"
                    ? "email already exist!"
                    : ""}
                </p>
              </div>
            </div>
          </section>

          <FromAlertMsg
            success={success}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
          <FromAlertMsg
            error={error}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
          <FromAlertMsg
            info={info}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />

          {/* Smart Sync */}
          <section className="text-gray-800">
            <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">
              Smart Sync update for Mac
            </h3>
            <div className="flex items-center mt-5">
              <div className="form-switch">
                <input type="checkbox" id="toggle" className="sr-only" />
                <label className="bg-slate-400" htmlFor="toggle">
                  <span className="bg-white shadow-sm"></span>
                  <span className="sr-only">Enable smart sync</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2"></div>
            </div>
          </section>
        </div>

        {/* Panel footer */}
        <div className="flex flex-col px-6 py-5 border-t border-slate-200">
          <div className="flex self-end">
            {/* <button type="button" className="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancel</button> */}
            <button
              disabled={mIsLoading ? true : false}
              type="submit"
              className="btn bg-indigo-600 hover:bg-indigo-700 text-white ml-3"
            >
              {mIsLoading ? <LoadingBtn /> : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ClientUpdateFrom;
