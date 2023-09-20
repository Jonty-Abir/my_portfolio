import authSclice from "@/redux/sclice/authSclice";
import blogSlice from "@/redux/sclice/blogSlice";
import uiSclice from "@/redux/sclice/clientSclice";
import otpSclice from "@/redux/sclice/otpSclice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: { uiSclice, authSclice, otpSclice, blogSlice },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
