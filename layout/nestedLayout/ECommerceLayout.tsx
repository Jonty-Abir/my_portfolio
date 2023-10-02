import { ErrorBoundary } from "react-error-boundary";

import Image from "next/image";
import { ReactElement, Suspense } from "react";
import { FcSearch } from "react-icons/fc";
import uniqid from "uniqid";
import Loading from "../../components/loading/loading";
import { EcommerceSwiper } from "../../components/shared/EcommerceSwiper";

interface IChildren {
  children: ReactElement;
  e_slider: boolean;
}

export default function NestLayoutEcommerce({ children, e_slider }: IChildren) {
  const categorys = [
    {
      category: "Grocery",
      img: "/assets/ecommerce/29327f40e9c4d26b.webp",
    },
    {
      category: "Fashion",
      img: "/assets/ecommerce/0d75b34f7d8fbcb3.webp",
    },
    {
      category: "Mobile",
      img: "/assets/ecommerce/22fddf3c7da4c4f4.webp",
    },
    {
      category: "Electronics",
      img: "/assets/ecommerce/69c6589653afdb9a.webp",
    },
    {
      category: "Travle",
      img: "/assets/ecommerce/71050627a56b4693.webp",
    },
    {
      category: "Home Furniture",
      img: "/assets/ecommerce/ab7e2b022a4587dd.webp",
    },
    {
      category: "More",
      img: "/assets/ecommerce/dff3f7adcf3a90c6.webp",
    },
    {
      category: "Appliances",
      img: "/assets/ecommerce/0ff199d1bd27eb98.webp",
    },
  ];

  return (
    <ErrorBoundary
      fallback={<h2 className="isError">Something went wrong..</h2>}
    >
      <div className="px-4 sm:px-6 lg:px-8 py-8 pt-2 w-full max-w-9xl mx-auto bg-gray-900">
        <div className="my-4 flex bg-slate-200 font-semibold text-gray-600 rounded-md overflow-x-scroll toHideScrollBar gap-x-8 items-center lg:justify-evenly px-2">
          {categorys.map((v, i) => (
            <div key={uniqid()} className="flex flex-col gap-y-2 min-w-[5rem]">
              <Image
                className=" bg-cover w-22 h-16"
                src={`${v.img}`}
                alt=""
                width={100}
                height={100}
              />
              <div className=" text-center text-xs font-semibold lg:text-sm">
                {v.category}
              </div>
            </div>
          ))}
        </div>
        {/* Search Start */}
        <div className="max-w-xl mb-5 mt-4">
          <form className="relative">
            <label htmlFor="app-search" className="sr-only">
              Search
            </label>
            <input
              id="app-search"
              className="form-input w-full pl-9 py-3 focus:border-slate-300 placeholder:text-gray-600 font-semibold"
              type="search"
              placeholder="Search…"
            />
            <button
              className="absolute inset-0 mr-2 left-auto group"
              type="button"
              aria-label="Search"
            >
              <FcSearch size={28} />
            </button>
          </form>
        </div>
        {e_slider && <EcommerceSwiper />}
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </ErrorBoundary>
  );
}
