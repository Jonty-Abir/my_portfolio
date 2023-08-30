import { setShowSideBar } from "@/redux/sclice/clientSclice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineXCircle, HiX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import UserAvatarBtn from "../shared/userAvatarBtn";

export default function Navbar() {
  // react hooks
  const [showSearchBtn, setShowSearchBtn] = useState(false);
  const [showInfoBtn, setShowInfoBtn] = useState(false);
  const [showNotificationBtn, setShowNotificationBtn] = useState(false);

  // redux hooks
  const dispatch = useDispatch();
  // const state = useSelector((state: IState) => state.uiSclice.showSideBar);
  return (
    <>
      <div className="sticky top-0  border-b border-slate-200 z-30 navbar">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 -mb-px">
            {/*Header: Left side*/}
            <div className="flex  gap-x-4 md:gap-x-8 justify-between items-center">
              {/*Hamburger button*/}
              <svg
                onClick={() => dispatch(setShowSideBar())}
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-align-left cursor-pointer stroke-slate-400 hover:stroke-slate-200 lg:hidden"
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
                <path d="M4 12l10 0" />
                <path d="M4 18l14 0" />
              </svg>
              {/* <span className="font-bold text-2xl hidden font-signature mxs:block">
                Abir Santra
              </span> */}
              <Link href={"/"}>
                <Image
                  className="hidden mxs:block w-auto h-6 bg-cover my-auto"
                  src="/assets/logo_owner2.png"
                  alt="logo"
                  width={400}
                  height={400}
                />
              </Link>
            </div>

            {/* Header: Right side */}
            <div className="flex items-center space-x-3">
              {/* Search button */}
              <div>
                {/* Button */}
                <button
                  onClick={() => setShowSearchBtn(true)}
                  className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full"
                  aria-controls="search-modal"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current text-slate-500"
                      d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                    />
                    <path
                      className="fill-current text-slate-400"
                      d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                    />
                  </svg>
                </button>
                {/* Modal backdrop search back drop */}
                <div
                  className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity ${
                    showSearchBtn
                      ? "duration-300"
                      : " duration-300 -translate-y-[80rem]"
                  }`}
                ></div>
                {/* Modal dialog  */}
                <div
                  id="search-modal"
                  className={`fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6  ${
                    showSearchBtn
                      ? " duration-300 "
                      : " duration-300 -translate-y-[80rem] "
                  }`}
                  role="dialog"
                >
                  {/* scearch container from */}
                  <div
                    className={`bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg`}
                  >
                    {/* Search form */}
                    <form className="border-b border-slate-200 ">
                      <div className="relative">
                        <label htmlFor="modal-search" className="sr-only">
                          Search
                        </label>
                        <div className={`flex`}>
                          <input
                            id="modal-search"
                            className="w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4"
                            type="search"
                            placeholder="Search Anything…"
                          />
                          <div
                            className={`flex cursor-pointer justify-center px-2 items-center border-2`}
                            onClick={() => setShowSearchBtn(false)}
                          >
                            <HiX color={"red"} size={24} />
                          </div>
                        </div>
                        <button
                          className="absolute inset-0 right-auto group"
                          type="submit"
                          aria-label="Search"
                        >
                          <svg
                            className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                            <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                    <div className="py-4 px-2">
                      {/* Recent searches */}
                      <div className="mb-3 last:mb-0">
                        <div className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">
                          Recent searches
                        </div>
                        <ul className="text-sm">
                          <li>
                            <a
                              className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                              href="#0"
                            >
                              <svg
                                className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                              </svg>
                              <span>
                                Form Builder - 23 hours on-demand video
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                              href="#0"
                            >
                              <svg
                                className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                              </svg>
                              <span>Access Mosaic on mobile and TV</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                              href="#0"
                            >
                              <svg
                                className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                              </svg>
                              <span>Product Update - Q4 2021</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                              href="#0"
                            >
                              <svg
                                className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                              </svg>
                              <span>
                                Master Digital Marketing Strategy course
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                              href="#0"
                            >
                              <svg
                                className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                              </svg>
                              <span>Dedicated forms for products</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                              href="#0"
                            >
                              <svg
                                className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                              </svg>
                              <span>Product Update - Q4 2021</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Recent pages */}
                      <div className="mb-3 last:mb-0">
                        <div className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">
                          Recent pages
                        </div>
                        <ul className="text-sm">
                          <li>
                            <a
                              className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                              href="#0"
                            >
                              <svg
                                className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                              </svg>
                              <span>
                                <span className="font-medium text-slate-800 group-hover:text-white">
                                  Messages
                                </span>
                                - Conversation / … / Mike Mills
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                              href="#0"
                            >
                              <svg
                                className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                              </svg>
                              <span>
                                <span className="font-medium text-slate-800 group-hover:text-white">
                                  Messages
                                </span>
                                - Conversation / … / Eva Patrick
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notifications button */}
              <div className="relative inline-flex">
                <button
                  className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full"
                  onClick={() => setShowNotificationBtn((prev) => !prev)}
                >
                  <span className="sr-only">Notifications</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current text-slate-500"
                      d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
                    />
                    <path
                      className="fill-current text-slate-400"
                      d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
                    />
                  </svg>
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></div>
                </button>
                {/*TODO*/}
                <div
                  className={`origin-top-right z-10 absolute top-12 right-0 -mr-48 sm:mr-0 xs:mr-0 min-w-80 vxs:-mr-32 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
                    showNotificationBtn
                      ? " duration-300"
                      : " duration-300 -translate-y-[80rem]"
                  }`}
                >
                  <div className=" flex justify-between">
                    <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4 ">
                      Notifications
                    </div>
                    <HiOutlineXCircle
                      size={24}
                      color="red"
                      className=" mr-1"
                      onClick={() => setShowNotificationBtn((prev) => !prev)}
                    />
                  </div>
                  <ul>
                    <li className="border-b border-slate-200 last:border-0">
                      <a
                        className="block py-2 px-4 hover:bg-slate-50"
                        href="#0"
                      >
                        <span className="block text-sm mb-2">
                          📣
                          <span className="font-medium text-slate-800">
                            Edit your information in a swipe
                          </span>
                          Sint occaecat cupidatat non proident, sunt in culpa
                          qui officia deserunt mollit anim.
                        </span>
                        <span className="block text-xs font-medium text-slate-400">
                          Feb 12, 2021
                        </span>
                      </a>
                    </li>
                    <li className="border-b border-slate-200 last:border-0">
                      <a
                        className="block py-2 px-4 hover:bg-slate-50"
                        href="#0"
                      >
                        <span className="block text-sm mb-2">
                          📣
                          <span className="font-medium text-slate-800">
                            Edit your information in a swipe
                          </span>
                          Sint occaecat cupidatat non proident, sunt in culpa
                          qui officia deserunt mollit anim.
                        </span>
                        <span className="block text-xs font-medium text-slate-400">
                          Feb 9, 2021
                        </span>
                      </a>
                    </li>
                    <li className="border-b border-slate-200 last:border-0">
                      <a
                        className="block py-2 px-4 hover:bg-slate-50"
                        href="#0"
                      >
                        <span className="block text-sm mb-2">
                          🚀
                          <span className="font-medium text-slate-800">
                            Say goodbye to paper receipts!
                          </span>
                          Sint occaecat cupidatat non proident, sunt in culpa
                          qui officia deserunt mollit anim.
                        </span>
                        <span className="block text-xs font-medium text-slate-400">
                          Jan 24, 2020
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Info button */}
              <div className="relative inline-flex ">
                <button
                  className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full"
                  onClick={() => setShowInfoBtn((prev) => !prev)}
                >
                  <span className="sr-only">Info</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current text-slate-500"
                      d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
                    />
                  </svg>
                </button>
                <div
                  className={`origin-top-right z-10 absolute top-12 right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
                    showInfoBtn
                      ? " duration-300"
                      : " duration-300 -translate-y-[50rem]"
                  }`}
                >
                  <div className="flex justify-between">
                    <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-3 ">
                      Need help ?
                    </div>
                    <HiOutlineXCircle
                      size={24}
                      color="red"
                      className=" mr-1"
                      onClick={() => setShowInfoBtn((prev) => !prev)}
                    />
                  </div>
                  <ul>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                        href="#0"
                      >
                        <svg
                          className="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2"
                          viewBox="0 0 12 12"
                        >
                          <rect y="3" width="12" height="9" rx="1" />
                          <path d="M2 0h8v2H2z" />
                        </svg>
                        <span>Documentation</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                        href="#0"
                      >
                        <svg
                          className="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2"
                          viewBox="0 0 12 12"
                        >
                          <path d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z" />
                        </svg>
                        <span>Support Site</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                        href="#0"
                      >
                        <svg
                          className="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" />
                        </svg>
                        <span>Contact us</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Divider */}
              <hr className="w-px h-6 bg-slate-200" />

              {/* User button */}
              <UserAvatarBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
