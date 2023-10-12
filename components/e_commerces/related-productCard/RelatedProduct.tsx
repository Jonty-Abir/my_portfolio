import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

function RelatedProduct({ imgSrc }: { imgSrc: string }) {
  return (
    <div className=" transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer rounded-md">
      <Image
        alt="product"
        width={400}
        height={400}
        src={imgSrc}
        className=" h-[16rem] bg-cover rounded-md"
      />
      <div className="p-4 text-black/[0.9] ">
        <h2 className="text-lg font-medium">Puma</h2>
        {/* Rating ST */}
        <div className=" bottom-4 left-2">
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
        {/* Rating END */}
        <div className="flex items-center text-black/[0.6]">
          <p className="mr-2 text-lg font-semibold">&#8377; 567</p>

          {true && (
            <>
              <p className="text-base  font-medium line-through">&#8377; 567</p>
              <p className="ml-auto text-base font-medium text-green-500">
                25 % off
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;
