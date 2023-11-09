import UserAvatarBtn from "@/components/shared/userAvatarBtn";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillProfile } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import {
  FaAngleDown,
  FaAngleRight,
  FaAngleUp,
  FaHome,
  FaUserTie,
} from "react-icons/fa";
import { GiRotaryPhone, GiStoneStack } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { RxCaretRight } from "react-icons/rx";
import { SiTask } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import uniqid from "uniqid";

const mobileNavBar = [
  {
    name: "Home",
    href: "/",
    icone: <FaHome size={20} />,
  },
  {
    name: "Projects",
    href: "/project",
    icone: <SiTask size={20} />,
  },
  {
    name: "Tech-Stack",
    href: "/techStack",
    icone: <GiStoneStack size={20} />,
  },
  {
    name: "About",
    href: "/aboutUs",
    icone: <BsFillInfoSquareFill size={20} />,
  },
  {
    name: "Contact Us",
    href: "/contactUs",
    icone: <GiRotaryPhone size={20} />,
  },
];

const subOfDashboard = [
  {
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    text: "Blogs",
    link: "/blog",
  },
];
const subOfEcommerce = [
  {
    text: "Products",
    link: "/ecommerce",
  },
  {
    text: "Cards",
    link: "/ecommerce/cart",
  },
  {
    text: "Orders",
    link: "/orders",
  },
];

function MobileGustNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dashboardSub, setdashboardSub] = useState(false);
  const [eCommercedSub, seteCommerceSub] = useState(false);

  const isAuthenticated = useSelector(
    (state: RootState) => state.authSclice.isAuthenticated
  );
  const client = useSelector((state: RootState) => state.authSclice.user);

  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* mobile Hambargar Manu */}

      <div className="lg:hidden">
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
      <div
        className={`absolute bg-transparent dark:backdrop-blur-xl h-[80rem] inset-x-0 top-0 left-[-1rem] z-50 origin-top-right transform  ${
          isMenuOpen ? " duration-75" : "duration-75 -translate-y-[80rem]"
        }  lg:-translate-y-[80rem] `}
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg dark:bg-transparent dark:backdrop:blur-3xl shadow-lg ring-1 ring-black ring-opacity-5 z-60 gustNavbar ">
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
              <nav className="grid space-y-1">
                <ul>
                  {mobileNavBar.map((item) => (
                    <li
                      key={item.name}
                      className="transition-transform active:scale-95 mt-1"
                    >
                      <Link
                        className={`flex items-center px-3 gap-x-2 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${
                          router.pathname === item.href
                            ? "border-b-2 border-b-blue-600 dark:font-bold dark:text-blue-600"
                            : ""
                        }`}
                        href={`${item.href}`}
                      >
                        {item.icone}
                        <span
                          className={`mx-2 text-sm font-semibold ${
                            router.pathname === item.href
                              ? "dark:font-bold"
                              : ""
                          }`}
                        >
                          {item.name}
                        </span>
                        <span className="ml-auto">
                          <RxCaretRight className={`ml-3 h-[20px] w-[20px]`} />
                        </span>
                      </Link>
                    </li>
                  ))}

                  <br />
                  <hr className="" />
                  <br />

                  {/* Dashboard Start */}
                  <li
                    onClick={() => setdashboardSub((prev) => !prev)}
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <AiFillProfile size={24} />

                    <span className="mx-2 text-sm font-semibold cursor-pointer">
                      Dashboard
                    </span>
                    {dashboardSub ? (
                      <FaAngleUp className="ml-auto" size={18} />
                    ) : (
                      <FaAngleDown className="ml-auto" size={18} />
                    )}
                  </li>
                  {/* Dashboard Nested START*/}
                  {dashboardSub &&
                    subOfDashboard.map((item) => (
                      <li key={uniqid()}>
                        <Link
                          href={`${item.link}`}
                          className={`flex ml-6 items-center px-3 py-2  text-gray-600 duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 transition-transform active:scale-95`}
                        >
                          <FaAngleRight size={18} />
                          <span className="mx-2 text-sm font-semibold">
                            {item.text}
                          </span>
                        </Link>
                      </li>
                    ))}
                  {/* Dashboard Nested END*/}
                  {/* Dashboard END */}
                  {/* E-Commerce Start */}
                  <li
                    onClick={() => seteCommerceSub((prev) => !prev)}
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <TiShoppingCart size={24} />

                    <span className="mx-2 text-sm font-semibold cursor-pointer">
                      E-Commerce
                    </span>
                    {eCommercedSub ? (
                      <FaAngleUp className="ml-auto" size={18} />
                    ) : (
                      <FaAngleDown className="ml-auto" size={18} />
                    )}
                  </li>
                  {/* E-Commerce Nested START*/}
                  {eCommercedSub &&
                    subOfEcommerce.map((item) => (
                      <Link
                        href={`${item.link}`}
                        key={uniqid()}
                        className={`flex ml-6 items-center px-3 py-2  text-gray-600 duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 transition-transform active:scale-95`}
                      >
                        <FaAngleRight size={18} />
                        <span className="mx-2 text-sm font-semibold">
                          {item.text}
                        </span>
                      </Link>
                    ))}
                  {/* E-Commerce Nested End*/}
                  {/* E-Commerce End */}
                </ul>
              </nav>
            </div>
            {isAuthenticated ? (
              <li className=" list-none">
                <Link
                  href={`/profile/${client?._id}`}
                  className="flex items-center px-3 py-2 text-gray-600 duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 transition-transform active:scale-95"
                >
                  <FaUserTie size={24} />

                  <span className="mx-2 text-sm font-semibold">Profile</span>
                  <span className="ml-auto">
                    <RxCaretRight className={`ml-3 h-[20px] w-[20px]`} />
                  </span>
                </Link>
              </li>
            ) : (
              <div className="mt-8 space-y-1 font-semibold">
                <Link href={"/signIn"}>
                  <button
                    type="button"
                    className={`w-full mb-4 rounded-md dark:hover:bg-gray-800 dark:hover:text-gray-200 text-gray-600 dark:text-gray-300 transition-transform active:scale-95  px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-gray-900 ${
                      router.pathname == "/signIn"
                        ? "border border-black dark:border-blue-600 dark:text-blue-600 dark:font-bold"
                        : ""
                    }`}
                  >
                    Sign In
                  </button>
                </Link>
                <Link href={"/signUp"}>
                  <button
                    type="button"
                    className={`w-full rounded-md dark:hover:bg-gray-800 dark:hover:text-gray-200 text-gray-600 dark:text-gray-300 transition-transform active:scale-95 px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-gray-900 ${
                      router.pathname == "/signUp"
                        ? "border border-black dark:border-blue-600 dark:text-blue-600 dark:font-bold"
                        : ""
                    }`}
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
            {/*  */}
            {/* Feature Start */}
            <div className="p-3 my-4 bg-gray-100 rounded-lg dark:bg-gray-800">
              <h2 className="text-xl font-medium text-gray-800 dark:text-white">
                New feature available .
              </h2>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">
                let{"'"}s go and explore the new features.
              </p>
              <Link href={`/blog`}>
                <Image
                  className="object-cover w-full h-32 mt-2 rounded-lg duration-300 active:scale-105 hover:scale-105"
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1806&q=80"
                  alt="Feature"
                  width={400}
                  height={300}
                />
              </Link>
            </div>
            {/* Feature End */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileGustNavbar;
