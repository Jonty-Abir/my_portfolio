import { sendContactMessage } from "@/helper/helper";
import { contactUsFromValidation } from "@/utility/validate";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import LoadingBtn from "../shared/LoadingBtn";

export interface formikObj {
    firstName: string;
    lastName: string;
    contactNumber: string;
    contactEmail: string;
    message: string;
}

const initialValues: formikObj = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    contactEmail: '',
    message: ""
};


function ContactUsContent() {



    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const router = useRouter();

    const formik = useFormik({
        initialValues,
        validate: contactUsFromValidation,
        onSubmit: async (value) => {
            setLoading(true);
            sendContactMessage({
                clientName: `${value.firstName} ${value.lastName}`,
                contactEmail: value.contactEmail,
                contactNumber: value.contactNumber,
                message: value.message
            }).then((data) => {
                setError(false);
                setSuccess(true);
                formik.resetForm();
            }).catch((err) => {
                setError(true);
                setSuccess(false);
            }).finally(() => {
                setLoading(false);
            });
        }
    });


    return (
        <div>
            {/* Heading */}
            <div className=" text-center pt-[6rem]">
                <h2 className=" text-6xl font-bold">Contact me</h2>
                <p className=" text-xl text-indigo-700 font-bold">Get in touch with me</p>
            </div>
            <div className="pt-8 px-4 lg:px-6 ">
                <iframe className="rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447.0810083448069!2d87.99701220911554!3d22.674218058672928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f877715490352d%3A0xad171e4ad1519f6!2zTWFoYXByYWJodSBmdXJuaXR1cmUgKOCmruCmueCmvuCmquCnjeCmsOCmreCngSDgpqvgpr7gprDgp43gpqjgpr_gpprgpr7gprAp!5e0!3m2!1sen!2sin!4v1691243337744!5m2!1sen!2sin" width="100%" height="500" style={{ border: "0" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="mx-auto max-w-7xl px-4">
                    <div className="mx-auto max-w-7xl py-12 md:py-24">
                        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
                            {/* contact from */}
                            <div className="flex items-center justify-center">
                                <div className="px-2 md:px-12">
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white md:text-4xl">Get in touch</p>
                                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                                        Our friendly team would love to hear from you.
                                    </p>
                                    <form className="mt-8 space-y-4" onSubmit={formik.handleSubmit}>
                                        <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                                            <div className="grid w-full  items-center gap-1.5">
                                                <label
                                                    className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="first_name"
                                                >
                                                    First Name
                                                </label>

                                                <input
                                                    className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${formik.errors.firstName && formik.touched.firstName ? "dark:border-rose-600" : "dark:border-gray-700"} ${!formik.errors.firstName && formik.touched.firstName ? "dark:border-green-500" : "dark:border-gray-700"}`}
                                                    type="text"
                                                    {...formik.getFieldProps("firstName")}
                                                    id="first_name"
                                                    placeholder="First Name"
                                                />
                                                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                                                    {formik?.errors?.firstName && formik.touched.firstName
                                                        ? formik.errors.firstName
                                                        : ""}
                                                </p>
                                            </div>
                                            <div className="grid w-full  items-center gap-1.5">
                                                <label
                                                    className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="last_name"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${formik.errors.lastName && formik.touched.lastName ? "dark:border-rose-600" : "dark:border-gray-700"} ${!formik.errors.lastName && formik.touched.lastName ? "dark:border-green-500" : "dark:border-gray-700"}`}
                                                    type="text"
                                                    {...formik.getFieldProps("lastName")}
                                                    id="last_name"
                                                    placeholder="Last Name"
                                                />
                                                <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                                                    {formik?.errors?.lastName && formik.touched.lastName
                                                        ? formik.errors.lastName
                                                        : ""}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${formik.errors.contactEmail && formik.touched.contactEmail ? "dark:border-rose-600" : "dark:border-gray-700"} ${!formik.errors.contactEmail && formik.touched.contactEmail ? "dark:border-green-500" : "dark:border-gray-700"}`}
                                                type="text"
                                                {...formik.getFieldProps("contactEmail")}
                                                id="email"
                                                placeholder="Email"
                                            />
                                            <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                                                {formik?.errors?.contactEmail && formik.touched.contactEmail
                                                    ? formik.errors.contactEmail
                                                    : ""}
                                            </p>
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="phone_number"
                                            >
                                                Phone number
                                            </label>
                                            <input
                                                className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${formik.errors.contactNumber && formik.touched.contactNumber ? "dark:border-rose-600" : "dark:border-gray-700"} ${!formik.errors.contactNumber && formik.touched.contactNumber ? "dark:border-green-500" : "dark:border-gray-700"}`}
                                                type="tel"
                                                {...formik.getFieldProps("contactNumber")}
                                                id="phone_number"
                                                placeholder="Phone number"
                                            />
                                            <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                                                {formik?.errors?.contactNumber && formik.touched.contactNumber
                                                    ? formik.errors.contactNumber
                                                    : ""}
                                            </p>
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700  dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="message"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                className={`flex h-40 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${formik.errors.message && formik.touched.message ? "dark:border-rose-600" : "dark:border-gray-700"} ${!formik.errors.message && formik.touched.message ? "dark:border-green-500" : "dark:border-gray-700"}`}
                                                id="message"
                                                {...formik.getFieldProps("message")}

                                                placeholder="Leave us a message"
                                                cols={3}
                                            />
                                            <p className="text-rose-500 pt-2 pl-2 font-semibold text-xs text-left">
                                                {formik?.errors?.message && formik.touched.message
                                                    ? formik.errors.message
                                                    : ""}
                                            </p>
                                        </div>


                                        {/* Start */}
                                        <section className={` ${success ? "flex" : "hidden"}  justify-center items-center `}>
                                            <div >
                                                <div className="inline-flex min-w-80 px-4 py-2 rounded-sm text-sm bg-emerald-100 border border-emerald-200 text-emerald-600">
                                                    <div className="flex w-full justify-between items-start">
                                                        <div className="flex">
                                                            <svg className="w-6 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3" viewBox="0 0 16 16">
                                                                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
                                                            </svg>
                                                            <div>Message Send To The Owner.</div>
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
                                        <section className={` ${error && !success ? "flex" : "hidden"}  justify-center items-center `}>
                                            <div >
                                                <div className="inline-flex min-w-80 px-4 py-2 rounded-sm text-sm bg-rose-100 border border-rose-200 text-rose-600">
                                                    <div className="flex w-full justify-between items-start">
                                                        <div className="flex">
                                                            <svg className="w-6 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3" viewBox="0 0 16 16">
                                                                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
                                                            </svg>
                                                            <div>Message Sending Failed!.</div>
                                                        </div>
                                                        <button type="button" onClick={() => setError(false)} className="opacity-70 hover:opacity-80 ml-3 mt-[3px]" >
                                                            <div className="sr-only">Close</div>
                                                            <svg className="w-4 h-4 fill-current">
                                                                <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        {/* End */}


                                        <button
                                            type="submit"
                                            disabled={loading ? true : false}
                                            className="w-full rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black flex justify-center"
                                        >
                                            {loading ? <LoadingBtn /> : "Send Message"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <Image
                                alt="Contact us"
                                className="block max-h-full w-full rounded-lg object-cover lg:block"
                                src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>

                <hr className="mt-6" />

            </div>
        </div >
    )
}

export default ContactUsContent