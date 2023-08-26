import { signOut } from "@/helper/helper";
import {
  setAccessToken,
  setIsAuthenticate,
  setUser,
} from "@/redux/sclice/authSclice";
import { setShowProfileInfo } from "@/redux/sclice/clientSclice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FcSettings } from "react-icons/fc";
import { HiOutlineXCircle } from "react-icons/hi";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import NoficationToast from "../notification/NoficationToast";
import LoadingBtn from "./LoadingBtn";

function UserAvatarBtn() {
  const disPatch = useDispatch();
  const client = useSelector((state: RootState) => state.authSclice.user);
  const profileInfo = useSelector(
    (state: RootState) => state.uiSclice.showProfileInfo
  );
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function clieckToSignOut() {
    try {
      setLoading(true);
      if (!client) throw new Error();
      const response = await signOut(client._id);
      setLoading(false);
      toast.custom((t) => (
        <NoficationToast t={t} success={true} msg={`SUCCESS`} />
      ));
      router.push("/signIn");
      disPatch(setUser(null));
      disPatch(setIsAuthenticate(false));
      disPatch(setAccessToken({ accessToken: "", refreshToken: "" }));
      disPatch(setShowProfileInfo());
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
    <div className="relative inline-flex">
      <Toaster />
      <button
        className="inline-flex justify-center items-center group"
        onClick={() => disPatch(setShowProfileInfo())}
      >
        <div className="relative">
          {client && (
            <Image
              className="w-8 h-8 ring-2 ring-green-500 rounded-full"
              src={client ? client.avatar : "/assets/user.png"}
              width="32"
              height="32"
              alt="User"
            />
          )}
          <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium transition-transform active:scale-95">
            {client && client.firstName}
          </span>
          <svg
            className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>
      <div
        className={`origin-top-right z-10 absolute top-12 right-0 min-w-44 bg-gray-50 border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          profileInfo ? " duration-300 " : " duration-300 -translate-y-[30rem] "
        }`}
      >
        <div className=" flex justify-between pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
          <div className="transition-transform active:scale-95">
            {client && (
              <Link
                href={`/profile/${client._id}`}
                className="font-bold text-slate-600"
              >
                {client &&
                  `${client && client.firstName} ${client && client.lastName}`}
              </Link>
            )}
            <div className="text-xs text-slate-500 italic font-semibold">
              {client && client?.role}
            </div>
          </div>
          <div>
            <HiOutlineXCircle
              className="cursor-pointer"
              color="red"
              size={24}
              onClick={() => disPatch(setShowProfileInfo())}
            />
          </div>
        </div>
        <ul>
          <li>
            <Link
              className="text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3 font-bold"
              href="/setting"
            >
              Settings <FcSettings size={26} className="inline pl-2" />
            </Link>
          </li>
          <li>
            <a
              onClick={clieckToSignOut}
              className="font-bold text-sm text-indigo-500 hover:text-indigo-600  py-1 px-3 cursor-pointer flex justify-left items-center"
            >
              {loading ? <LoadingBtn /> : `Sign Out`}
              <MdOutlineLogout
                size={26}
                className="inline pl-2 text-gray-600"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserAvatarBtn;
