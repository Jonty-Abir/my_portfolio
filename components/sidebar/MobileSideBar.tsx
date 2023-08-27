import { Iuser } from "@/redux/sclice/authSclice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillProfile } from "react-icons/ai";
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
  const [dashboardSub, setdashboardSub] = useState(false);
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
      icone: <FaUsers size={24} />,
      routeLink: "/users",
      routeName: "Users",
    },
    {
      icone: <CgProfile size={24} />,
      routeLink: `/profile/${client?._id}`,
      routeName: "Profile",
    },
  ];

  return (
    <nav className="flex-1 -mx-3 space-y-3">
      <div className="my-4">
        <div className="z-20">
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
            {dashboardSub &&
              subOfDashboard.map((item) => (
                <div
                  onClick={() => router.push(`${item.link}`)}
                  key={uniqid()}
                  className={`flex items-center px-3 py-2  text-gray-600 duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 transition-transform active:scale-95`}
                >
                  <FaAngleRight size={18} />
                  <span className="mx-2 text-sm font-semibold">
                    {item.text}
                  </span>
                </div>
              ))}
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
                  className={`flex items-center px-3 py-2  text-gray-600 duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 transition-transform active:scale-95`}
                >
                  <FaAngleRight size={18} />
                  <span className="mx-2 text-sm font-semibold">
                    {item.text}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <hr />
      {linkArray.map((value, i) => (
        <Link
          key={uniqid()}
          className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700  active:scale-95"
          href={`${value.routeLink}`}
        >
          {/* Icone */}
          {value.icone}
          {/*  */}
          <span className="mx-2 text-sm font-semibold">{value.routeName}</span>
        </Link>
      ))}
    </nav>
  );
}

export { MobileSideBar };