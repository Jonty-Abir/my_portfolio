import Image from "next/image";

function AboutUsContent() {
  const instituions = [
    {
      id: 1,
      src: "/assets/Khila_Gopimohan_Siksha_Sadan.jpg",
      name: "Khila Gopimohan Siksha Sadan",
      title: "5th Standard - 10th Standard",
      time: "2013 - 2017",
    },
    {
      id: 2,
      src: "/assets/Pancharul_Srihari_VidyaMandir_school.jpg",
      name: "Pancharul Srihari VidyaMandir",
      title:
        "11th Standard & 12th Standard  with specialzation in Computer Application",
      time: "2017 - 2019",
    },
    {
      id: 3,
      src: "/assets/ist.png",
      name: "INSTITUTE OF SCIENCE AND TECHNOLOGY",
      title: "Diploma in CST (Computer Science & Technology)",
      time: "2019 - 2021",
    },
    {
      id: 4,
      src: "/assets/ist.png",
      name: "INSTITUTE OF SCIENCE AND TECHNOLOGY",
      title: "B.Tech in CSE (Computer Science & Engineering)",
      time: "2021 - 2024",
    },
  ];
  return (
    <div className=" flex flex-col space-y-20 pt-[6rem] pb-[5rem] px-3 pl-4 md:px-[5rem]">
      {/* Heading */}
      <div className=" text-center">
        <h2 className=" text-6xl font-bold">About me</h2>
        <p className=" text-xl text-indigo-700 font-bold">
          A little bit about me
        </p>
      </div>
      {/* Bio details */}
      <div className="flex flex-col gap-y-4">
        <div className=" mb-4">
          <h2 className="text-3xl font-bold">Bio</h2>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-white text-xl">
            I{"'"}m a simple guy with a passion for development and design. I
            enjoy creating things that make a difference.
          </p>
          <p className="text-gray-400">
            I have always loved creating things out of scratch. It started with
            designing and now it has expanded to web development as well. I love
            the feeling of creating something out of scratch and have people use
            it. I also love taking a part of Open-Source Programs and learning
            group. I have participated in a few internal-college programs and beside this i{"'m"} a learner of WebSkitter Academy  <b>Node JS</b> Development 2023 with a team
            of seniors and successfully cleared the internal screening. I have
            successfully Deploy some Project which i build.
          </p>
          <p className="text-gray-400">
            Grow consistently and rapidly with the organization. Ready to work
            as a team player. Ready to work hard efficiently. Have a high
            motivation with determination to learn. Have high aim to be a
            successful. A disciplined and open-minded person
          </p>
          <ul className="flex flex-col list-disc text-gray-400 pl-2">
            <p className=" font-normal">Currently</p>
            <li>Learning and exploring the world of DevOps and Web 3.0</li>
            <li>Contributing to Open Source</li>
            <li>Writing articles about everything I learn</li>
            <li>
              Looking for Developer Roles (preferably remote but open to all
              options)
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full max-w-[1440px] h-[1px] bg-gray-200"></div>
      {/* Education */}
      <div className="">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        {/* content */}
        <div className="flex flex-col gap-y-3">
          {instituions.map((v) => {
            return (
              <div key={v.id} className="flex items-center gap-x-4">
                {/* instituion logo */}
                <Image
                  className=" rounded-full ring-2 ring-green-500 p-1"
                  src={v.src}
                  alt="logo"
                  width={70}
                  height={70}
                />
                <div>
                  {/* instituion name */}
                  <p className="font-semibold text-xl uppercase">{v.name}</p>
                  {/* title */}
                  <span className=" text-gray-400">{v.title}</span>
                  {/* time */}
                  <p className=" text-gray-400">{v.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutUsContent;
