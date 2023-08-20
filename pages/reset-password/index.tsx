import ResetPassword from "@/components/forgetPassword/ResetPassword";
import SendOtp from "@/components/forgetPassword/SendOtp";
import VerifyOtp from "@/components/forgetPassword/VerifyOtp";
import GustLayout from "@/layout/gustLayout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { FcLeft } from "react-icons/fc";

interface IProps {
  name: string;
}

export default function Page({ name }: IProps) {
  const [state, setState] = useState(0);
  const components = [
    { compo: <SendOtp setCount={setState} /> },
    { compo: <VerifyOtp setCount={setState} /> },
    { compo: <ResetPassword setCount={setState} /> },
  ];

  // redux hooks
  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="abir santra profile" />
        <meta name="keywords" content="abir santra web developer " />
        <meta name="author" content="abir santra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/favicone.png" />
      </Head>
      <GustLayout>
        <main className=" bg-gray-900 mt-8 pt-2">
          <Toaster />
          <div className="relative flex">
            {/* Content */}
            <div className="w-full md:w-1/2">
              <div className="min-h-screen h-full flex flex-col after:flex-1">
                {/* Header */}
                <div className="flex-1">
                  <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link className="block" href="/signIn">
                      {/* <svg width="32" height="32" viewBox="0 0 32 32">
                                            <defs>
                                                <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                                                    <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                                                    <stop stopColor="#A5B4FC" offset="100%" />
                                                </linearGradient>
                                                <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                                                    <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                                                    <stop stopColor="#38BDF8" offset="100%" />
                                                </linearGradient>
                                            </defs>
                                            <rect fill="#6366F1" width="32" height="32" rx="16" />
                                            <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                                            <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
                                            <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
                                        </svg> */}
                      <div className=" bg-stone-200 px-1 rounded hover:scale-105">
                        <FcLeft size={32} />
                      </div>
                    </Link>
                  </div>
                </div>

                {components[state].compo}
              </div>
            </div>

            {/* Image */}
            <div
              className=" hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
              aria-hidden="true"
            >
              {/* <video className="object-cover object-center w-full h-full"  >
                            <source src="/assets/bg.mp4" type="video/mp4" />
                        </video> */}
              <Image
                className="object-cover object-center w-full h-full"
                src="/assets/img1.jpg"
                width={760}
                height={850}
                alt="Authentication image"
              />
              <Image
                className="absolute top-2/4 -left-8 -translate-x-1/2 ml-8 hidden lg:block"
                src="/assets/reset-icone.png"
                width={40}
                height={40}
                alt="Authentication decoration"
              />
            </div>
          </div>
        </main>
      </GustLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const accessToken =
    req.cookies[process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME as string];
  const refreshToken =
    req.cookies[process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME as string];

  if (accessToken && refreshToken) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        name: "reset-password",
      },
    };
  }
};
