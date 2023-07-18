import instance from '@/instance/axios.instance';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const accessTokenName = process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME as string;
    const refreshTokenname = process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME as string;
    try {
        const { id } = req.query;
        const accessToken = req.cookies[accessTokenName];
        const refreshToken = req.cookies[refreshTokenname];
        const { data, status } = await instance.delete(`/auth/signOut/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken} ${refreshToken}`
            }
        });
        if (status !== 200) throw new Error("LogOut Faild!");

        /* res.setHeader("Set-Cookie", cookie.serialize("accessToken", "", {
             httpOnly: true,
             expires: new Date(0),
             path: "/"
         })); */


        res.setHeader("Set-Cookie", [
            `${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}=; expires=${new Date(0)}; path=/;`,
            `${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}=; expires=${new Date(0)}; path=/;`,
            // Add more cookies here if needed
        ]);
        res.status(200).json({ msg: "SignOut Successfull..", data });
    } catch (error: any) {
        res.status(500).json({ error: error?.message, msg: "SingOut Faild!" });
    }
}
