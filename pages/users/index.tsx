import UsersContent from '@/components/content/usersContent';
import { verifyAccesToken } from '@/helper/helper';
import { IProps } from '@/interface/interface';
import Layout from '@/layout/layout';
import { setAccessToken, setIsAuthenticate, setUser } from '@/redux/sclice/authSclice';
import { GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';

function Page({ name, isAuthenticate, accessToken, refreshToken, user }: IProps) {

    const dispatch = useDispatch();
    dispatch(setUser(user));
    dispatch(setAccessToken({ accessToken, refreshToken }));
    dispatch(setIsAuthenticate(true))

    return (
        <Layout>
            <UsersContent isAuthenticate={isAuthenticate} accessToken={accessToken} refreshToken={refreshToken} user={user} />
        </Layout>
    )
}

export default Page;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    try {

        //cookie[0].split("accessToken=")[1];
        // cookie[1].split("refreshToken=")[1];
        const accessToken = req.cookies[process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME as string];
        const refreshToken = req.cookies[process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME as string];

        if (!accessToken || !refreshToken) throw new Error("Unauthrozied");

        const { data, status } = await verifyAccesToken(accessToken, refreshToken);
        const isAuthenticate = data.msg;
        if (isAuthenticate) {
            return {
                props: {
                    name: 'DashBord',
                    user: data.data,
                    accessToken: data.accessToken,
                    isAuthenticate
                }
            }
        } else {
            return {
                redirect: {
                    destination: "/signIn",
                    permanent: false,
                },
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: "/signIn",
                permanent: false,
            },
        }

    }
};