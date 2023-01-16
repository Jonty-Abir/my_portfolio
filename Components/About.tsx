function About() {
  return (
    <div className="flex flex-col gap-6 mt-8 mb-8 w-full ">
      <div>
        <h2 className="text-black inline pb-2 dark:text-white font-bold text-2xl ml-4 border-b-4 border-gray-800 dark:border-blue-50">
          About Me
        </h2>
      </div>
      <div className="grid grid-cols-1 mob-md:grid-cols-2 text-black  dark:text-gray-500">
        <div>
          <p className="p-6 text-gray-500 dark:text-gray-400 text-justify text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            nemo nesciunt beatae unde iure atque? Esse temporibus debitis vel
            dolorum fugiat perferendis, error explicabo laborum ut, odio
            nesciunt minus in.
          </p>
        </div>
        <div>
          <p className="p-6 text-gray-500 dark:text-gray-400 text-justify text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            facilis ipsum dolores dolor doloribus in officia, delectus
            recusandae modi labore optio quos, libero deleniti doloremque
            repudiandae, deserunt aliquid! Autem, a!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
