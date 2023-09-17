import { UserRole } from "@/interface/interface";
import { Iuser } from "@/redux/sclice/authSclice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillProfile } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  FaAngleDown,
  FaAngleRight,
  FaAngleUp,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import { SiTask } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";
import uniqid from "uniqid";

function MobileSideBar({ client }: { client: Iuser | null }) {
  const [dashboardSub, setdashboardSub] = useState(true);
  const [eCommercedSub, seteCommerceSub] = useState(false);

  const router = useRouter();

  const subOfDashboard = [
    {
      text: "Profile",
      link: `/profile/${client?._id}`,
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
      link: "/card",
    },
    {
      text: "Orders",
      link: "/orders",
    },
  ];

  const linkArray = [
    {
      icone: <FaHome size={24} />,
      routeLink: "/",
      routeName: "Home",
    },
    {
      icone: <SiTask size={24} />,
      routeLink: "/project",
      routeName: "Project",
    },
    {
      icone: <BsFillInfoSquareFill size={24} />,
      routeLink: "/aboutUs",
      routeName: "About",
    },
    {
      icone: <CgProfile size={24} />,
      routeLink: `/profile/${client?._id}`,
      routeName: "Profile",
    },
  ];

  return (
    <nav className="flex-1 -mx-3 space-y-3">
      <ul>
        <li className=" my-4 z-20">
          {/*======== Dashboard ========= */}
          <div>
            <div
              onClick={() => setdashboardSub((prev) => !prev)}
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <AiFillProfile size={24} />

              <span className="mx-2 text-sm font-semibold">Dashboard</span>
              {dashboardSub ? (
                <FaAngleUp className="ml-auto" size={18} />
              ) : (
                <FaAngleDown className="ml-auto" size={18} />
              )}
            </div>
            {/* Dashboard Nested */}
            <div>
              {dashboardSub &&
                subOfDashboard.map((item) => (
                  <div
                    key={uniqid()}
                    onClick={() => router.push(`${item.link}`)}
                    className={`flex items-center px-3 py-2  text-gray-600 duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 transition-transform active:scale-95 ${
                      router?.asPath === item?.link
                        ? "border-b-2 border-b-blue-600 dark:font-bold dark:text-blue-600"
                        : ""
                    }`}
                  >
                    <FaAngleRight size={18} />
                    <span className="mx-2 text-sm font-semibold">
                      {item.text}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          {/*====== E-Commerce====== */}
          <div>
            <div
              onClick={() => seteCommerceSub((prev) => !prev)}
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <TiShoppingCart size={24} />

              <span className="mx-2 text-sm font-semibold">E-Commerce</span>
              {eCommercedSub ? (
                <FaAngleUp className="ml-auto" size={18} />
              ) : (
                <FaAngleDown className="ml-auto" size={18} />
              )}
            </div>
            {/* E-Commerce Nested */}
            {eCommercedSub &&
              subOfEcommerce.map((item) => (
                <div
                  onClick={() => router.push(`${item.link}`)}
                  key={uniqid()}
                  className={`flex items-center px-3 py-2  text-gray-600 duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 transition-transform active:scale-95 ${
                    router?.asPath === item?.link
                      ? "border-b-2 border-b-blue-600 dark:font-bold dark:text-blue-600"
                      : ""
                  }`}
                >
                  <FaAngleRight size={18} />
                  <span className="mx-2 text-sm font-semibold">
                    {item.text}
                  </span>
                </div>
              ))}
          </div>
        </li>
      </ul>
      <hr />
      {linkArray.map((value, i) => (
        <Link
          key={uniqid()}
          className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700  active:scale-95 ${
            router?.asPath === value?.routeLink
              ? "border-b-2 border-b-blue-600 dark:font-bold dark:text-blue-600"
              : ""
          }`}
          href={`${value.routeLink}`}
        >
          {/* Icone */}
          {value.icone}
          {/*  */}
          <span className="mx-2 text-sm font-semibold">{value.routeName}</span>
        </Link>
      ))}
      {UserRole.ADMIN === client?.role && (
        <Link
          className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700  active:scale-95 ${
            router?.asPath === "/users"
              ? "border-b-2 border-b-blue-600 dark:font-bold dark:text-blue-600"
              : ""
          }`}
          href={`/users`}
        >
          {/* Icone */}
          <FaUsers size={24} />
          {/*  */}
          <span className="mx-2 text-sm font-semibold">Users</span>
        </Link>
      )}
    </nav>
  );
}

export { MobileSideBar };
