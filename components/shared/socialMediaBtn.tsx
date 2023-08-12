import { FcGoogle } from "react-icons/fc";

function SocialMediaBtn() {
  return (
    <div className="mt-12 space-y-3">
      <button
        type="button"
        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-500 bg-white px-4 py-4 text-base text-indigo-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none dark:text-indigo-700 font-bold capitalize"
      >
        <div className="absolute inset-y-0 left-0 p-4">
          <FcGoogle size={28} />
        </div>
        Sign in with Google
      </button>

      <button
        type="button"
        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-500 bg-white px-4 py-4 text-base text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none dark:text-indigo-700 font-bold capitalize"
      >
        <div className="absolute inset-y-0 left-0 p-4">
          <svg
            className="h-8 w-8 text-[#2563EB] border-2 border-blue-500 rounded-md"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
          </svg>
        </div>
        Sign in with Facebook
      </button>
      <div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Read our{" "}
          <span className="capitalize text-indigo-600">privacy policy</span> and{" "}
          <span className="capitalize text-indigo-600">terms of service</span>{" "}
          to learn more
        </span>
      </div>
    </div>
  );
}

export default SocialMediaBtn;
