import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SocialIcone from "../others/socialIcone";

const logos = [
  {
    id: 1,
    img_url: "/assets/nodejs.svg",
  },
  {
    id: 2,
    img_url: "/assets/typescript.svg",
  },
  {
    id: 3,
    img_url: "/assets/mongodb.svg",
  },
  {
    id: 4,
    img_url: "/assets/react.svg",
  },
];

export const LandingPage = () => {
  const [question1, setQuestion1] = useState(true);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);

  /***_______     ________**/

  const testimonials = [
    {
      name: "Meghlal Khan",
      comment: `We thank Flatworld Solutions for the wonderful job in helping us develop our program.Everyone was professional, excellent and hard working.Thanks to him, we were able to achieve our goal on time, and we look forward to continue working with him in the future.`,
      ctagory: "Senior DevOps Engineering",
    },
    {
      name: "Sangita Jana",
      comment: `We thank Flatworld Solutions for the wonderful job in helping us develop our program.Everyone was professional, excellent and hard working.Thanks to him, we were able to achieve our goal on time, and we look forward to continue working with him in the future.`,
      ctagory: "Senior Font-End Developer",
    },
  ];

  const propulerQuestion = [
    {
      id: 1,
      question: " How do I get started?",
      state: question1,
      setStateFun: setQuestion1,
      ans: ` It started with designing and now it has expanded to web development as well. and watching online tutorials. And participate conference , lecture about that libraries, frameworks. but one thing keep in your mind that is don't get tutorial hell.`,
    },
    {
      id: 2,
      question: " What should i learn first front-end, back-end.",
      state: question2,
      setStateFun: setQuestion2,
      ans: ` I always say that It's totally up to you .But i was learn backend first.`,
    },
    {
      id: 3,
      question: "  You are freelancer?",
      state: question3,
      setStateFun: setQuestion3,
      ans: ` No i am not freelancers right now but in future i have some plan about freelancing.`,
    },
  ];

  return (
    <>
      <section className="relative mt-8">
        <div className="overflow-hidden pt-16 pb-28">
          <div className="container relative mx-auto px-4">
            <div className="-m-8 flex flex-col lg:flex-row">
              <div className="w-full p-8 lg:w-6/12">
                <h1
                  className="lg:text-13xl font-heading mb-9 text-6xl font-bold leading-none md:max-w-2xl md:text-8xl"
                  id="abir"
                >
                  Collab With Abir
                </h1>
                <div>
                  <p className="dark:text-gray-300ss mb-9 text-xl capitalize font-medium text-gray-900 dark:text-gray-300 md:max-w-sm">
                    Hey I{"'"}am create minimal & Functional Website &
                    Application, Powered by the latest technology.
                  </p>
                  <a href="#testimonials" className="mb-12 md:inline-block">
                    <button className="w-full rounded-xl border border-indigo-700 bg-indigo-600 py-4 px-6 font-semibold text-white transition duration-200 ease-in-out hover:bg-indigo-700 focus:ring focus:ring-indigo-300">
                      Go to Testimonials
                    </button>
                  </a>
                  <SocialIcone />
                  <div className="-m-1 flex flex-wrap items-center mt-4 md:mt-0">
                    <div className="w-auto p-1">
                      <div className="-m-0.5 flex flex-wrap">
                        <div className="w-auto p-0.5">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                              fill="#6366F1"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-auto p-0.5">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                              fill="#6366F1"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-auto p-0.5">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                              fill="#6366F1"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-auto p-0.5">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                              fill="#6366F1"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-auto p-0.5">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                              fill="#6366F1"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-1">
                      <div className="-m-0.5 flex flex-wrap">
                        <div className="w-auto p-0.5">
                          <p className="font-bold text-gray-900 dark:text-gray-300">
                            4.0/5
                          </p>
                        </div>
                        <div className="w-auto p-0.5">
                          <p className="font-medium text-gray-600 dark:text-gray-400">
                            (10 Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 flex justify-end gap-4 md:gap-4 lg:gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 ">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src="/assets/owner5.jpg"
                      alt="owner4"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={400}
                      height={400}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src="/assets/owner02.jpg"
                      alt="owner2"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={400}
                      height={400}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/assets/learing.jpg"
                      alt="owner3"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={400}
                      height={400}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      src="/assets/gitaWithCodeing.jpg"
                      alt="gita"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={400}
                      height={400}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/assets/stand.jpg"
                      alt="owner1"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={400}
                      height={400}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-gray-100 py-12 pb-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 justify-items-center gap-8">
            {logos.map((logo) => (
              <div key={logo.id} className="flex items-center justify-center">
                <Image
                  src={logo.img_url}
                  alt="Logo"
                  width={75}
                  height={75}
                  className="w-14 h-14 lg:w-20 lg:h-20"
                />
              </div>
            ))}
          </div>
          <h2 className="font-heading tracking-px-n mx-auto mt-12 mb-4 text-center text-4xl font-bold leading-none md:max-w-2xl md:text-4xl xl:text-5xl">
            Loved by the incredible community
          </h2>
          <p className="mx-auto text-center text-base font-medium leading-normal text-gray-600 dark:text-gray-400 md:max-w-lg capitalize">
            Those community are so huge and more developer friendly & and i love
            those communities
          </p>
        </div>
      </section>
      <section className="overflow-hidden py-12">
        <div className="container mx-auto px-4">
          <h3 className=" text-3xl font-semibold pb-8 text-center">
            Nice to Meet you
          </h3>
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-10">
            <div className="w-full md:w-1/2 xl:w-auto">
              <a className="block overflow-hidden rounded-3xl" href="#">
                <Image
                  className="w-full"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  width={600}
                  height={600}
                />
              </a>
            </div>
            <div className="w-full">
              <div className="md:max-w-xl">
                <div className="mb-11 border-b pb-12 dark:border-gray-700 lg:pb-32">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300 md:max-w-lg">
                    If everyone is moving forward together, then success takes
                    care of itself, is one of my personal favorite quotes on
                    teamwork. Because it{"'"} true: Teamwork has the incredible
                    power to increase productivity, job satisfaction, and even
                    each person{"'"}s individual performance. <br />
                    To inspire your team to band together and celebrate
                    collaboration, we{"'"}ve gathered some of our favorite
                    quotes on the power of teamwork.
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="md:max-w-xs">
                      <h3 className="mb-4 text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                        Unlimited Access
                      </h3>
                      <p className="font-medium text-gray-900 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores, ullam.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="md:max-w-xs">
                      <h3 className="mb-4 text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                        No Commitment
                      </h3>
                      <p className="font-medium text-gray-900 dark:text-gray-300">
                        Without involvement, there is no commitment. Mark it
                        down, asterisk it, circle it, underline it. No
                        involvement, no commitment. ~ Stephen Covey
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl text-center">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
              Here is some questions people always ask me!
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            {/* Propuler question */}
            {propulerQuestion.map((v, i) => {
              return (
                <div
                  key={v.id}
                  className=" relative rounded-md border border-gray-400 shadow-lg transition-all duration-200 dark:border-gray-700"
                >
                  <button
                    onClick={() => v.setStateFun(!v.state)}
                    className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                  >
                    <span className="flex text-lg font-semibold text-black dark:text-white">
                      {v.question}
                    </span>

                    {v.state ? (
                      <>
                        <IoIosArrowUp className="h-5 w-5 text-gray-50" />
                        <span className=" absolute flex h-2 w-2 top-6 right-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                      </>
                    ) : (
                      <>
                        <IoIosArrowDown
                          className="h-5 w-5 text-gray-50"
                          onClick={() => v.setStateFun(!v.state)}
                        />
                        <span className=" absolute flex h-2 w-2 top-6 right-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                      </>
                    )}
                  </button>
                  <div
                    className={`px-4 pb-5 sm:px-6 sm:pb-6  ${
                      v.state ? " duration-300 block" : "duration-300 hidden"
                    }`}
                  >
                    <p className={`text-gray-400 `}>{v.ans}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="textbase mt-6 text-center text-gray-600">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="#abir"
              title=""
              className="font-medium text-indigo-600 hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>
      <section className="overflow-hidden px-8 py-16 md:px-0">
        <div className="container mx-auto">
          <h2
            id="testimonials"
            className="my-8 text-left text-3xl font-bold text-black dark:text-white md:text-5xl"
          >
            Testimonials
          </h2>
          <p className="mb-8 w-full font-medium leading-snug text-gray-700 dark:text-gray-300 md:w-2/3 lg:w-1/2">
            I am very passionate about being able to help solve some problems,
            my coding skills help me do this. Grow consistently and rapidly with
            the organization. Ready to work as a team player. Ready to work hard
            efficiently. Have a high motivation with determination to learn.
            Have high aim to be a successful. A disciplined and open-minded
            person
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((value, index) => (
              <div key={index} className="flex justify-center">
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    className=""
                    src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    width={600}
                    height={600}
                  />
                  <div className="absolute left-0 top-0 h-full  overflow-y-auto bg-white bg-opacity-40 px-4 py-4 ">
                    <svg
                      className="mb-4"
                      width="47"
                      height="36"
                      viewBox="0 0 47 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 36V25.6999C0 22.7377 0.554721 19.6578 1.66416 16.46C2.80722 13.2286 4.35372 10.1823 6.30365 7.32118C8.2872 4.42637 10.5061 1.98598 12.9603 0L21.4324 5.5035C19.4489 8.4993 17.7847 11.6297 16.4399 14.8948C15.1288 18.1262 14.49 21.6943 14.5236 25.5989V36H0ZM25.5676 36V25.6999C25.5676 22.7377 26.1223 19.6578 27.2318 16.46C28.3748 13.2286 29.9213 10.1823 31.8712 7.32118C33.8548 4.42637 36.0737 1.98598 38.5279 0L47 5.5035C45.0165 8.4993 43.3523 11.6297 42.0075 14.8948C40.6964 18.1262 40.0576 21.6943 40.0912 25.5989V36H25.5676Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                    <h3 className="text-md mb-4 font-bold leading-snug text-black">
                      {value.comment}
                    </h3>
                    <div className="mb-1 font-bold text-black">
                      <h2 className=" inline-flex font-extrabold pr-1">_</h2>
                      {value.name}
                    </div>
                    <div className="font-medium text-gray-600">
                      {value.ctagory}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden pt-24 pb-28">
        <div className="container relative z-10 mx-auto px-4">
          <div className="-m-8 flex flex-wrap">
            <div className="w-full p-8 md:w-auto">
              <a href="#">
                <Image
                  className="mx-auto h-fit w-[300px] transform transition duration-1000 ease-in-out hover:translate-y-4 rounded-md"
                  src="/assets/learing.jpg"
                  alt="/assets/"
                  width={600}
                  height={600}
                />
              </a>
            </div>
            <div className="w-full p-8 md:flex-1">
              <div className="mx-auto text-center md:max-w-2xl">
                <h2 className="font-heading tracking-px-n mb-10 text-center text-3xl font-bold leading-tight md:text-5xl capitalize">
                  explore more
                </h2>
                <div className="mb-12 md:inline-block">
                  <Link
                    href={"/dashboard"}
                    className="shadow-4xl w-full rounded-xl border border-indigo-700 bg-indigo-600 py-4 px-6 font-semibold text-white transition duration-200 ease-in-out hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="mx-auto md:max-w-sm">
                  <div className="-m-2 flex flex-wrap">
                    <div className="w-auto p-2">
                      <svg
                        className="mt-1"
                        width="26"
                        height="20"
                        viewBox="0 0 26 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 20V14.2777C0 12.6321 0.306867 10.921 0.920601 9.14446C1.55293 7.34923 2.40844 5.65685 3.48712 4.06732C4.58441 2.45909 5.81187 1.10332 7.16953 0L11.8562 3.0575C10.7589 4.72183 9.83834 6.46096 9.09442 8.2749C8.3691 10.0701 8.01574 12.0524 8.03433 14.2216V20H0ZM14.1438 20V14.2777C14.1438 12.6321 14.4506 10.921 15.0644 9.14446C15.6967 7.34923 16.5522 5.65685 17.6309 4.06732C18.7282 2.45909 19.9557 1.10332 21.3133 0L26 3.0575C24.9027 4.72183 23.9821 6.46096 23.2382 8.2749C22.5129 10.0701 22.1595 12.0524 22.1781 14.2216V20H14.1438Z"
                          fill="#E0E7FF"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-1 p-2">
                      <p className="mb-4 text-left text-lg font-medium leading-normal">
                        Confusion is part of programming.
                      </p>
                      <h3 className="text-left font-bold">
                        - Felienne Hermans
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden w-full self-end p-8 md:w-auto xl:block">
              <Image
                className="mx-auto h-fit w-[300px] transform transition duration-1000 ease-in-out hover:-translate-y-4 rounded-md"
                src="/assets/learing.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

LandingPage.displayName = "LandingPageTwo";
export default LandingPage;
