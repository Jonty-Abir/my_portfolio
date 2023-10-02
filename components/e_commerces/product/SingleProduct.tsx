import ProductDetailsCarosule from "@/components/e_commerces/product/productDetailsCarosule";
import { Heart, Share } from "lucide-react";
import { useRouter } from "next/router";
import { AiFillStar } from "react-icons/ai";
import { RWebShare } from "react-web-share";
import Multicarosule from "../../carosule/Multicarosule";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function SingleProduct() {
  const router = useRouter();
  const imgAr = [
    "/assets/ecommerce/product/p1.png",
    "/assets/ecommerce/product/p2.png",
    "/assets/ecommerce/product/p3.png",
    "/assets/ecommerce/product/p4.png",
    "/assets/ecommerce/product/p5.png",
    "/assets/ecommerce/product/p6.png",
  ];

  const { productId } = router.query;

  return (
    <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10 ">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            {/* Left Side ST */}
            {/* <WraperProduct className=""> */}
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
              <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                <ProductDetailsCarosule imgAr={imgAr} />
              </div>
            </div>
            {/* </WraperProduct> */}
            {/* Left Side End */}
            {/* Right Side St */}
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-5">
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">
                  Nike Airmax Pro V2
                </h2>
                <p className="mt-4 font-bold">$250</p>
              </div>
              <div className="mb-2 pt-0.5">
                <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                  available in:
                </h4>
                <ul className="flex flex-wrap space-x-2">
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    8 UK
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    9 UK
                  </li>
                  <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    10 UK
                  </li>
                </ul>
              </div>
              <div className="pb-2" />
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <button
                  type="button"
                  className="w-full rounded-md bg-yellow-500 px-3 py-4 text-md font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-transform active:scale-95"
                >
                  Buy Now
                </button>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-transform active:scale-95"
                  >
                    <Heart size={16} className="mr-3" />
                    <span className="block">Wishlist</span>
                  </button>
                  <div className="relative">
                    <RWebShare
                      data={{
                        text: "E-Commerce Product",
                        url: "http://abirsantraonline.netlify.app/ecommerce/2",
                        title: "E-Commerce Abir",
                      }}
                      onClick={() => console.log("shared successfully!")}
                    >
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-transform active:scale-95"
                      >
                        <Share size={16} className="mr-3" />
                        <span className="block">Share</span>
                      </button>
                    </RWebShare>
                  </div>
                </div>
              </div>
              <div className="pt-6 xl:pt-8">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <div className=" flex flex-col gap-y-4">
                <div className="text-sm">
                  A chip (often just chip, or crisp in British and Irish
                  English) may be a thin slice of potato that has been either
                  deep fried or baked until crunchy. theyre commonly served as a
                  snack, side dish, or appetizer.
                </div>
                <div className="text-sm">
                  A chip (often just chip, or crisp in British and Irish
                  English) may be a thin slice of potato that has been either
                  deep fried or baked until crunchy. theyre commonly served as a
                  snack, side dish, or appetizer.
                </div>
                </div>
              </div>
            </div>
            {/* Right Side End */}
          </div>
        </div>
      </div>
      {/* Reating Section Start */}
      <section>
        <div className="flex items-center mb-2">
          <AiFillStar fill="#fafa05" className="inline" size={22} />
          <AiFillStar fill="#fafa05" className="inline" size={22} />
          <AiFillStar fill="#fafa05" className="inline" size={22} />
          <AiFillStar fill="#fafa05" className="inline" size={22} />
          <AiFillStar className="inline" size={22} />
          <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
            4.95 out of 5
          </p>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          1,745 global ratings
        </p>
        {/* Reating Bar */}
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            5 <AiFillStar fill="#fafa05" className="inline" size={22} />
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-green-600 rounded"
              style={{ width: "70%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            70%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            4 <AiFillStar fill="#fafa05" className="inline" size={22} />
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-green-600 rounded"
              style={{ width: "17%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            17%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            3 <AiFillStar fill="#fafa05" className="inline" size={22} />
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-500 rounded"
              style={{ width: "8%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            8%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            2 <AiFillStar fill="#fafa05" className="inline" size={22} />
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-500 rounded"
              style={{ width: "4%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            4%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            1 <AiFillStar fill="#fafa05" className="inline" size={22} />
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-red-500 rounded"
              style={{ width: "1%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            1%
          </span>
        </div>
        Reating Bar
      </section>
      {/* Reating Section End */}
      {/* Related Section START */}
      <Multicarosule />
      {/* Related Section END  */}
    </div>
  );
}

export { SingleProduct };

