function About() {
  return (
    <div className="flex flex-col gap-6 mt-8 mb-8 w-full ">
      <div>
        <h2 className="text-black inline pb-2 dark:text-white font-bold text-2xl ml-4 border-b-4 border-gray-800 dark:border-blue-50">
          About Me
        </h2>
      </div>
      <div className="grid grid-cols-1 mob-md:grid-cols-2 text-black  dark:text-gray-600 font-semibold p-6 gap-8 font-thin">
        <p
          className="text-gray-600 font-semibold dark:text-gray-400 text-left"
          style={{ fontSize: "18px", lineHeight: "30px" }}
        >
          I love to do something differen. <br />
          {
            <span>
              When I{"'"}m not start coding, I love to hang out with my friends
              and play video games , Footboll, Racket, and watch movies &&
              webserise.
            </span>
          }{" "}
          <br />I started coding few year ago & currently am 3rd of my collage,
          i{"'"} a undergraduate, studying Computer Science & Engineering at IST
          Institute of Science and Technology.
        </p>

        <p
          className="text-gray-600 font-semibold dark:text-gray-400 text-left"
          style={{ fontSize: "18px", lineHeight: "30px" }}
        >
          As a fresher, I have the enthusiasm to learn and develop my skills as
          a front-end developer & back-end developer . I am familiar with HTML,
          CSS, and JavaScript,React JS, Next Js, Redux and also backend
          technology for instance Node js, Express, MongoDB, MVC structure &
          REST API and am eager to learn more. {"I'"}m looking forward to
          expanding my knowledge and putting my skills to the test in a creative
          and innovative environment.
        </p>
      </div>
    </div>
  );
}

export default About;
