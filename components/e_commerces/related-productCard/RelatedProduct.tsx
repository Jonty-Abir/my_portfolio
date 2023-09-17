import { AiFillStar } from "react-icons/ai";

import Image from "next/image";

function RelatedProduct({ imgSrc }: { imgSrc: string }) {
  return (
    <div className=" relative bg-slate-600">
      <Image
        alt="product"
        width={400}
        height={400}
        src={imgSrc}
        className=" h-[16rem] bg-cover rounded-md"
      />
      {/* Price start */}
      <div className=" absolute top-1 right-3 text-indigo-500">
        <span className="text-3xl font-bold ">$100</span>
      </div>
      {/* Price End */}
      {/* Reating START */}
      <div className="absolute bottom-4 left-2">
        <div className=" flex">
          <AiFillStar fill="#faee05" className="inline" size={22} />
          <AiFillStar fill="#faee05" className="inline" size={22} />
          <AiFillStar fill="#faee05" className="inline" size={22} />
          <AiFillStar fill="#faee05" className="inline" size={22} />
          <AiFillStar fill="#ababa6" className="inline" size={22} />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.3
          </span>
        </div>
      </div>
      {/* Reating END */}
    </div>
  );
}

export default RelatedProduct;
