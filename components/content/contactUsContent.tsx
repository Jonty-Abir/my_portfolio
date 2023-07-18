import Image from "next/image"


function ContactUsContent() {
    return (
        <div>
            {/* Heading */}
            <div className=" text-center pt-[6rem]">
                <h2 className=" text-6xl font-bold">Contact me</h2>
                <p className=" text-xl text-indigo-700 font-bold">Get in touch with me</p>
            </div>
            <div>
                <div className="mx-auto max-w-7xl px-4">
                    <div className="mx-auto max-w-7xl py-12 md:py-24">
                        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
                            {/* contact from */}
                            <div className="flex items-center justify-center">
                                <div className="px-2 md:px-12">
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white md:text-4xl">Get in touch</p>
                                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                                        Our friendly team would love to hear from you.
                                    </p>
                                    <form className="mt-8 space-y-4">
                                        <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                                            <div className="grid w-full  items-center gap-1.5">
                                                <label
                                                    className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="first_name"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                    type="text"
                                                    id="first_name"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div className="grid w-full  items-center gap-1.5">
                                                <label
                                                    className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="last_name"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                    type="text"
                                                    id="last_name"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="text"
                                                id="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="phone_number"
                                            >
                                                Phone number
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="tel"
                                                id="phone_number"
                                                placeholder="Phone number"
                                            />
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700  dark:text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="message"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                id="message"
                                                placeholder="Leave us a message"
                                                cols={3}
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="w-full rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <Image
                                alt="Contact us"
                                className="block max-h-full w-full rounded-lg object-cover lg:block"
                                src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>

                <hr className="mt-6" />

            </div>
        </div>
    )
}

export default ContactUsContent