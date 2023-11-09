import { ICreatePostPayload } from "@/components/froms/blogFrom";
import instance from "@/instance/axios.instance";
import { IComment } from "@/interface/interface";

export async function findSingleBlog(
  id: any,
  accessToken: string,
  refreshToken: string
) {
  const { data, status } = await instance.get(`/blogs/${id}`, {
    headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` },
  });
  return data;
}

export async function findAllPost(accessToken?: string, refreshToken?: string) {
  const { data, status } = await instance.get(`/blogs`, {
    headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` },
  });
  return data;
}

export async function postPagination(
  accessToken: string,
  refreshToken: string,
  pageNo: number,
  limits: number
) {
  try {
    const { data, status } = await instance.get(
      `blogs/pagination?page=${pageNo}&limit=${limits}`,
      {
        headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` },
      }
    );
    // status !== 200
    if (status !== 200) throw new Error("Bad Request");
    return Promise.resolve(data);
  } catch (error: any) {
    // console.log(error);
    return Promise.reject(error?.message);
  }
}

interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export async function createPost(payload: ICreatePostPayload, tokens: ITokens) {
  try {
    const { data, status } = await instance.post(
      `/blogs`,
      { ...payload },
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken} ${tokens.refreshToken}`,
        },
      }
    );
    if (status === 201) return data;
    throw new Error("Error was occure!");
  } catch (error: any) {
    if (error?.response.status === 400) {
      return error;
    }
    return error;
  }
}

/*==============Comments================*/

export async function getAllComments({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  const { data, status } = await instance.get("/comment", {
    headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` },
  });
  return data?.comments as IComment[];
}

export async function getComment({
  accessToken,
  id,
  refreshToken,
}: {
  refreshToken: string;
  accessToken: string;
  id: any;
}) {
  const { data, status } = await instance.get(`/comment/${id}`, {
    headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` },
  });
  return data as [IComment];
}

export async function addComment({
  accessToken,
  refreshToken,
  payload,
}: {
  refreshToken: string;
  accessToken: string;
  payload: { body: string; userId: string; blogId: string };
}) {
  const { data, status } = await instance.post(
    `/comment/`,
    { ...payload },
    {
      headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` },
    }
  );
  return data;
}

export async function addReply({
  accessToken,
  refreshToken,
  payload,
}: {
  refreshToken: string | null;
  accessToken: string | null;
  payload: { body: string; userId: string | undefined; commentId: string };
}) {
  // console.log(payload, accessToken, refreshToken);
  const { data, status } = await instance.post(
    `/comment-reply`,
    { ...payload },
    { headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` } }
  );
  return data;
}

export async function addAndRemoveLikeForReply({
  userId,
  accessToken,
  refreshToken,
  replyId,
}: {
  userId: string;
  replyId: string;
  accessToken: string;
  refreshToken: string;
}) {
  const { data, status } = await instance.patch(
    `/comment-reply/likes`,
    { userId, replyId },
    { headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` } }
  );
  return data;
}

export async function addAndRemoveLikeForComment({
  userId,
  accessToken,
  refreshToken,
  commentId,
}: {
  userId: string;
  commentId: string;
  accessToken: string;
  refreshToken: string;
}) {
  const { data, status } = await instance.patch(
    `/comment/likes`,
    { userId, commentId },
    { headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` } }
  );
  return data;
}
