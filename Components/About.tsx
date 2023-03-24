function About() {
  return (
    <div className="flex flex-col gap-6 mt-8 mb-8 w-full ">
      <div>
        <h2 className="text-black inline pb-2 dark:text-white font-bold text-2xl ml-4 border-b-4 border-gray-800 dark:border-blue-50">
          About Me
        </h2>
      </div>
      <div className="grid grid-cols-1 mob-md:grid-cols-2 text-black   dark:text-gray-500 p-6 gap-8 font-thin">
        <div
          className="text-gray-600 dark:text-gray-400 text-left text-xl font-semibold leading-5 flex flex-col gap-6"
          style={{ lineHeight: "35px" }}
        >
          <p>
            I love to do something differen. <br />
            {
              <span>
                When I{"'"}m not start coding, I love to hang out with my
                friends and play video games , Footboll, Racket, and watch
                movies && webserise.
              </span>
            }{" "}
            I started coding few year ago & currently am 3rd of my collage, i
            {"'"} a undergraduate, studying Computer Science & Engineering at
            IST Institute of Science and Technology.
          </p>
          <p className="text-left leading-4 text-gray-600 dark:text-gray-400 text-lg font-semibold">
            I{"'"}m pretty positive and strong-willed. and I always finish what
            I start. doing what I love and being surrounded by my loved ones.
          </p>{" "}
        </div>

        <p
          className="text-gray-600 dark:text-gray-400 text-left text-xl font-semibold leading-10"
          style={{ lineHeight: "35px" }}
        >
          As a fresher, I have the enthusiasm to learn and develop my skills as
          a front-end developer & back-end developer . I am familiar with HTML,
          CSS, and JavaScript,React JS, Next Js, Redux and also backend
          technology for instance Node js, Express, MongoDB, MVC structure &
          REST API and am eager to learn more. {"I'"}m looking forward to
          expanding my knowledge and putting my skills to the test in a creative
          and innovative environment.
        </p>
        {/* <p className="text-gray-500 dark:text-gray-400 text-right >
          I{"'"}m pretty positive and strong-willed and I always finish what I
          start. My dream is to be happy in life, doing what I love and being
          surrounded by my loved ones. When I{"'"}m not coding, I love to hang
          out with my friends and play video games, listen to music, jam on my
          drums, and watch Anime.
        </p> */}
      </div>
    </div>
  );
}

export default About;
