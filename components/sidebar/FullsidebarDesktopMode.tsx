import {
  BsCart4,
  BsFillBagHeartFill,
  BsFillInfoSquareFill,
} from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdDashboardCustomize } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import uniqid from "uniqid";

import { AiFillProfile } from "react-icons/ai";
import {
  FaAngleDown,
  FaAngleRight,
  FaAngleUp,
  FaHome,
  FaUsers,
} from "react-icons/fa";

import { signOut } from "@/helper/helper";
import { UserRole } from "@/interface/interface";
import {
  Iuser,
  setAccessToken,
  setIsAuthenticate,
  setUser,
} from "@/redux/sclice/authSclice";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { GiRotaryPhone, GiStoneStack } from "react-icons/gi";
import { SiTask } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";
import { VscArrowLeft } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import {
  setShowDeskTopSidebar,
  setShowProfileInfo,
} from "../../redux/sclice/clientSclice";
import NoficationToast from "../notification/NoficationToast";

function FullsidebarDesktopMode({ client }: { client: Iuser | null }) {
  const [loading, setLoading] = useState(false);
  const [dashboardSub, setdashboardSub] = useState(true);
  const [eCommercedSub, seteCommerceSub] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const subOfDashboard = [
    {
      text: "Profile",
      link: `/profile/${client?._id}`,
      icone: <ImProfile />,
    },
    {
      text: "DashBoard",
      link: `/dashboard`,
      icone: <MdDashboardCustomize />,
    },
    {
      text: "Blogs",
      link: "/blog",
      icone: <FaBlog />,
    },
  ];
  const subOfEcommerce = [
    {
      text: "Products",
      link: "/ecommerce",
      icone: <BsFillBagHeartFill />,
    },
    {
      text: "Carts",
      link: "/ecommerce/cart",
      icone: <BsCart4 />,
    },
    {
      text: "Orders",
      link: "/orders",
      icone: <VscServerProcess />,
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
      routeName: "Tech-Stack",
      routeLink: "/techStack",
      icone: <GiStoneStack size={20} />,
    },
    {
      routeName: "Contact Us",
      routeLink: "/contactUs",
      icone: <GiRotaryPhone size={20} />,
    },
  ];

  async function clieckToSignOut() {
    try {
      setLoading(true);
      if (!client) throw new Error();
      const response = await signOut(client._id);
      setLoading(false);
      toast.custom((t) => (
        <NoficationToast t={t} success={true} msg={`SUCCESS`} />
      ));
      dispatch(setUser(null));
      dispatch(setIsAuthenticate(false));
      dispatch(setAccessToken({ accessToken: "", refreshToken: "" }));
      dispatch(setShowProfileInfo());
      router.push("/signIn");
    } catch (error) {
      setLoading(false);
      toast.custom((t) => (
        <NoficationToast
          t={t}
          success={false}
          msg={`SignOut faild try again!`}
        />
      ));
    }
  }

  return (
    <aside className=" hidden lg:flex duration-200 showFullDeskTopSidebar  flex-col w-64 h-screen px-5 py-8 pt-2 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            className="w-auto h-6 bg-cover"
            src="/assets/logo_owner2.png"
            alt="logo"
            width={400}
            height={400}
          />
        </Link>
        <a
          className="bg-gray-800 px-3 py-2 flex justify-end rounded-md"
          onClick={() => dispatch(setShowDeskTopSidebar())}
        >
          <VscArrowLeft size={24} color="white" className="" />
        </a>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        {/* =================== */}
        <nav className="flex-1 -mx-3 space-y-3 ">
          <ul>
            {/* ================= Dashboard START ================= */}

            <li
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
            </li>
            {/* Dashboard Nested START*/}
            {dashboardSub &&
              subOfDashboard.map((item) => (
                <Link
                  href={`${item.link}`}
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
                  {item.icone}
                </Link>
              ))}

            {/* Dashboard Nested END*/}

            {/* ================= Dashboard END ================= */}

            {/* ================= E-Commerce START ================= */}

            <li
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
            </li>

            {eCommercedSub &&
              subOfEcommerce.map((item) => (
                <Link
                  href={`${item.link}`}
                  key={uniqid()}
                  className={`flex items-center px-3 py-2  text-gray-600 duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 transition-transform active:scale-95 ${
                    router.asPath === item.link
                      ? "border-b-2 border-b-blue-600 dark:font-bold dark:text-blue-600"
                      : ""
                  }`}
                >
                  <FaAngleRight size={18} />
                  <span className="mx-2 text-sm font-semibold">
                    {item.text}
                  </span>
                  {item.icone}
                </Link>
              ))}

            {/* E-Commerce Nested START*/}

            {/* E-Commerce Nested  END*/}

            {/* ================= E-Commerce END ================= */}
          </ul>

          <hr />

          {linkArray.map((items) => (
            <Link
              key={uniqid()}
              className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${
                router?.asPath === items?.routeLink
                  ? "border-b-2 border-b-blue-600 dark:font-bold dark:text-blue-600"
                  : ""
              }`}
              href={`${items.routeLink}`}
            >
              {items.icone}
              <span className="mx-2 text-sm font-medium">
                {items.routeName}
              </span>
            </Link>
          ))}
          {UserRole.ADMIN === client?.role && (
            <Link
              className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${
                router?.asPath === "/users"
                  ? "border-b-2 border-b-blue-600 dark:font-bold dark:text-blue-600"
                  : ""
              }`}
              href={`/users`}
            >
              <FaUsers size={24} />
              <span className="mx-2 text-sm font-medium">users</span>
            </Link>
          )}
        </nav>
        <div className="mt-6">
          <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
            <h2 className="text-sm font-medium text-gray-800 dark:text-white">
              New feature availabel!
            </h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              let{"'"}s go and explore the new features.
            </p>
            <Link href={`/blog`}>
              <Image
                className="object-cover w-full h-32 mt-2 rounded-lg duration-300 active:scale-105 hover:scale-105"
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1806&q=80"
                alt="Feature"
                width={600}
                height={600}
              />
            </Link>
          </div>
          {/* Profile */}
          <div className="flex items-center justify-between mt-6">
            {client && (
              <Link
                href={`/profile/${client._id}`}
                className="flex items-center gap-x-2"
              >
                <Image
                  className="object-cover rounded-full h-7 w-7 ring-2 ring-green-500"
                  src={`${client ? client.avatar : "/assets/user.png"}`}
                  alt="avatar"
                  width={400}
                  height={300}
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {client && `${client.firstName}  ${client?.lastName}`}
                </span>
              </Link>
            )}
            <a
              onClick={clieckToSignOut}
              className="text-gray-500 transition-colors duration-200 rotate-180 cursor-pointer dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
            >
              {/* TODO */}
              <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export { FullsidebarDesktopMode };

