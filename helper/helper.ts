import { IupdateClientPayload } from "@/components/froms/ClientUpdateFrom";
import { formikObj } from "@/components/froms/SignUpFrom";
import instance from "@/instance/axios.instance";
import { ISendOtpPayload } from "@/interface/interface";
import axios from "axios";
import jwtDecode from "jwt-decode";

/***_______  register  ________**/

export async function register(payload: formikObj) {
  try {
    const { data, status } = await instance.post("/clients/reg", {
      ...payload,
    });
    if (status !== 201) return Promise.reject("register faild try again!");
    return Promise.resolve("register successfull!");
  } catch (error: any) {
    return Promise.reject(error);
  }
}

/***_______     ________**/

export interface IpayloadLogin {
  userName: string;
  pw: string;
}

/***_______  Login   ________**/

export async function login(payload: IpayloadLogin) {
  try {
    const { data, status } = await instance.post(
      "/auth/login",
      { ...payload },
      { withCredentials: true }
    );
    if (status !== 200) return Promise.reject("Login Failed! Try Again");
    await axios.get("/api/cookie", {
      headers: {
        Authorization: `Bearer ${data.accessToken} ${data.refreshToken}`,
      },
    });
    return Promise.resolve(data);
  } catch (error: any) {
    return Promise.reject(error);
  }
}
/***_______  verifyAccesToken   ________**/

export async function verifyAccesToken(
  accessToken: string,
  refreshToken: string
) {
  try {
    const decoded: any = jwtDecode(accessToken); // just for decoded normal string

    const { data, status } = await instance.get(
      `/token/verify-token-client/${decoded._id}`,
      { headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` } }
    );
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
}

/***_______  signOut   ________**/

export async function signOut(id: string) {
  try {
    const { data, status } = await axios.get(`/api/signOut/${id}`);
    if (status !== 200) throw new Error("LogOut Faild!");
    return Promise.resolve(data);
  } catch (error: any) {
    console.log(error);
    return Promise.reject(error?.message);
  }
}

/***_______  sendOtp   ________**/

export async function sendOtp(payload: ISendOtpPayload) {
  try {
    const { data, status } = await instance.post("/reset-password/send-otp", {
      ...payload,
    });
    if (status !== 200) throw new Error("Can't send Otp!");
    return Promise.resolve(data);
  } catch (error: any) {
    return Promise.reject(error?.response?.data);
  }
}

/***_______  Verify OTP   ________**/

interface IVerifyOtpPayload {
  otp: string;
  email: string;
}

export async function verifyOtp(payload: IVerifyOtpPayload) {
  try {
    const { data, status } = await instance.post("/reset-password/verify-otp", {
      ...payload,
    });
    if (status !== 200) throw new Error("Invalid OTP!");
    return Promise.resolve(data);
  } catch (error: any) {
    if (error?.response.status === 400) {
      return Promise.reject(error?.response?.data);
    }
    return Promise.reject(error);
  }
}

/***_______     ________**/

interface IResetPayload {
  password: string;
  cPassword: string;
}

export async function resetPassword(
  payload: IResetPayload,
  id: string,
  token: string
) {
  try {
    const { data, status } = await instance.patch(
      `/reset-password/?email=${id}`,
      { ...payload },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (status !== 200) throw new Error("Invalid OTP!");
    return Promise.resolve(data);
  } catch (error: any) {
    if (error?.response.status === 400) {
      return Promise.reject(error?.response?.data);
    }
    return Promise.reject(error);
  }
}

/***_______     ________**/
interface Itokens {
  accessToken: string;
  refreshToken: string;
}

export async function updateClient(
  id: string,
  payload: IupdateClientPayload,
  tokens: Itokens
) {
  try {
    const { data, status } = await instance.patch(
      `/auth/client/${id}`,
      { ...payload },
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken} ${tokens.refreshToken}`,
        },
      }
    );
    if (status === 200 || status === 304) return data;
    throw new Error("Error was occure!");
  } catch (error: any) {
    if (error?.response.status === 400) {
      return error;
    }
    return error;
  }
}

export async function findOne(id: string, token: string, refreshToken: string) {
  try {
    if (!id) throw new Error();
    const { data, status } = await instance.get(`/auth/client/${id}`, {
      headers: { Authorization: `Bearer ${token} ${refreshToken}` },
    });
    if (status === 200 || status === 304) return data;
    throw new Error("Error was occure!");
  } catch (error: any) {
    console.log("hey react query..");
    return error;
  }
}

export async function findAllClient(accessToken: string, refreshToken: string) {
  const { data, status } = await instance.get(`/clients`, {
    headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` },
  });
  return data;
}

export interface IpayloadSendContactMessage {
  clientName: string;
  contactNumber: string;
  contactEmail: string;
  message: string;
}

export async function sendContactMessage(payload: IpayloadSendContactMessage) {
  try {
    const { data, status } = await instance.post("/contacts-details", {
      ...payload,
    });
    if (status !== 201)
      return Promise.reject("Can't send message! please try again!");
    return Promise.resolve("Message send successfull!");
  } catch (error: any) {
    return Promise.reject(error);
  }
}

export async function getAllContactInfo(
  accessToken: string,
  refreshToken: string
) {
  const { data, status } = await instance.get("/contacts-details", {
    headers: {
      Authorization: `Bearer ${accessToken} ${refreshToken}`,
    },
  });
  return data;
}
export async function deleteContactMsg(
  id: string,
  token: { accessToken: string; refreshToken: string }
) {
  try {
    if (!token.accessToken || !token.refreshToken)
      throw new Error("Bad request!");
    const { data, status } = await instance.delete(`/contacts-details/${id}`, {
      headers: {
        Authorization: `Bearer ${token.accessToken} ${token.refreshToken}`,
      },
    });
    if (status !== 200)
      return Promise.reject("Can't delete message! please try again!");
    return data;
  } catch (error: any) {
    return null;
  }
}
