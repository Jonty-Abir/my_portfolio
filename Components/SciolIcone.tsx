import { ReactElement, useEffect, useState } from "react";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare, FaUserTie } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import uniqid from "uniqid";

const SocialIcone = () => {
  const [isVisable, setIsVisable] = useState(false);
  interface objIner {
    id: string;
    socialMedia: string;
    link: string;
    child: ReactElement;
  }
  const obj: objIner[] = [
    {
      id: uniqid(),
      socialMedia: "LinkedIn",
      link: "https://www.linkedin.com/in/abir-santra-jonty/",
      child: (
        <>
          <AiFillLinkedin size={30} />
        </>
      ),
    },
    {
      id: uniqid(),
      socialMedia: "GitHub",
      link: "https://github.com/Jonty-Abir",
      child: (
        <>
          <AiOutlineGithub size={30} />
        </>
      ),
    },
    {
      id: uniqid(),
      socialMedia: "Gmail",
      link: "mailto:jontyabir@gmail.com",
      child: (
        <>
          <MdOutlineMarkEmailRead size={30} />
        </>
      ),
    },
    {
      id: uniqid(),
      socialMedia: "Resume",
      link: "assets/resume.pdf",
      child: (
        <>
          <FaUserTie size={30} />
        </>
      ),
    },
    {
      id: uniqid(),
      socialMedia: "Twitter",
      link: "https://twitter.com/AbirSantra9",
      child: (
        <>
          <AiOutlineTwitter size={30} />
        </>
      ),
    },
    {
      id: uniqid(),
      socialMedia: "Instagram",
      link: "https://www.instagram.com/abir_santra_ig/",
      child: (
        <>
          <FaInstagramSquare size={30} />
        </>
      ),
    },
    {
      id: uniqid(),
      socialMedia: "FaceBook",
      link: "https://www.facebook.com/abir.santra.330",
      child: (
        <>
          <FaFacebookSquare size={30} />
        </>
      ),
    },
  ];
  // listent scroll
  const listenToScrol = () => {
    let heightTohidden = 6;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (windowScroll < heightTohidden) {
      // visible top scroll button
      setIsVisable(true);
    } else {
      // hidden top to buttom scroll
      setIsVisable(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScrol);
    return () => window.removeEventListener("scroll", listenToScrol);
  }, []);

  return (
    <>
      <div className="hidden md:flex lg:flex xl:flex 2xl:flex flex-col top-[35%] left-0 fixed ">
        {isVisable && (
          <ul className="flex flex-col gap-y-1">
            {obj.map(({ id, link, socialMedia, child }, index) => {
              if (index <= 3) {
                return (
                  <>
                    <li
                      key={index}
                      className="flex flex-col items-center justify-center  w-40 h-14 px-4 bg-gray-500 ml-[-100px] rounded-sm hover:rounded-md hover:ml-[5px] hover:ring-2 hover:ring-green-500 duration-300"
                    >
                      <a
                        href={link}
                        className="flex justify-between items-center text-white w-full"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <>
                          {socialMedia} {child}
                        </>
                      </a>
                    </li>
                  </>
                );
              } else {
                return <></>;
              }
            })}
          </ul>
        )}
      </div>
      {/* formmobile */}
      <div className="mob-sm:flex  md:hidden xl:hidden 2xl:hidden">
        <ul className="grid gap-2 mob-sm:grid-cols-2  mob-lg:grid-cols-4  justify-center mx-auto items-center  p">
          {obj.map(({ id, link, socialMedia, child }) => {
            return (
              <>
                <li
                  key={id}
                  className=" mt-0 flex flex-col items-center justify-center w-full h-14 px-4 bg-gray-500 rounded-sm hover:ring-4 ring-green-500 hover:scale-105 duration-500"
                >
                  <a
                    href={link}
                    className="mt-0 flex justify-between items-center text-white w-full"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <>
                      {socialMedia} {child}
                    </>
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SocialIcone;
