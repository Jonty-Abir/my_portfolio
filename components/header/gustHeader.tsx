import { UserRole } from "@/interface/interface";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillProfile } from "react-icons/ai";
import {
  FaAngleLeft,
  FaAngleRight,
  FaBlog,
  FaCartPlus,
  FaCogs,
  FaHome,
  FaShopify,
  FaUsers,
} from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { RxCaretDown, RxCaretRight, RxCaretUp } from "react-icons/rx";
import { SiTask } from "react-icons/si";
import { useSelector } from "react-redux";
import uniqid from "uniqid";
import UserAvatarBtn from "../shared/userAvatarBtn";

const menuItems = [
  {
    name: "Tech-Stack",
    href: "/techStack",
  },
  {
    name: "About",
    href: "/aboutUs",
  },
  {
    name: "Contact Us",
    href: "/contactUs",
  },
];

const mobileNavBar = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dash-Board",
    href: "/dashboard",
  },
  {
    name: "E-Commerce",
    href: "/ecommerce",
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
    name: "Contact Us",
    href: "/contactUs",
  },
];

const linkArray = [
  {
    icone: <FaHome size={18} />,
    routeLink: "/",
    routeName: "Home",
  },
  {
    icone: <AiFillProfile size={18} />,
    routeLink: "/dashboard",
    routeName: "Dash Board",
  },
  {
    icone: <SiTask size={18} />,
    routeLink: "/project",
    routeName: "Project",
  },
  {
    icone: <FaBlog size={18} />,
    routeLink: "/blog",
    routeName: "Blog",
  },
];
const ecommecreLink = [
  {
    icone: <FaShopify size={18} />,
    routeLink: "/ecommerce",
    routeName: "Products",
  },
  {
    icone: <FaCartPlus size={18} />,
    routeLink: "/card",
    routeName: "Cards",
  },
  {
    icone: <FaCogs size={18} />,
    routeLink: "/orders",
    routeName: "Orders",
  },
];

export function GustHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, seteSetShowNav] = useState(false);
  const [showsubNav, seteSetsubShowNav] = useState(false);

  const client = useSelector((state: RootState) => state.authSclice.user);

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
            <Link href={"/"}>
              <Image
                className="w-auto h-[28px] bg-cover"
                src="/assets/logo_owner2.png"
                alt="logo"
                width={400}
                height={400}
              />
            </Link>
          </div>
          {/* Large device */}
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {/* HOME START */}

              <li>
                <Link
                  href={"/"}
                  className={`inline-flex items-center text-sm font-semibold text-gray-800 dark:text-gray-50 px-2 rounded-sm py-2 ${
                    router.pathname == "/" ? "border-b-2 border-b-gray-400" : ""
                  }`}
                >
                  Home
                  {/* <span>
                    <RxCaretDown className="ml-2 h-4 w-4" />
                  </span> */}
                </Link>
              </li>

              {/* HOME END */}

              {/* Dashboard START */}
              <li
                className={` relative inline-flex items-center text-sm font-semibold text-gray-800 dark:text-gray-50  px-2 rounded-sm py-2 ${
                  router.pathname == "/dashboard"
                    ? "border-b-2 border-b-gray-400"
                    : ""
                }`}
              >
                <div
                  className="cursor-pointer flex items-center"
                  onClick={() => seteSetShowNav((prev) => !prev)}
                >
                  <span>Dashboard</span>

                  <span>
                    {!showNav ? (
                      <>
                        <RxCaretDown
                          size={44}
                          className="ml-2 h-6 w-6 relative"
                        />
                        <span className=" absolute flex h-2 w-2 top-1 right-8">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                      </>
                    ) : (
                      <>
                        <RxCaretUp className="ml-2 h-6 w-6 relative" />
                      </>
                    )}
                  </span>
                </div>
                {/* TOGGLE CONTENT */}
                <section
                  className={`absolute ${
                    showNav ? " duration-300" : " collapse"
                  } top-12 -left-4 bg-indigo-100 -hue-rotate-60  w-[15rem] px-2 rounded-md py-2`}
                >
                  <ul
                    className="py-2  text-sm dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li className=" relative">
                      <a
                        onClick={() => seteSetsubShowNav((prev) => !prev)}
                        className="flex justify-between px-4 py-2 rounded-sm text-indigo-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white"
                      >
                        <span> E-Commerce</span>
                        {showsubNav ? (
                          <FaAngleLeft className="inline-flex" size={18} />
                        ) : (
                          <FaAngleRight className="inline-flex" size={18} />
                        )}
                      </a>
                      <hr className=" bg-black" />
                      {showsubNav && (
                        <ul
                          className={`rounded-md transition-transform -hue-rotate-60 bg-indigo-100 py-2 absolute  -right-[13rem] top-2 w-48 text-sm dark:text-gray-200`}
                          aria-labelledby="dropdownDefaultButton"
                        >
                          {ecommecreLink.map((item) => (
                            <li key={uniqid()}>
                              <Link
                                href={item.routeLink}
                                className=" flex gap-x-4 px-4 py-2 rounded-sm  text-indigo-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white"
                              >
                                {item.icone}

                                {item.routeName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                    {linkArray.map((item) => (
                      <li key={uniqid()}>
                        <Link
                          href={item.routeLink}
                          className=" flex gap-x-4 px-4 py-2 rounded-sm  text-indigo-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white"
                        >
                          {item.icone}

                          {item.routeName}
                        </Link>
                      </li>
                    ))}
                    {UserRole.ADMIN === client?.role && (
                      <li>
                        <Link
                          href={"/users"}
                          className=" flex gap-x-4 px-4 py-2 rounded-sm  text-indigo-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white"
                        >
                          <FaUsers size={18} />
                          Users
                        </Link>
                      </li>
                    )}
                  </ul>
                </section>
              </li>
              {/* Dashboard END */}

              {menuItems.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`inline-flex items-center text-sm font-semibold text-gray-800 dark:text-gray-50 px-2 rounded-sm py-2 ${
                        router.pathname == item.href
                          ? "border-b-2 border-b-gray-400"
                          : ""
                      }`}
                    >
                      {item.name}
                      {/* <span>
                        <RxCaretDown className="ml-2 h-4 w-4" />
                      </span> */}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* PROFILE LOGO With Loged user */}

          {isAuthenticated ? (
            <div className="hidden  space-x-2 lg:flex items-center">
              <UserAvatarBtn />
            </div>
          ) : (
            // SIGN IN SIGN UP
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
          {/* mobile */}
          <div className="lg:hidden">
            {/* Hambargar Manu */}
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
                    {mobileNavBar.map((item) => (
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
        </div>
      </div>
    </div>
  );
}

export default GustHeader;
