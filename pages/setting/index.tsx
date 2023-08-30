import { verifyAccesToken } from "@/helper/helper";
import { IProps } from "@/interface/interface";
import Layout from "@/layout/layout";

import {
  setAccessToken,
  setIsAuthenticate,
  setUser,
} from "@/redux/sclice/authSclice";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useDispatch } from "react-redux";

function Page({
  name,
  accessToken,
  isAuthenticate,
  user,
  refreshToken,
}: IProps) {
  const dispatch = useDispatch();
  dispatch(setUser(user));
  dispatch(setAccessToken({ accessToken, refreshToken }));
  dispatch(setIsAuthenticate(true));

  return (
    <>
      <Head>
        <title>Setting</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="abir santra profile" />
        <meta name="keywords" content="abir santra web developer " />
        <meta name="author" content="abir santra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/favicone.png" />
      </Head>
      <Layout>
        <>
          <h2 className=" text-2xl text-center">This service Comming soon!</h2>
          {/* <Loading /> */}
        </>
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
    const authoriztedUserId: any = jwtDecode(accessToken);

    const { data, status } = await verifyAccesToken(accessToken, refreshToken);
    const isAuthenticate = data.msg;
    if (isAuthenticate) {
      return {
        props: {
          name: "setting",
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
