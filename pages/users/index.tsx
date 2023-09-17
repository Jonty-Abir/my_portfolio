import TableLoading from "@/components/loading/tableLoading";
import UsersContent from "@/components/users/usersContent";
import { verifyAccesToken } from "@/helper/helper";
import { IProps } from "@/interface/interface";
import Layout from "@/layout/layout";
import {
  setAccessToken,
  setIsAuthenticate,
  setUser,
} from "@/redux/sclice/authSclice";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Suspense } from "react";
import { useDispatch } from "react-redux";

function Page({
  name,
  isAuthenticate,
  accessToken,
  refreshToken,
  user,
}: IProps) {
  const dispatch = useDispatch();
  dispatch(setUser(user));
  dispatch(setAccessToken({ accessToken, refreshToken }));
  dispatch(setIsAuthenticate(true));

  return (
    <>
      <Head>
        <title>all Clients</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="abir santra profile" />
        <meta name="keywords" content="abir santra web developer " />
        <meta name="author" content="abir santra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/favicone.png" />
      </Head>
      <Layout>
        <Suspense fallback={<TableLoading />}>
          <UsersContent
            isAuthenticate={isAuthenticate}
            accessToken={accessToken}
            refreshToken={refreshToken}
            user={user}
          />
        </Suspense>
      </Layout>
    </>
  );
}

export default Page;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    //cookie[0].split("accessToken=")[1];
    // cookie[1].split("refreshToken=")[1];
    const accessToken =
      req.cookies[process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME as string];
    const refreshToken =
      req.cookies[process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME as string];

    if (!accessToken || !refreshToken) throw new Error("Unauthrozied");

    const { data, status } = await verifyAccesToken(accessToken, refreshToken);
    const clientsDetails = data.data;
    const isAuthenticate = data.msg;
    if (
      isAuthenticate &&
      clientsDetails.number === "9064749861" &&
      clientsDetails.email === "abirrens@gmail.com"
    ) {
      return {
        props: {
          name: "DashBord",
          user: data.data,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          isAuthenticate,
        },
      };
    } else {
      return {
        redirect: {
          destination: "/signIn",
          permanent: false,
        },
      };
    }
  } catch (error) {
    return {
      redirect: {
        destination: "/signIn",
        permanent: false,
      },
    };
  }
};
