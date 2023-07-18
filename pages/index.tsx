import LandingPage from "@/components/content/landing";
import { verifyAccesToken } from "@/helper/helper";
import { IProps } from "@/interface/interface";
import GustLayout from "@/layout/gustLayout";
import { setAccessToken, setIsAuthenticate, setUser } from "@/redux/sclice/authSclice";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useDispatch } from "react-redux";





export default function Home({ name, user, accessToken, isAuthenticate, refreshToken }: IProps) {
    const dispatch = useDispatch();
    dispatch(setUser(user));
    dispatch(setAccessToken({ accessToken, refreshToken }));
    dispatch(setIsAuthenticate(isAuthenticate))
    return (
        <>
            <Head>
                <title>Abir Santra | Jonty | Developer | Web Developer</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="abir santra profile" />
                <meta name="keywords" content="abir santra web developer " />
                <meta name="author" content="abir santra" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="./assets/favicone.png" />
            </Head>
            <GustLayout>
                <LandingPage />
            </GustLayout>
        </>

    );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

    try {

        const accessToken = req.cookies[process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME as string];
        const refreshToken = req.cookies[process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME as string];

        if (!accessToken || !refreshToken) throw new Error("Unauthrozied");

        const { data, status } = await verifyAccesToken(accessToken, refreshToken);
        const isAuthenticate = data.msg;
        if (isAuthenticate) {
            return {
                props: {
                    name: 'home',
                    user: data.data,
                    accessToken: data.accessToken,
                    isAuthenticate
                }
            }
        } else {
            return {
                props: {
                    name: 'home',
                    user: null,
                    accessToken: null,
                    isAuthenticate: false,
                }
            }
        }
    } catch (error) {
        return {
            props: {
                name: 'home',
                user: null,
                accessToken: null,
                isAuthenticate: false,
            }
        }
    }
};

