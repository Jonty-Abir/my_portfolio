import { useAuth } from '@/hooks/useAuth';
import Layout from '@/layout/layout';
import { setAccessToken, setIsAuthenticate, setUser } from '@/redux/sclice/authSclice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';


function Page() {
    const router = useRouter();
    const disPatch = useDispatch();
    const { isLoading, data, error } = useAuth();
    if (data && !isLoading && !error) {
        //@ts-ignore
        const isAuthenticate = data.msg;
        //@ts-ignore
        const user = data.data;
        //@ts-ignore
        const accessToken = data.accessToken;
        //@ts-ignore
        const refreshToken = data.refreshToken;
        disPatch(setUser(user));
        disPatch(setAccessToken({ accessToken, refreshToken }));
        disPatch(setIsAuthenticate(isAuthenticate))
    }
    if (error && !isLoading && !data) {
        router.push("/signIn");
        return <h2 className='isError'>Something went wrong!</h2>
    }
    if (isLoading) {
        return <h2 className='loading'>Loading...</h2>
    }
    return (
        <Layout>
            <h2 className=' text-2xl text-center'>This service Comming soon!</h2>
        </Layout>
    )
}

export default Page