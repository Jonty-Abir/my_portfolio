import { SingleProduct } from "@/components/e_commerces/product/SingleProduct";
import Loading from "@/components/loading/loading";
import { verifyAccesToken } from "@/helper/helper";
import { IProps } from "@/interface/interface";
import Layout from "@/layout/layout";
import NestLayoutEcommerce from "@/layout/nestedLayout/ECommerceLayout";
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
  dispatch(setIsAuthenticate(isAuthenticate));

  return (
    <>
      <Head>
        <title>E-Commerce</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="abir santra profile" />
        <meta name="keywords" content="abir santra web developer " />
        <meta name="author" content="abir santra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicone.png" />
      </Head>
      <Layout>
        <NestLayoutEcommerce e_slider={false}>
          <Suspense fallback={<Loading />}>
            <SingleProduct />
          </Suspense>
        </NestLayoutEcommerce>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;
  const param: any = context.params;
  try {
    // param
    const accessToken =
      req.cookies[process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME as string];
    const refreshToken =
      req.cookies[process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME as string];

    if (!accessToken || !refreshToken) throw new Error("Unauthrozied");

    const { data, status } = await verifyAccesToken(accessToken, refreshToken);
    const isAuthenticate = data.msg;
    if (isAuthenticate) {
      return {
        props: {
          name: `Product No: ${param.productId}`,
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

export default Page;
