import uiSclice from "@/redux/sclice/clientSclice";
import { configureStore } from "@reduxjs/toolkit";
import authSclice from "./sclice/authSclice";
import otpSclice from "./sclice/otpSclice";

export const store = configureStore({
  reducer: { uiSclice, authSclice, otpSclice },
});
export type RootState = ReturnType<typeof store.getState>;
