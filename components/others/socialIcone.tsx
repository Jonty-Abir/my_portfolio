import { ReactElement, useEffect, useState } from "react";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare, FaUserTie } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import uniqid from "uniqid";

interface objIner {
  id: string;
  socialMedia: string;
  link: string;
  child: ReactElement;
}

const SocialIcone = () => {
  const [isVisable, setIsVisable] = useState(false);

  // listent scroll
  const listenToScrol = () => {
    let heightShow = 350;

    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    // console.log(heightShow);
    // console.log();

    if (windowScroll > heightShow) {
      // visible top scroll button
      setIsVisable(true);
      if (windowScroll >= 2450) {
        setIsVisable(false);
      }
    } else {
      // hidden top to buttom scroll
      setIsVisable(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScrol);
    return () => window.removeEventListener("scroll", listenToScrol);
  }, []);

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
      link: "/assets/resume.pdf",
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

  return (
    <>
      <div className=" block lg:flex xl:flex 2xl:flex flex-col top-[35%] -left-1 lg:left-0  fixed">
        {isVisable ? (
          <ul className="block lg:flex flex-col lg:gap-y-1 duration-500 opacity-100">
            {obj.map(({ id, link, socialMedia, child }, index) => {
              if (index <= 3) {
                return (
                  <li
                    key={uniqid()}
                    className="mb-1 lg:mb-0 flex flex-col items-center justify-center  w-40 h-14 px-4 bg-gray-500 ml-[-100px] rounded-sm hover:rounded-md hover:ml-[12px] lg:hover:ml-[5px] hover:ring-2 hover:ring-green-500 duration-300"
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
                );
              } else {
                return <div key={index}></div>;
              }
            })}
          </ul>
        ) : (
          <ul className="block lg:flex flex-col gap-y-1 duration-500 opacity-0">
            {obj.map(({ id, link, socialMedia, child }, index) => {
              if (index <= 3) {
                return (
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
                );
              } else {
                return <div key={index}></div>;
              }
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default SocialIcone;
