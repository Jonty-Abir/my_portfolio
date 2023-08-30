import uniqid from "uniqid";

function Loading() {
  return (
    <div className="my-8 mx-auto p-2">
      <div className="flex flex-col gap-4">
        <div role="status" className="animate-pulse ">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
          <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
          <div className="flex items-center justify-center mt-4">
            <svg
              className="w-8 h-8 text-gray-200 dark:text-gray-700 mr-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
            <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div className=" flex flex-col md:flex-row gap-y-8 justify-center">
          <div
            role="status"
            className="space-y-2.5 animate-pulse max-w-lg mx-8"
          >
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[480px]">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[400px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[480px]">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[440px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[360px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          <div
            role="status"
            className="space-y-2.5 animate-pulse max-w-lg mx-8 hidden md:block"
          >
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[480px]">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[400px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[480px]">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[440px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[360px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <div className="my-8 mx-auto flex flex-col  gap-2">
        {Array.from({ length: 1 }).map(() => (
          <div
            key={uniqid()}
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loading;
