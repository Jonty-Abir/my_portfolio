import { createSlice } from "@reduxjs/toolkit";

export interface Iuser {
  _id: string;
  role: string;
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  avatar: string;
  isValid?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface IClientState {
  isAuthenticated: boolean;
  isActive: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user: Iuser | null;
}

const initialState: IClientState = {
  isAuthenticated: false,
  isActive: false,
  accessToken: null,
  refreshToken: null,
  user: null,
};

interface ITokenPayload {
  payload: {
    accessToken: string;
    refreshToken: string;
  };
}

const authSclice = createSlice({
  name: "authSclice",
  initialState,
  reducers: {
    setIsAuthenticate: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
    setIsActive: (state, { payload }) => {
      state.isActive = payload;
    },
    setAccessToken: (state, { payload }: ITokenPayload) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setIsAuthenticate, setAccessToken, setIsActive, setUser } =
  authSclice.actions;
export default authSclice.reducer;
