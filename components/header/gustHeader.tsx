
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { useRouter } from "next/router";
import React from 'react';
import { HiX } from 'react-icons/hi';
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { useSelector } from 'react-redux';
import UserAvatarBtn from '../shared/userAvatarBtn';

const menuItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/aboutUs',
    },
    {
        name: 'Contact',
        href: '/contactUs',
    },
    {
        name: 'Blog',
        href: '/blog',
    },
    {
        name: 'Tech-Stack',
        href: '/techStack',
    },
    {
        name: 'DashBoard',
        href: '/dashboard',
    },
]

export function GustHeader() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const router = useRouter();
    const isAuthenticated = useSelector((state: RootState) => state.authSclice.isAuthenticated);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className=" w-screen fixed bg-transparent backdrop-blur-2xl z-50 border-b-2 px-4 pr-0">
            <div className="relative w-full">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pr-4 py-2 sm:px-6 lg:px-8 lg:pr-0 h-[4rem]">
                    <div className="inline-flex items-center space-x-2">

                        <span className="font-bold font-signature text-2xl"> Abir Santra</span>
                        {/* <Image src={"/assets/textLogo.png"} alt="logo" width={40} height={200} className=' h-auto w-auto' /> */}

                    </div>
                    {/* Large device */}
                    <div className="hidden grow items-start lg:flex">
                        <ul className="ml-12 inline-flex space-x-8">
                            {menuItems.map((item) => {

                                return (
                                    <li key={item.name} >
                                        <Link
                                            href={item.href}
                                            className={`inline-flex items-center text-sm font-semibold text-gray-800 dark:text-gray-50 hover:bg-gray-900 px-2 rounded-sm py-2 ${router.pathname == item.href ? "border-b-2 border-b-gray-400" : ""}`}
                                        >
                                            {item.name}
                                            <span>
                                                <RxCaretDown className="ml-2 h-4 w-4" />
                                            </span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {/*  */}
                    {isAuthenticated ? (
                        <div className="hidden  space-x-2 lg:flex items-center">
                            <UserAvatarBtn />
                        </div>
                    ) : (
                        <div className="hidden space-x-2 lg:block">
                            <Link href={"/signUp"} >
                                <button
                                    type="button"
                                    className={`rounded-md ${router.pathname == "/signUp" ? "border border-black dark:border-white" : ""}  bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:text-gray-50 hover:bg-gray-900`}
                                >
                                    Sign Up
                                </button>
                            </Link>
                            <Link href={"/signIn"} >
                                <button
                                    className={`rounded-md ${router.pathname == "/signIn" ? "border border-black dark:border-white" : ""} px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:text-gray-50 hover:bg-gray-900`}
                                    type="button"

                                >
                                    Sign In
                                </button>
                            </Link>
                        </div>
                    )}
                    {/*  */}
                    <div className="lg:hidden">
                        {/* <HiMenu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" /> */}
                        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-align-right stroke-slate-400 hover:stroke-slate-200" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 6l16 0" />
                            <path d="M10 12l10 0" />
                            <path d="M6 18l14 0" />
                        </svg>
                    </div>
                    {/* mobile */}
                    {/* {isMenuOpen ? ( */}
                    <div className={`absolute bg-transparent backdrop h-[80rem] inset-x-0 top-0 left-[-1rem] z-50 origin-top-right transform ${isMenuOpen ? '  duration-500 ' : ' duration-500 -translate-y-[80rem]'}  lg:-translate-y-[80rem] `}>
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-transparent backdrop-blur-2xl shadow-lg ring-1 ring-black ring-opacity-5 z-60 gustNavbar ">
                            <div className="px-5 pb-6 pt-5  text-black  dark:text-gray-50 ">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 50 56"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                stroke='#ffff'
                                            >
                                                <path
                                                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                                                    fill="black"
                                                />
                                            </svg>

                                        </span>
                                        <span className="font-bold font-signature text-2xl hidden">Abir Santra</span>
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
                                    <nav className="grid  space-y-1">
                                        {menuItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:text-black hover:bg-gray-200 ${router.pathname == item.href ? "bg-gray-200 text-black" : ""}`}
                                            >
                                                <span className="ml-3 text-base font-medium ">
                                                    {item.name}
                                                </span>
                                                <span >
                                                    <RxCaretRight className="ml-3 h-4 w-4" />
                                                </span>
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                                {/*  */}
                                {isAuthenticated ? (
                                    ""
                                ) : (
                                    <div className="mt-8 space-y-1 ">
                                        <Link href={"/signIn"}>
                                            <button
                                                type="button"
                                                className={`w-full rounded-md ${router.pathname == "/signIn" ? "border border-black dark:border-white" : ""} px-3 py-2 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-gray-900`}
                                            >
                                                Sign In
                                            </button>
                                        </Link>
                                        <Link href={"/signUp"}>
                                            <button
                                                type="button"
                                                className={`w-full rounded-md ${router.pathname == "/signUp" ? "border border-black dark:border-white" : ""} px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-gray-900`}
                                            >
                                                Sign Up
                                            </button>
                                        </Link>
                                    </div>
                                )}
                                {/*  */}

                            </div>
                        </div>
                    </div>
                    {/* ) : ("")} */}
                </div>
            </div >
        </div>
    )
}


export default GustHeader;