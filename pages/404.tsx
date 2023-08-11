/* eslint-disable @next/next/no-img-element */
import { IProps } from "@/interface/interface";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

function NotFound({ name, isAuthenticate, user, accessToken }: IProps) {
  const router = useRouter();
  return (
    // <GustLayout>
    <div className="mx-auto w-full max-w-7xl px-2 md:px-4 mb-6 ">
      <div className="mx-auto my-12 flex max-w-6xl flex-col px-2 md:my-24 lg:my-32 lg:flex-row items-center gap-2">
        <div>
          <div>
            <p className="text-sm font-semibold text-black dark:text-gray-300">
              404 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-gray-200 md:text-3xl">
              We can&apos;t find that page
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for doesn&apos;t exist or has been
              moved.
            </p>
            <div className="mt-6 flex items-center gap-x-3">
              <a onClick={() => router.back()}>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 bg-gray-300 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Go back
                </button>
              </a>
              <Link href={`/contactUs`}>
                <button
                  type="button"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Contact us
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-10 space-y-6">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-x-2 text-sm font-semibold text-black dark:text-gray-100 hover:underline"
              >
                <span className=" capitalize">Back to home</span>
                <ArrowRight size={16} />
              </Link>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                back to the home page.
              </p>
            </div>
            <div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-x-2 text-sm font-semibold text-black dark:text-gray-100 hover:underline"
              >
                <span>Our blog</span>
                <ArrowRight size={16} />
              </Link>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Read the latest posts on our blog.
              </p>
            </div>
            <div>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-x-2 text-sm font-semibold text-black dark:text-gray-100 hover:underline"
              >
                <span>Our Dashboard</span>
                <ArrowRight size={16} />
              </Link>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Check our dashboard right here.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="404"
            className="w-[80%] h-full rounded-md object-cover"
          />
        </div>
      </div>
      <hr className="mt-1" />
    </div>
    // </GustLayout>
  );
}

export default NotFound;
