import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}`,
  timeout: 10000,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

/***_______  Axios Interceptors   ________**/
instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const originalRequest = err?.config;
    if (
      err.response?.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const [type, accessToken, refreshToken] =
          originalRequest.headers?.Authorization?.split(" ") ?? [];
          console.log(refreshToken)
        const { data, status } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/auth/auto-login`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` },
          }
        );
        if (status !== 200)
          throw new Error("Error was occure from axios interceptors :)");
        return instance.request(originalRequest);
      } catch (err: any) {
        console.log(`${err}! from axios interceptors :)`);
        // return err;
      }
    }
    throw err;
  }
);
export default instance;
