import { signOut } from "@/helper/helper";
import { UserRole } from "@/interface/interface";
import {
  setAccessToken,
  setIsAuthenticate,
  setUser,
} from "@/redux/sclice/authSclice";
import { RootState } from "@/redux/store";
import {
  ArrowLeftOnRectangleIcon,
  ChartBarIcon,
  CommandLineIcon,
  HomeIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { toast } from "react-hot-toast";
import { HiArrowRight } from "react-icons/hi";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowDeskTopSidebar,
  setShowProfileInfo,
  setShowSideBar,
} from "../../redux/sclice/clientSclice";
import NoficationToast from "../notification/NoficationToast";

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
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

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
    <>
      {/*FOR DESKTOP SIDEBAR*/}

      <div>
        {showFullDeskTopSidebar ? (
          <aside className=" hidden lg:flex duration-200 showFullDeskTopSidebar  flex-col w-64 h-screen px-5 py-8 pt-2 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <div className="flex justify-between items-center">
              {/* <span className="font-bold font-signature text-2xl hidden mxs:block">
                Abir Santra
              </span> */}
              <Image
                className="w-auto h-6 bg-cover"
                src="/assets/logo_owner2.png"
                alt="logo"
                width={400}
                height={400}
              />

              <a
                className="bg-gray-800 px-3 py-2 flex justify-end rounded-md"
                onClick={() => dispatch(setShowDeskTopSidebar())}
              >
                {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#4F46E5"
                            className="w-8 h-8"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                clipRule="evenodd"
                            />
                            <path
                                d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                        </svg> */}

                <VscArrowLeft size={24} color="white" className="" />
              </a>
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav className="flex-1 -mx-3 space-y-3 ">
                <Link
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="/"
                >
                  <HomeIcon className="w-5 h-5" />
                  <span className="mx-2 text-sm font-medium">Home</span>
                </Link>
                <Link
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="/dashboard"
                >
                  <ChartBarIcon className="w-5 h-5" />
                  <span className="mx-2 text-sm font-medium">Dashboard</span>
                </Link>
                <Link
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="/project"
                >
                  <CommandLineIcon className="w-5 h-5" />
                  <span className="mx-2 text-sm font-medium">Projects</span>
                </Link>
                {/* Only Admin can access */}
                {client && client.role === UserRole.ADMIN && (
                  <Link
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="/users"
                  >
                    <UserGroupIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Users</span>
                  </Link>
                )}

                <Link
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="/setting"
                >
                  <WrenchScrewdriverIcon className="w-5 h-5" />
                  <span className="mx-2 text-sm font-medium">Setting</span>
                </Link>
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
                      className="object-cover w-full h-32 mt-2 rounded-lg"
                      src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1806&q=80"
                      alt="Feature"
                      width={400}
                      height={300}
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
                    <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        ) : (
          <aside className=" duration-200 showFullDeskTopSidebar hidden lg:flex flex-col items-center w-16 h-screen py-8 pt-2 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700">
            <nav className="flex flex-col items-center flex-1 space-y-6">
              <a
                className="bg-gray-800 px-2 py-2 rounded-md"
                onClick={() => dispatch(setShowDeskTopSidebar())}
              >
                {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#4F46E5"
                            className="w-8 h-8"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                clipRule="evenodd"
                            />
                            <path
                                d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                        </svg> */}
                <HiArrowRight size={28} color="white" />
              </a>
              {/* home */}
              <Link
                href="/"
                className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </Link>
              {/* Dashborad */}
              <Link
                href="/dashboard"
                className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </Link>
              {/* Project */}
              <Link
                href="/project"
                className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </Link>
              {/* Blog */}
              <Link
                href="/blog"
                className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </Link>
              {/*  Users Only admin can access */}
              {client && client.role === UserRole.ADMIN && (
                <Link
                  href="/users"
                  className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
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
            <Image
              className="w-auto h-6 bg-cover"
              src="/assets/logo_owner2.png"
              alt="logo"
              width={400}
              height={400}
            />
            <VscChromeClose
              size={28}
              className={`bg-gray-700 p-2 rounded-sm mb-4`}
              onClick={() => dispatch(setShowSideBar())}
            />
          </div>
          <nav className="flex-1 -mx-3 space-y-3">
            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                ></path>
              </svg>
              <span className="mx-2 text-sm font-medium">Home</span>
            </Link>
            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                ></path>
              </svg>
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                ></path>
              </svg>
              <span className="mx-2 text-sm font-medium">Projects</span>
            </Link>
            {/* Users Only admin can access */}
            {client && client.role === UserRole.ADMIN && (
              <Link
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="/users"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  ></path>
                </svg>
                <span className="mx-2 text-sm font-medium">Users</span>
              </Link>
            )}

            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/setting"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                ></path>
              </svg>
              <span className="mx-2 text-sm font-medium">Setting</span>
            </Link>
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
                  className="object-cover w-full h-32 mt-2 rounded-lg"
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
