// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const [type, accessToken, refreshToken]: string[] =
      req.headers.authorization?.split(" ") ?? [];
    if (!accessToken || !refreshToken) throw new Error("token not found!");

    res.setHeader("Set-Cookie", [
      `${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}=${accessToken}; Max-Age=${
        1000 * 60 * 60 * 24 * 30
      }; expires=${1000 * 60 * 60 * 24 * 30}; path=/;  HttpOnly;`,
      `${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}=${refreshToken}; Max-Age=${
        1000 * 60 * 60 * 24 * 30
      }; expires=${1000 * 60 * 60 * 24 * 30}; path=/; HttpOnly;`,
      // Add more cookies here if needed
    ]);
    // res.setHeader(
    //     'Set-Cookie',
    //     serializeCookie(process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME as string, accessToken, {
    //         httpOnly: true,
    //         path: '/',
    //         expires: 1000 * 60 * 60 * 24 * 30,
    //     })
    // );
    // res.setHeader(
    //     'Set-Cookie',
    //     serializeCookie(process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME as string, refreshToken, {
    //         httpOnly: true,
    //         path: '/',
    //         expires: 1000 * 60 * 60 * 24 * 30,
    //     })
    // );
    res.status(200).json({ msg: "signIn Successfull.." });
  } catch (error) {
    res.status(400).json({ msg: "falid try again!" });
  }
}
