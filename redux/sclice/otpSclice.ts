import { createSlice } from "@reduxjs/toolkit";

interface IClientState {
  hashOtp: string;
  userName: string;
  resetPwToken: string
}

const initialState: IClientState = {
  hashOtp: "",
  userName: ",",
  resetPwToken:"",
};
const otpSclice = createSlice({
  name: "otpSclice",
  initialState,
  reducers: {
    setHashOtp: (state, { payload }) => {
      state.hashOtp = payload;
    },
    setUserName: (state, { payload }) => {
      state.userName = payload;
    },
    setResetToken: (state, { payload }) => {
      state.resetPwToken = payload;
    },
  },
});

export const { setHashOtp, setUserName, setResetToken } = otpSclice.actions;
export default otpSclice.reducer;
