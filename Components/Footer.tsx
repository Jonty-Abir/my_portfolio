import Link from "next/link";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";

function Footer() {
  const date = new Date();
  return (
    <footer className="h-auto w-full">
      <div className="flex justify-center items-center">
        <p className=" border-t-2 border-gray-500 w-[80%]"></p>
      </div>
      <div className="my-8 p-4 text-center text-gray-600 dark:text-gray-500 space-y-8">
        <div>
          <h2 className=" text-lg text-white font-bold capitalize ">
            abir santra
          </h2>
        </div>
        <div className="flex justify-center items-center gap-x-6">
          <Link
            href="https://www.linkedin.com/in/abir-santra-jonty/"
            target="_blank"
          >
            <AiFillLinkedin size={30} />
          </Link>
          <Link href="https://github.com/Jonty-Abir" target="_blank">
            <AiOutlineGithub size={30} />
          </Link>
          <Link href="https://twitter.com/AbirSantra9" target="_blank">
            <AiOutlineTwitter size={30} />
          </Link>
          <Link href="mailto:jontyabir@gmail.com" target="_blank">
            <HiOutlineMailOpen size={30} />
          </Link>
        </div>
        <div className="">
          <p>
            <>abirSantra © {date.getFullYear()} | using next-js | tailwind</>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
