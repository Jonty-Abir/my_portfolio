function About() {
  return (
    <div className="flex flex-col gap-6 mt-8 mb-8 w-full ">
      <div>
        <h2 className="text-black inline pb-2 dark:text-white font-bold text-2xl ml-4 border-b-4 border-gray-800 dark:border-blue-50">
          About Me
        </h2>
      </div>
      <div className="grid grid-cols-1 mob-md:grid-cols-2 text-black  dark:text-gray-500 p-6 gap-8">
        <p className="text-gray-500 dark:text-gray-400 text-right text-lg font-semibold">
          I love to do something differen.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-right text-lg font-semibold">
          I started coding few year ago & currently am 3rd of my collage, i{"'"}{" "}
          a undergraduate, studying Computer Science & Engineering at IST
          Institute of Science and Technology.
        </p>
        {/* <p className="text-gray-500 dark:text-gray-400 text-right text-lg">
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
