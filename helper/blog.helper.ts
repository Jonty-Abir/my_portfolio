import { ICreatePostPayload } from "@/components/froms/blogFrom";
import instance from "@/instance/axios.instance";

export async function findAblog(
  id: any,
  accessToken: string,
  refreshToken: string
) {
  try {
    const { data, status } = await instance.get(`/blogs/${id}`, {
      headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` },
    });
    if (status !== 200) throw new Error();
    return data;
  } catch (error) {
    // console.log(error);
    return null;
  }
}

export async function findAllPost(accessToken?: string, refreshToken?: string) {
  try {
    const { data, status } = await instance.get(`/blogs`, {
      headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` },
    });
    if (status !== 200) throw new Error("custom msg");
    return data;
  } catch (error) {
    // console.log(error);
    return null;
  }
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

interface Itokens {
  accessToken: string;
  refreshToken: string;
}

export async function createPost(payload: ICreatePostPayload, tokens: Itokens) {
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
