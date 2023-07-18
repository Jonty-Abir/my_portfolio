import { findOne, updateClient } from '@/helper/helper';
import { I_InitialValues } from '@/interface/interface';
import { Iuser, setUser } from '@/redux/sclice/authSclice';
import convertToBase64 from '@/utility/covertBase64';
import { clientUpdateValidate } from '@/utility/validate';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import Image from 'next/image';
import { ChangeEvent, useState } from "react";
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import LoadingBtn from '../shared/LoadingBtn';
import LodderCompo from '../shared/lodder';

export interface IupdateClientPayload extends I_InitialValues {
    avatar?: string;
}


/***_______  COMPONENTS   ________**/

interface IpageProops {
    client: Iuser,
    accessToken: string,
    refreshToken: string
};

const ClientUpdateFrom = ({ client, accessToken, refreshToken }: IpageProops) => {
    const disPatch = useDispatch();
    const [success, setSuccess] = useState(false);

    const [base64, setBase64] = useState("");

    // use query

    const { isError, isLoading, data, } = useQuery(["update-client"], () => (findOne(client._id, accessToken, refreshToken)));

    // create query client
    const queryClient = useQueryClient();

    // use query-mutation

    const { isIdle, mutate, isError: mIsError, isLoading: mIsLoading, data: mData } = useMutation((payload: IupdateClientPayload) => {
        return updateClient(client._id, payload, { accessToken, refreshToken })
    }, {
        onSuccess: () => {
            setSuccess(true);
            queryClient.invalidateQueries(["update-client"])
        },
        onError: (err) => {
            console.log("MUTATON-FAILD")
        }
    });

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
            let payload;
            if (base64) {
                payload = Object.assign(value, { ...value, avatar: base64 });
            } else if (client.avatar) {
                payload = Object.assign(value, { ...value, avatar: client.avatar.split("/uploads/")[1] });
            } else {
                payload = Object.assign(value, { ...value });

            };

            mutate(payload);
        }
    });

    // Faill back component

    if (!data && !isLoading) {
        return <h2 className="isError">Something went worng!</h2>

    }

    // Faill Loading component

    if (isLoading) {
        return <LodderCompo />;
    }

    // 

    if (mData && mData._id && !mIsLoading) {
        disPatch(setUser(mData))
    }

    return (
        <form onSubmit={formik.handleSubmit} className=" text-gray-800 font-semibold">
            <div className="grow">
                {/* Panel body */}
                <div className="p-6 space-y-6">
                    <h2 className="text-2xl text-slate-800 font-bold mb-5">My Account</h2>

                    {/* Picture */}
                    <section className='text-gray-800'>
                        <div className="flex items-center">
                            <div className="mr-4">
                                <Image className="w-20 h-20 rounded-full ring-2 ring-green-500" src={base64 || client.avatar} width="80" height="80" alt="User avtar" />
                            </div>
                            <label htmlFor="profile_img" className="cursor-pointer">
                                <div className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Change</div>
                            </label>
                            <input type="file" name="avatar" id="profile_img" className=" hidden" onChange={upload} />
                        </div>
                    </section>

                    {/* Business Profile */}
                    <section className='text-gray-800'>
                        <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">Business Profile</h3>
                        <div className="text-sm ">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
                        <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                            <div className="sm:w-1/3">
                                <label className="block text-sm font-medium mb-1" htmlFor="name">First Name</label>
                                <input id="name" className="form-input w-full" type="text"   {...formik.getFieldProps("firstName")} />
                                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                                    {formik?.errors?.firstName && formik.touched.firstName
                                        ? formik.errors.firstName
                                        : ""}
                                </p>
                            </div>
                            <div className="sm:w-1/3">
                                <label className="block text-sm font-medium mb-1" htmlFor="business-id">Last Name</label>
                                <input id="business-id" className="form-input w-full" type="text"  {...formik.getFieldProps("lastName")} />
                                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                                    {formik?.errors?.lastName && formik.touched.lastName
                                        ? formik.errors.lastName
                                        : ""}
                                </p>
                            </div>


                        </div>
                    </section>

                    <section className='text-gray-800'>
                        <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">

                            <div className="sm:w-1/3">
                                <label className="block text-sm font-medium mb-1" htmlFor="location">Number</label>
                                <input id="location" className="form-input w-full" type="text"  {...formik.getFieldProps("number")} />
                                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                                    {formik?.errors?.number && formik.touched.number
                                        ? formik.errors.number
                                        : ""}
                                </p>
                                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-center">
                                    {mData && mData.response && mData.response.data.message === "number" ? "number already exist!" : ""}
                                </p>
                            </div>
                            <div className="sm:w-1/3">
                                <label className="block text-sm font-medium mb-1" htmlFor="location">Email</label>
                                <input id="location" className="form-input w-full" type="text"  {...formik.getFieldProps("email")} />
                                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                                    {formik?.errors?.email && formik.touched.email
                                        ? formik.errors.email
                                        : ""}
                                </p>
                                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-center">
                                    {mData && mData.response && mData.response.data.message === "email" ? "email already exist!" : ""}
                                </p>
                            </div>

                        </div>
                    </section>

                    <section className={` ${success ? "flex" : "hidden"}  justify-center items-center `}>
                        <div >
                            <div className="inline-flex min-w-80 px-4 py-2 rounded-sm text-sm bg-emerald-100 border border-emerald-200 text-emerald-600">
                                <div className="flex w-full justify-between items-start">
                                    <div className="flex">
                                        <svg className="w-6 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3" viewBox="0 0 16 16">
                                            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
                                        </svg>
                                        <div>User Updated succesfully.</div>
                                    </div>
                                    <button type="button" onClick={() => setSuccess(false)} className="opacity-70 hover:opacity-80 ml-3 mt-[3px]" >
                                        <div className="sr-only">Close</div>
                                        <svg className="w-4 h-4 fill-current">
                                            <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Smart Sync */}
                    <section className='text-gray-800'>
                        <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">Smart Sync update for Mac</h3>
                        <div className="flex items-center mt-5" >
                            <div className="form-switch">
                                <input type="checkbox" id="toggle" className="sr-only" />
                                <label className="bg-slate-400" htmlFor="toggle">
                                    <span className="bg-white shadow-sm" ></span>
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
                        <button disabled={mIsLoading ? true : false} type="submit" className="btn bg-indigo-600 hover:bg-indigo-700 text-white ml-3">{mIsLoading ? <LoadingBtn /> : "Save Changes"}</button>

                    </div>
                </div>

            </div >
        </form >
    )
}

export default ClientUpdateFrom