import { getAllProduct } from "@/helper/ecommerce.helper";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
// import { FcLike } from "react-icons/fc";
// import { MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";
import uniqid from "uniqid";
import LodderCompo from "../shared/lodder";

interface ResData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Products = ({ products }: any) => {
  const queryClient = useQueryClient();

  const { isError, isLoading, data, error } = useQuery(["products"], () =>
    getAllProduct()
  );

  if (isLoading)
    return (
      <div className="toCenter">
        <LodderCompo />
      </div>
    );
  if (!data && !isLoading && error && isError) {
    return <h2 className="isError capitalize">Request Time Out Try again!</h2>;
  }
  if (!data && !isLoading) {
    return <h2 className="isError">Some think went worng!</h2>;
  }
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {data &&
        data.map((value: ResData) => (
          <Link key={uniqid()} href={`/ecommerce/${value.id}`} target="blank">
            <div className="rounded-md border bg-gray-900">
              <Image
                src={`${value?.image}`}
                alt="Laptop"
                width={400}
                height={600}
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] bg-cover lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {value?.title}
                </h1>
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-200">
                  {value?.description
                    .split(" ")
                    .filter((v: string, i: number) => i < 3)
                    .join(" ")}
                  ....
                </div>
                <div className="mt-4">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-green-100 px-3 py-1 text-[12px] font-bold text-green-600">
                    #{value.category}
                  </span>
                </div>
                {/* Rating Start */}
                <div className="flex flex-wrap justify-between items-center">
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mr-2">
                    {/* Stars */}
                    <div className="flex space-x-1">
                      <button>
                        <span className="sr-only">1 star</span>
                        <svg
                          className="w-4 h-4 fill-current text-amber-500"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                        </svg>
                      </button>
                      <button>
                        <span className="sr-only">2 stars</span>
                        <svg
                          className="w-4 h-4 fill-current text-amber-500"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                        </svg>
                      </button>
                      <button>
                        <span className="sr-only">3 stars</span>
                        <svg
                          className="w-4 h-4 fill-current text-amber-500"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                        </svg>
                      </button>
                      <button>
                        <span className="sr-only">4 stars</span>
                        <svg
                          className="w-4 h-4 fill-current text-amber-500"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                        </svg>
                      </button>
                      <button>
                        <span className="sr-only">5 stars</span>
                        <svg
                          className="w-4 h-4 fill-current text-slate-300"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                        </svg>
                      </button>
                    </div>
                    {/* Rate */}
                    <div className="inline-flex text-sm font-medium text-amber-600">
                      {value?.rating?.rate}
                    </div>
                  </div>
                  {/* Price */}
                  <div>
                    <div className="inline-flex text-sm font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2 py-0.5">
                      ${value?.price}
                    </div>
                  </div>
                </div>
                {/* Rating End */}
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-orange-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Products;
