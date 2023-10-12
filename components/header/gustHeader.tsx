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
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { SiTask } from "react-icons/si";
import { useSelector } from "react-redux";
import uniqid from "uniqid";
import UserAvatarBtn from "../shared/userAvatarBtn";
import MobileGustNavbar from "./mobileGustNavbar";

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
    routeLink: "/ecommerce/cart",
    routeName: "Cards",
  },
  {
    icone: <FaCogs size={18} />,
    routeLink: "/orders",
    routeName: "Orders",
  },
];

export function GustHeader() {
  const [showNav, seteSetShowNav] = useState(false);
  const [showsubNav, seteSetsubShowNav] = useState(false);

  const client = useSelector((state: RootState) => state.authSclice.user);

  const router = useRouter();

  const isAuthenticated = useSelector(
    (state: RootState) => state.authSclice.isAuthenticated
  );

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
          {/* Large device START */}
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
                  <span className="cursor-pointer">Dashboard</span>

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
                        <span className="cursor-pointer"> E-Commerce</span>
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
                          className={`flex gap-x-4 px-4 py-2 rounded-sm  text-indigo-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white ${
                            router.pathname === item.routeLink
                              ? "bg-indigo-600 dark:bg-indigo-600 dark:text-white"
                              : ""
                          }`}
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
          {/* Large device END */}
          {/* mobile START */}
          <MobileGustNavbar />
          {/* mobile END */}
        </div>
      </div>
    </div>
  );
}

export default GustHeader;
