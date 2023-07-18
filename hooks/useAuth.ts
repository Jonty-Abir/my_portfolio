import { verifyAccesToken } from "@/helper/helper";
import axios from "axios";
import { useEffect, useState } from "react";

interface Iuser {
    _id: string;
    firstName: string;
    lastName: string;
    number: string;
    email: string;
    avatar: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
};

interface IObj {
    msg: true;
    accessToken: string;
    refreshToken: string;
    data: Iuser;
};

function useAuth() {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(false);


    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await axios.get("/api/cookie");
                const cookie = response.data.cookie;
                if (!cookie[process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME as string] || !cookie[process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME as string]) throw new Error();
                const { data, status } = await verifyAccesToken(cookie[process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME as string], cookie[process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME as string]);
                if (status !== 200) throw new Error();

                setLoading(false);
                setError(false);
                setData(data);
            } catch (err) {
                setLoading(false);
                setError(true);
                setData(false);
            }
        })();
    }, []);
    return { isLoading, error, data };
}

export { useAuth };

