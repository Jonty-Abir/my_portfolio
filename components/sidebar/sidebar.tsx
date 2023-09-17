import { UserRole } from "@/interface/interface";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { AiFillProfile } from "react-icons/ai";
import { FaBlog, FaHome, FaUsers } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { SiTask } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowDeskTopSidebar,
  setShowSideBar,
} from "../../redux/sclice/clientSclice";
import { FullsidebarDesktopMode } from "./FullsidebarDesktopMode";
import { MobileSideBar } from "./MobileSideBar";

interface IChildren {
  children: ReactElement;
}

export default function Sidebar() {
  // redux hooks
  const showFullDeskTopSidebar = useSelector(
    (state: RootState) => state.uiSclice.showDeskTopSidebar
  );
  const showSideBar = useSelector(
    (state: RootState) => state.uiSclice.showSideBar
  );
  const client = useSelector((state: RootState) => state.authSclice.user);

  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <>
      {/*FOR DESKTOP SIDEBAR*/}

      <div>
        {showFullDeskTopSidebar ? (
          <FullsidebarDesktopMode client={client} />
        ) : (
          <aside className="duration-300 showFullDeskTopSidebar hidden lg:flex flex-col items-center w-16 h-screen py-8 pt-2 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700">
            <nav className="flex flex-col items-center flex-1 space-y-6">
              <a
                className="bg-gray-800 px-2 py-2 rounded-md"
                onClick={() => dispatch(setShowDeskTopSidebar())}
              >
                <HiArrowRight size={28} color="white" />
              </a>
              {/* home */}
              <Link
                href="/"
                className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <FaHome size={24} />
              </Link>
              {/* Dashborad */}
              <Link
                href="/dashboard"
                className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <AiFillProfile size={24} />
              </Link>
              {/* E-Commecre */}
              <Link
                href="/ecommerce"
                className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <TiShoppingCart size={24} />
              </Link>
              {/* Project */}
              <Link
                href="/project"
                className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <SiTask size={24} />
              </Link>
              {/* Blog */}
              <Link
                href="/blog"
                className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <FaBlog size={24} />
              </Link>
              {/*  Users Only admin can access */}
              {client && client.role === UserRole.ADMIN && (
                <Link
                  href="/users"
                  className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                >
                  <FaUsers size={24} />
                </Link>
              )}
            </nav>
            {/* Setting */}
            <div className="flex flex-col items-center space-y-6">
              <Link
                href="/setting"
                className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:bg-gray-800 bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
              {/* Profile */}
              {client && (
                <Link href={`/profile/${client._id}`}>
                  <Image
                    className="object-cover w-8 h-8 rounded-full ring-2 ring-green-500"
                    src={client.avatar || "/assets/user.png"}
                    alt="User avatar"
                    width={300}
                    height={300}
                  />
                </Link>
              )}
            </div>
          </aside>
        )}
      </div>

      {/*FOR MOBILE SIDEBAR*/}
      <aside
        className={`fixed flex z-60 flex-col  w-64 h-screen px-5 py-8 pt-4 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 ${
          showSideBar ? " duration-300" : " duration-300 -translate-x-[50rem]"
        }`}
      >
        <div className="flex flex-col justify-between flex-1 ">
          <div className={`flex justify-between`}>
            {/* <span className="font-bold font-signature text-2xl">
              Abir Santra
            </span> */}
            <Link href={"/"}>
              <Image
                className="w-auto h-6 bg-cover"
                src="/assets/logo_owner2.png"
                alt="logo"
                width={400}
                height={400}
              />
            </Link>
            <VscChromeClose
              size={28}
              className={`bg-gray-700 p-2 rounded-sm mb-4`}
              onClick={() => dispatch(setShowSideBar())}
            />
          </div>
          {/* Moblibe SideBar */}
          <MobileSideBar client={client} />
          {/*  */}
          <div className="mt-6">
            <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
              <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                New feature available .
              </h2>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                let{"'"}s go and explore the new features.
              </p>
              <Link href={`/blog`}>
                <Image
                  className="object-cover w-full h-32 mt-2 rounded-lg duration-300 active:scale-105 hover:scale-105"
                  src={`https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1806&amp;q=80`}
                  alt="Feature"
                  width={80}
                  height={60}
                />
              </Link>
            </div>
            <div className="flex items-center justify-between mt-6">
              {client && (
                <Link
                  href={`/profile/${client._id}`}
                  className="flex items-center gap-x-2"
                >
                  <Image
                    className="object-cover rounded-full h-7 w-7 ring-2 ring-green-500"
                    src={`${client ? client?.avatar : "/assets/user.png"}`}
                    alt="avatar"
                    width={80}
                    height={60}
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {client && `${client?.firstName}  ${client?.lastName}`}
                  </span>
                </Link>
              )}
              <a
                href="#"
                className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
