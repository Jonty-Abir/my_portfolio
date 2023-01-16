function ContactUs() {
  return (
    <div>
      <div className="mb-16 space-y-4">
        <div className="flex flex-col justify-start items-start p-4 gap-y-8">
          <h2 className=" text-gray-800 font-bold dark:text-white text-2xl border-b-4 pb-2 capitalize">
            contact me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-semibold">
            Submit the form bellow to get in touch with me.
          </p>
        </div>
        <div
          id="abir"
          className="flex flex-col md:flex-row justify-evenly items-center w-full] p-4 gap-8"
        >
          <form
            action="https://getform.io/f/d3ad1084-5150-456b-946d-13e52b28bbde"
            method="post"
            className="flex flex-col justify-center items-start gap-4"
          >
            <input
              name="name"
              type="text"
              placeholder="enter your name"
              className=" focus:outline-none bg-transparent rounded-md border-gray-700 dark:border-white border-2 text-gray-600 dark:text-gray-300 px-1 py-2 h-full w-full focus:outline-dashed focus:outline-green-500"
              autoComplete="off"
              required
            />
            <input
              name="subject"
              type="text"
              placeholder="subject"
              className=" focus:outline-none bg-transparent rounded-md border-gray-700 dark:border-white border-2 text-gray-600 dark:text-gray-300 px-1 py-2 h-full w-full focus:outline-dashed focus:outline-green-500"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className=" focus:outline-none bg-transparent rounded-md border-gray-700 dark:border-white border-2 text-gray-600 dark:text-gray-300 px-1 py-2 h-full w-full focus:outline-dashed focus:outline-green-500"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              placeholder="enter you message"
              id="msg"
              cols={35}
              rows={10}
              className="focus:outline-none bg-transparent rounded-md border-gray-700 dark:border-white border-2 text-gray-600 dark:text-gray-300 px-1 py-2 h-full w-full focus:outline-dashed focus:outline-green-500"
            ></textarea>
            <button
              type="submit"
              className="focus:outline-none bg-transparent rounded-md border-gray-700 dark:border-white border-2  dark:text-white capitalize font-bold  px-1 py-2 h-full w-[40%] bg-blue-600 text-white "
            >
              submit
            </button>
          </form>
          <div className="flex flex-col justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.09073316908348!2d87.99658800592857!3d22.674221737208928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xad171e4ad1519f6!2zTWFoYXByYWJodSBmdXJuaXR1cmUgKOCmruCmueCmvuCmquCnjeCmsOCmreCngSDgpqvgpr7gprDgp43gpqjgpr_gpprgpr7gprAp!5e0!3m2!1sen!2sin!4v1673460590762!5m2!1sen!2sin"
              width={"auto"}
              height="auto"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy={"no-referrer-when-downgrade"}
              className="md:w-4/4 h-80 md:h-80"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
