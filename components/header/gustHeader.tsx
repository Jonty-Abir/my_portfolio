import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiX } from "react-icons/hi";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { useSelector } from "react-redux";
import UserAvatarBtn from "../shared/userAvatarBtn";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "DashBoard",
    href: "/dashboard",
  },
  {
    name: "Projects",
    href: "/project",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Tech-Stack",
    href: "/techStack",
  },
  {
    name: "About",
    href: "/aboutUs",
  },
  {
    name: "Contact",
    href: "/contactUs",
  },
];

export function GustHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.authSclice.isAuthenticated
  );
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" w-screen fixed bg-transparent backdrop-blur-2xl z-50 border-b-2 px-4 pr-0">
      <div className="relative w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pr-4 py-2 sm:px-6 lg:px-8 lg:pr-0 h-[4rem]">
          <div className="inline-flex items-center space-x-2">
            {/* <span className="font-bold font-signature text-2xl">
              {" "}
              Abir Santra
            </span> */}
            <Image
              className="w-auto h-8 bg-cover"
              src="/assets/logo_owner2.png"
              alt="logo"
              width={400}
              height={400}
            />
          </div>
          {/* Large device */}
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`inline-flex items-center text-sm font-semibold text-gray-800 dark:text-gray-50 hover:bg-gray-900 px-2 rounded-sm py-2 ${
                        router.pathname == item.href
                          ? "border-b-2 border-b-gray-400"
                          : ""
                      }`}
                    >
                      {item.name}
                      <span>
                        <RxCaretDown className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*  */}
          {isAuthenticated ? (
            <div className="hidden  space-x-2 lg:flex items-center">
              <UserAvatarBtn />
            </div>
          ) : (
            <div className="hidden space-x-2 lg:block">
              <Link href={"/signUp"}>
                <button
                  type="button"
                  className={`rounded-md ${
                    router.pathname == "/signUp"
                      ? "border border-black dark:border-white"
                      : ""
                  }  bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:text-gray-50 hover:bg-gray-900`}
                >
                  Sign Up
                </button>
              </Link>
              <Link href={"/signIn"}>
                <button
                  className={`rounded-md ${
                    router.pathname == "/signIn"
                      ? "border border-black dark:border-white"
                      : ""
                  } px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:text-gray-50 hover:bg-gray-900`}
                  type="button"
                >
                  Sign In
                </button>
              </Link>
            </div>
          )}
          {/*  */}
          <div className="lg:hidden">
            {/* <HiMenu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" /> */}
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler cursor-pointer icon-tabler-align-right stroke-slate-400 hover:stroke-slate-200"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#597e8d"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M10 12l10 0" />
              <path d="M6 18l14 0" />
            </svg>
          </div>
          {/* mobile */}
          {/* {isMenuOpen ? ( */}
          <div
            className={`absolute bg-transparent backdrop h-[80rem] inset-x-0 top-0 left-[-1rem] z-50 origin-top-right transform ${
              isMenuOpen
                ? "  duration-500 "
                : " duration-500 -translate-y-[80rem]"
            }  lg:-translate-y-[80rem] `}
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-transparent backdrop-blur-2xl shadow-lg ring-1 ring-black ring-opacity-5 z-60 gustNavbar ">
              <div className="px-5 pb-6 pt-5  text-black  dark:text-gray-50 ">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <div>
                        <Image
                          className="w-auto h-[20px] bg-cover"
                          src="/assets/logo_owner2.png"
                          alt="logo"
                          width={400}
                          height={400}
                        />
                      </div>
                    </span>
                    <span className="font-bold font-signature text-2xl hidden">
                      Abir Santra
                    </span>
                  </div>

                  <div className="-mr-2 space-x-2">
                    {isAuthenticated && <UserAvatarBtn />}
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <HiX className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid  space-y-1">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-m-3 flex items-center rounded-md p-3 mb-2 text-sm font-semibold hover:text-black hover:bg-gray-200 ${
                          router.pathname == item.href
                            ? "bg-gray-200 text-black"
                            : ""
                        }`}
                      >
                        <span className="ml-3 text-base font-medium ">
                          {item.name}
                        </span>
                        <span>
                          <RxCaretRight className="ml-3 h-4 w-4" />
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                {/*  */}
                {isAuthenticated ? (
                  ""
                ) : (
                  <div className="mt-8 space-y-1 ">
                    <Link href={"/signIn"}>
                      <button
                        type="button"
                        className={`w-full rounded-md ${
                          router.pathname == "/signIn"
                            ? "border border-black dark:border-white"
                            : ""
                        } px-3 py-2 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-gray-900`}
                      >
                        Sign In
                      </button>
                    </Link>
                    <Link href={"/signUp"}>
                      <button
                        type="button"
                        className={`w-full rounded-md ${
                          router.pathname == "/signUp"
                            ? "border border-black dark:border-white"
                            : ""
                        } px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-gray-900`}
                      >
                        Sign Up
                      </button>
                    </Link>
                  </div>
                )}
                {/*  */}
              </div>
            </div>
          </div>
          {/* ) : ("")} */}
        </div>
      </div>
    </div>
  );
}

export default GustHeader;
