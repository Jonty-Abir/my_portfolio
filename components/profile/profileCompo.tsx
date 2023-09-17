import { UserRole } from "@/interface/interface";
import {
  setACtiveAccountFrom,
  setACtiveBlogFrom,
} from "@/redux/sclice/clientSclice";
import { RootState } from "@/redux/store";
import { FcSettings } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import ClientUpdateFrom from "../froms/ClientUpdateFrom";
import BlogFrom from "../froms/blogFrom";

const ProfileCompo = () => {
  const client = useSelector((state: RootState) => state.authSclice.user);
  const accessToken = useSelector(
    (state: RootState) => state.authSclice.accessToken
  );
  const refreshToken = useSelector(
    (state: RootState) => state.authSclice.refreshToken
  );

  const activeFrom = useSelector((state: RootState) => state.uiSclice.from);
  const disPatch = useDispatch();

  if (!client || !accessToken || !refreshToken) {
    return <h2 className="loading">Loading...</h2>;
  }
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-slate-300">
        {/* Page header */}
        <div className="mb-8">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold ">
            Account Settings <FcSettings className=" inline-block" />
          </h1>
        </div>

        <div className="bg-white shadow-lg rounded-sm mb-8">
          <div className="flex flex-col md:-mr-px lg:flex-row">
            {/* Sidebar */}
            {/* flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 min-w-60 md:space-y-3 */}
            <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 min-w-60 md:space-y-3">
              {/* Group 1 */}
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase mb-3">
                  <span className="flex items-center">features</span>
                </div>
                <ul className="flex lg:flex-col flex-nowrap gap-x-2 items-center space-y-2 md:block mr-3 md:mr-0">
                  <li
                    className={`mr-0.5 md:mr-0 md:mb-0.5 ${
                      activeFrom.account && "liBorder"
                    }`}
                    onClick={() => disPatch(setACtiveAccountFrom(true))}
                  >
                    <a className="flex items-center gap-x-2 p-2 rounded whitespace-nowrap bg-indigo-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-user-shield stroke-indigo-500"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#597e8d"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h2" />
                        <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      </svg>
                      <span className="text-sm font-medium text-indigo-500">
                        My Account
                      </span>
                    </a>
                  </li>
                  <li
                    className={`mr-0.5 md:mr-0 md:mb-0.5 ${
                      activeFrom.blog && "liBorder"
                    }`}
                    onClick={() => disPatch(setACtiveBlogFrom(true))}
                  >
                    <a className="flex items-center gap-2 p-2 rounded text-indigo-500 whitespace-nowrap bg-indigo-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-apps-filled "
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#597e8d"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M9 3h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z"
                          strokeWidth="0"
                          fill="currentColor"
                        />
                        <path
                          d="M9 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z"
                          strokeWidth="0"
                          fill="currentColor"
                        />
                        <path
                          d="M19 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z"
                          strokeWidth="0"
                          fill="currentColor"
                        />
                        <path
                          d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2h2a1 1 0 0 1 .117 1.993l-.117 .007h-2v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 1 -1z"
                          strokeWidth="0"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-sm font-medium text-indigo-500">
                        Add Blog
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Group 2 */}
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase mb-3">
                  Experience
                </div>
                <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
                  <li className="mr-0.5 md:mr-0 md:mb-0.5">
                    <a className="flex items-center px-2.5 py-2 rounded whitespace-nowrap">
                      <svg
                        className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.001 3h2v4h-2V3zm1 7a1 1 0 110-2 1 1 0 010 2zM15 16a1 1 0 01-.6-.2L10.667 13H1a1 1 0 01-1-1V1a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1zM2 11h9a1 1 0 01.6.2L14 13V2H2v9z" />
                      </svg>
                      <span className="text-sm font-medium text-slate-600 hover:text-slate-700">
                        Give Feedback
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Account */}
            {activeFrom.account && (
              <ClientUpdateFrom
                client={client}
                accessToken={accessToken}
                refreshToken={refreshToken}
              />
            )}
            {/* Blog */}
            {activeFrom.blog && client && client.role === UserRole.ADMIN && (
              <BlogFrom
                client={client}
                accessToken={accessToken}
                refreshToken={refreshToken}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCompo;
