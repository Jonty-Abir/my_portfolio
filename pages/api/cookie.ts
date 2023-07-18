// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    // console.log(process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME, process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME);
    res.status(200).json({ cookie: req.cookies })
}
