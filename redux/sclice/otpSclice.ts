import { createSlice } from "@reduxjs/toolkit";

interface IClientState {
  hashOtp: string;
  userName: string;
}

const initialState: IClientState = {
  hashOtp: "",
  userName: ",",
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
  },
});

export const { setHashOtp, setUserName } = otpSclice.actions;
export default otpSclice.reducer;
