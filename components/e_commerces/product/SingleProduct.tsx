import ProductDetailsCarosule from "@/components/e_commerces/product/productDetailsCarosule";
import { getSingleProduct } from "@/helper/ecommerce.helper";
import { useQuery } from "@tanstack/react-query";
import { Heart, Share } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { RWebShare } from "react-web-share";
import Multicarosule from "../../carosule/Multicarosule";

function SingleProduct() {
  const [selectedSize, setSelectedSize] = useState("");
  const [showError, setShowError] = useState(false);
  const [pageUrl, setPageUrl] = useState("");
  const valueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const router = useRouter();
  const paramId = router.query?.productId;

  // console.log(paramId)
  const {
    error,
    isError,
    data: product,
    isLoading,
  } = useQuery({
    queryKey: ["singleProduct", paramId],
    queryFn: () => getSingleProduct(paramId),
    useErrorBoundary: false,
    staleTime: 1000 * 30,
  });

  // const imgAr = [
  //   "/assets/ecommerce/product/p1.png",
  //   "/assets/ecommerce/product/p2.png",
  //   "/assets/ecommerce/product/p3.png",
  //   "/assets/ecommerce/product/p4.png",
  //   "/assets/ecommerce/product/p5.png",
  //   "/assets/ecommerce/product/p6.png",
  // ];

  const p_size = [
    { size: "8 UK", enabled: true },
    { size: "5 UK", enabled: true },
    { size: "6 UK", enabled: false },
    { size: "9 UK", enabled: true },
    { size: "29 UK", enabled: true },
    { size: "1 UK", enabled: true },
    { size: "6 UK", enabled: true },
    { size: "7 UK", enabled: true },
    { size: "9 UK", enabled: true },
    { size: "10 UK", enabled: false },
  ];

  /*==============HANDLE SUBMIT================*/
  const submitProductSize = () => {
    if (!selectedSize) {
      setShowError(true);
      // console.log(valueRef.current);
      valueRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  if (error && isError) {
    const errorQuery: any = error;
    return <h2 className="isError">{JSON.stringify(errorQuery.message)}</h2>;
  }
  return (
    <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10 ">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            {/* Left Side ST */}
            {/* <WraperProduct className=""> */}
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
              <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                {/* @ts-ignore */}
                <ProductDetailsCarosule imgAr={product?.images} />
              </div>
            </div>
            {/* </WraperProduct> */}
            {/* Left Side End */}
            {/* Right Side St */}
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              {/* PRODUCT TITLE */}
              <div className="text-[34px] font-semibold mb-2 mt-2 leading-tight">
                {product?.title}
              </div>

              {/* PRODUCT SUBTITLE */}
              {/* <div className="text-lg font-semibold mb-5">{product?.brand}</div> */}
              {/* PRODUCT PRICE */}
              <div className="flex items-center mt-4">
                <p className="mr-2 text-lg font-semibold list-item">
                  MRP : &#8377; {product?.price}
                </p>
                {true && (
                  <>
                    <p className="text-base  font-medium line-through">
                      &#8377;{85}
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                      {product?.discountPercentage}% off
                    </p>
                  </>
                )}
              </div>
              <div className="text-md font-medium text-gray-500 list-item">
              Brand: {product?.brand}
              </div>
              <div className="text-md font-medium mb-20  text-gray-500 list-item">
              Category: {product?.category}
              </div>
              {/* PRODUCT SIZE RANGE START */}
              <div className="mb-10">
                {/* HEADING START */}
                <div className="flex justify-between mb-2">
                  <div className="text-md font-semibold">Select Size</div>
                  <div className="text-md font-medium text-gray-400/[0.5] cursor-pointer">
                    stock: {product?.stock}
                  </div>
                </div>
                {/* HEADING END */}

                {/* SIZE START */}
                <div
                  ref={valueRef}
                  id="sizesGrid"
                  className="grid grid-cols-3 gap-2"
                >
                  {p_size.map((item, i) => (
                    <div
                      key={i}
                      className={`border-2 rounded-md text-center py-3 font-medium transition-transform active:scale-95 ${
                        item.enabled
                          ? "cursor-pointer"
                          : "cursor-not-allowed bg-gray-400/[0.6] opacity-50"
                      } ${
                        selectedSize === item.size && item.enabled
                          ? "border-green-500 "
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedSize(item.size);
                        setShowError(false);
                      }}
                    >
                      {item.size}
                    </div>
                  ))}
                </div>
                {/* SIZE END */}

                {/* SHOW ERROR START */}
                {showError && (
                  <div className="text-red-600 mt-1">
                    Size selection is required
                  </div>
                )}
                {/* SHOW ERROR END */}
              </div>
              {/* PRODUCT SIZE RANGE END */}
              <div className="pb-2" />
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <button
                  onClick={submitProductSize}
                  type="button"
                  className="w-full rounded-md bg-yellow-500 px-3 py-4 text-md font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-transform active:scale-95"
                >
                  Buy Now
                </button>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-pink-100 px-3 py-2 text-sm font-semibold text-pink-500 shadow-sm hover:bg-pink-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-transform active:scale-95 group"
                  >
                    <Heart
                      size={16}
                      className={`mr-3 transition-transform duration-200 group-active:animate-ping  ${
                        true && "stroke-pink-700 fill-pink-700"
                      }`}
                    />
                    <span className="block">Wishlist</span>
                  </button>
                  <div className="relative">
                    <RWebShare
                      data={{
                        text: "E-Commerce Product",
                        url: pageUrl,
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
                <button
                  type="button"
                  className="w-full rounded-full bg-orange-500 px-3 py-4 text-md font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-transform active:scale-95"
                >
                  Add To Cart{" "}
                  <span>
                    <FaCartPlus className=" inline-flex ml-2" />
                  </span>
                </button>
              </div>
              <div className="pt-6 xl:pt-8">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <div className=" flex flex-col gap-y-4 text-gray-400">
                  <div className="text-sm">{product?.description}</div>
                  <div className="text-sm markdown">
                    Every time the AJ1 gets a remake, you get the classic
                    sneaker in new colours and textures for an exciting,
                    revamped look but with all the familiar comforts you know.
                    Premium materials and accents give modern expression to an
                    all-time favourite. Colour Shown: White/Black/Ice Blue
                    Style: DV1308-104
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
            {product?.rating} out of 5
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
      {/* Rating Section End */}
      {/* Related Section START */}
      <Multicarosule />
      {/* Related Section END  */}
    </div>
  );
}

export { SingleProduct };

