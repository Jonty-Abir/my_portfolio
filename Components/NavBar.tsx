import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [manuBar, setManuBar] = useState(false);
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    let rootHtml = document.getElementById("theme");
    if (rootHtml?.className) {
      rootHtml.classList.remove("dark");
    } else {
      rootHtml?.classList.add("dark");
    }
    return () => {};
  }, [theme]);
  let switchTheme = () => {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };

  const links = [
    {
      id: 1,
      pageTittle: "home",
      pageLink: "/",
    },
    {
      id: 2,
      pageTittle: "about",
      pageLink: "/about",
    },
    {
      id: 3,
      pageTittle: "contact",
      pageLink: "/contact",
    },
    {
      id: 4,
      pageTittle: "expreience",
      pageLink: "/experience",
    },
  ];
  return (
    <div className="">
      <nav
        className="navbar hover:scale-100 h-16 w-screen bg-gray-200 text-gray-800 bg-transparent dark:bg-transparent dark:text-slate-100 flex justify-between text-lg items-center backdrop-blur"
        style={{ position: "fixed", zIndex: 9999 }}
      >
        <div className="flex justify-center items-center">
          <h1 className="font-signature px-4 font-bold text-4xl">
            Abir Santra
          </h1>
        </div>
        {/* NavBar For large device */}

        <ul className="hidden md:flex justify-center items-center space-x-10 px-4 mr-16">
          <li onClick={switchTheme} className="cursor-pointer">
            {theme ? (
              <FaSun size={30} className="hover:animate-spin duration-900" />
            ) : (
              <FaMoon size={30} />
            )}
          </li>
          {links.map(({ id, pageLink, pageTittle }) => {
            return (
              <Link key={id} href={pageLink}>
                <li className="capitalize p2 font-bold cursor-pointer">
                  {pageTittle}
                </li>
              </Link>
            );
          })}
        </ul>

        <div
          className="z-50 p-4 m-2 md:hidden"
          onClick={() => {
            setManuBar(!manuBar);
          }}
        >
          {manuBar ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {/* NavBar For Mobile */}

        {manuBar && (
          <ul
            className="flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen text-white font-bold  space-y-10 md:hidden z-40"
            style={{
              // background: "rgb(2,0,36)",
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.6979166666666667) 35%, rgba(0,212,255,1) 100%)",
            }}
          >
            {links.map(({ id, pageLink, pageTittle }) => {
              return (
                <Link key={id} href={pageLink}>
                  <li className="px-4 cursor-pointer text-4xl capitalize hover:text-green-500">
                    {pageTittle}
                  </li>
                </Link>
              );
            })}
            <li onClick={switchTheme} className="hover:text-green-500">
              {theme ? (
                <FaSun size={30} className="hover:animate-spin duration-900" />
              ) : (
                <FaMoon size={30} />
              )}
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
