import { postPagination } from "@/helper/blog.helper";
import { useEffect, useState } from "react";

// interface IAuthor {
//   name: string;
//   img: string;
//   designation: string;
//   _id: string;
// }

// interface IPost {
//   author: IAuthor;
//   name: string;
//   img: string;
//   category: string;
//   createdAt: string;
//   description: string;
//   published: string;
//   subtitle: string;
//   title: string;
//   _id: number;
// }

// interface IRes {
//   blogs: IPost[];
//   totalLength: number;
// }
export function useBlogs(
  accessToken: string,
  refreshToken: string,
  pageNo: number,
  limit: number
) {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    postPagination(accessToken, accessToken, pageNo, limit)
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pageNo]);
  return { isLoading, isError, data };
}
