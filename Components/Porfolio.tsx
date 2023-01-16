import Image from "next/image";
import { ReactElement } from "react";
import uniqid from "uniqid";
import ourFImg from "../public/assets/pf1.jpg";
import weatherImg from "../public/assets/pf2.jpg";
import furniture1 from "../public/assets/pf3.png";
import quize1 from "../public/assets/pf4.png";
import furniture2 from "../public/assets/pf5.png";
import quize2 from "../public/assets/pf6.png";

function Portfolio() {
  interface markup {
    id: string;
    child: ReactElement;
  }
  console.log(uniqid());
  const markupArray = [
    {
      id: uniqid(),
      child: (
        <>
          <Image
            key={uniqid()}
            src={ourFImg}
            alt="portfplipImg"
            className=" h-[100%] object-fill rounded-2xl"
          />
        </>
      ),
    },
    {
      id: uniqid(),
      child: (
        <>
          <Image
            key={uniqid()}
            src={weatherImg}
            alt="portfplipImg"
            className=" h-[100%] object-fill rounded-2xl"
          />
        </>
      ),
    },
    {
      id: uniqid(),
      child: (
        <>
          <Image
            key={uniqid()}
            src={furniture1}
            alt="portfplipImg"
            className=" h-[100%] object-fill rounded-2xl"
          />
        </>
      ),
    },
    {
      id: uniqid(),
      child: (
        <>
          <Image
            key={uniqid()}
            src={furniture2}
            alt="portfplipImg"
            className=" h-[100%] object-fill rounded-2xl"
          />
        </>
      ),
    },
    {
      id: uniqid(),
      child: (
        <>
          <Image
            key={uniqid()}
            src={quize1}
            alt="portfplipImg"
            className=" h-[100%] object-fill rounded-2xl"
          />
        </>
      ),
    },
    {
      id: uniqid(),
      child: (
        <>
          <Image
            key={uniqid()}
            src={quize2}
            alt="portfplipImg"
            className=" h-[100%] object-fill rounded-2xl"
          />
        </>
      ),
    },
  ];
  return (
    <div className="">
      {/* main parent */}
      <div className="space-y-4 mb-14" id="portfolio">
        <div className="space-y-2">
          <h2 className="text-black inline pb-2 dark:text-white font-bold text-2xl ml-4 border-b-4 border-gray-800 dark:border-blue-50">
            Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-500 p-4">
            Chek out my work right here
          </p>
        </div>
        {/* Image section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 grid-flow-row gap-4 gap-y-8 group justify-center items-center p-4 md:p-4">
          {markupArray.map(() => {
            return (
              <>
                <>
                  <div
                    key={uniqid().toString()}
                    className=" rounded-2xl w-[90%] h-80 mx-auto shadow-lg dark:shadow-gray-400 shadow-gray-800"
                  >
                    <Image
                      key={uniqid().toString()}
                      src={quize1}
                      alt="portfplipImg"
                      className=" h-[100%] object-fill rounded-2xl"
                    />
                  </div>
                </>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
