import {
  deleteContactMsg,
  findAllClient,
  getAllContactInfo,
} from "@/helper/helper";
import { IProps } from "@/interface/interface";
import { Iuser } from "@/redux/sclice/authSclice";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";

import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import uniqid from "uniqid";
import LoadingBtn from "../shared/LoadingBtn";

interface Iresponse {
  _id: string;
  clientName: string;
  contactNumber: string;
  contactEmail: string;
  message: string;
}

function UsersContent({
  user,
  isAuthenticate,
  accessToken,
  refreshToken,
}: IProps) {
  const [loading, setLoading] = useState(false);
  // create query client
  const queryClient = useQueryClient();

  const { error, isLoading, data } = useQuery({
    queryKey: ["all-client"],
    queryFn: () => findAllClient(accessToken, refreshToken),
    useErrorBoundary: false,
    staleTime: 1000 * 60,
  });
  const {
    error: contactInfoError,
    isLoading: contactInfoIsLoading,
    data: contactInfoData,
  } = useQuery({
    queryKey: ["all-contactInfo"],
    queryFn: () => getAllContactInfo(accessToken, refreshToken),
    useErrorBoundary: false,
    staleTime: 1000 * 60,
    // refetchOnWindowFocus: false,
  });

  const handleDelete = (id: string) => {
    setLoading(true);
    deleteContactMsg(id, { accessToken, refreshToken })
      .then((data) => {
        toast.success("Message was Delete.");
        queryClient.invalidateQueries(["all-contactInfo"]);
      })
      .catch((error) => {
        toast.error("Task Faild try again!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (isLoading) return <h2 className="loading">Loading...</h2>;

  const clients: Iuser[] = data;
  const contactInfo: Iresponse[] = contactInfoData;
  const contactError = contactInfoError as AxiosError;
  const clientError = error as AxiosError;

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 overflow-x-hidden">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-50">
              Client
            </h2>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
              This is a list of all client.
            </p>
          </div>
          {/* <div>
                    <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Add new employee
                    </button>
                </div> */}
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm text-gray-500"
                      >
                        <span>Clients</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm text-gray-500"
                      >
                        Number
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm text-gray-500"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        colSpan={2}
                        className="relative px-4 py-3.5 text-gray-500 cursor-not-allowed "
                      >
                        action
                      </th>
                    </tr>
                  </thead>
                  {!error && !clientError && (
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {clients.map((person) => (
                        <tr key={uniqid()} className="divide-x divide-gray-200">
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <Image
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={person.avatar || "/assets/user.png"}
                                  alt=""
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {person.firstName} {person.lastName}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {person.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900">
                              {person.number}
                            </div>
                            {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                          </td>
                          {/* <td className="whitespace-nowrap px-4 py-4">
                                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                    Active
                                                </span>
                                            </td> */}
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                            {person.role}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium cursor-not-allowed ">
                            <div className="flex justify-center items-center">
                              <AiTwotoneDelete
                                size={20}
                                className=" text-gray-700"
                              />
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium cursor-not-allowed">
                            <div className="flex justify-center items-center">
                              <GrEdit size={20} className=" text-gray-700" />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
                {/* FILED SIDE */}
                {clientError ? (
                  <h2 className="isError">
                    {JSON.stringify(clientError.message)}
                  </h2>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full border-gray-300">
          <div className="mt-2 flex items-center justify-end">
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 overflow-x-hidden">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-50">
              Message
            </h2>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
              Client From Contact Us
            </p>
          </div>
          {/* <div>
                    <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Add new employee
                    </button>
                </div> */}
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm text-gray-500"
                      >
                        <span>Clients Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm text-gray-500"
                      >
                        Contact-Number
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm text-gray-500"
                      >
                        Contact-Email
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm text-gray-500"
                      >
                        Message
                      </th>

                      <th
                        scope="col"
                        colSpan={2}
                        className="relative px-4 py-3.5 bg-rose-200 text-gray-500"
                      >
                        action
                      </th>
                    </tr>
                  </thead>
                  {/* SUCCESS SIDE */}
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {!contactInfoError &&
                      contactInfo &&
                      contactInfo instanceof Array &&
                      contactInfo.map((person) => (
                        <tr key={uniqid()} className="divide-x divide-gray-200">
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {person.clientName}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900">
                              {person.contactNumber}
                            </div>
                            {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                            {person.contactEmail}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                            {person.message}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium bg-rose-200 ">
                            <div className="flex justify-center items-center">
                              {loading ? (
                                <LoadingBtn />
                              ) : (
                                <AiTwotoneDelete
                                  onClick={() => handleDelete(person._id)}
                                  size={20}
                                  className=" text-gray-700"
                                />
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {/* FILED SIDE */}
                {contactInfoError ? (
                  <h2 className="isError">
                    {JSON.stringify(contactError.message)}
                  </h2>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full border-gray-300">
          <div className="mt-2 flex items-center justify-end">
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UsersContent;
