import { createSlice } from "@reduxjs/toolkit";

interface IClientState {
  showSideBar: boolean;
  showDeskTopSidebar: boolean;
  showProfileInfo: boolean;
  from: {
    account: boolean;
    blog: boolean;
  };
}

export interface IState {
  uiSclice: {
    showSideBar: boolean;
    showDeskTopSidebar: boolean;
    showProfileInfo: boolean;
  };
}

const initialState: IClientState = {
  showSideBar: false,
  showDeskTopSidebar: false,
  showProfileInfo: false,
  from: {
    account: true,
    blog: false,
  },
};
const uiSclice = createSlice({
  name: "uiSclice",
  initialState,
  reducers: {
    setShowSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },
    setShowDeskTopSidebar: (state) => {
      state.showDeskTopSidebar = !state.showDeskTopSidebar;
    },
    setShowProfileInfo: (state) => {
      state.showProfileInfo = !state.showProfileInfo;
    },
    setACtiveBlogFrom: (state, { payload }) => {
      state.from.blog = payload;
      state.from.account = false;
    },
    setACtiveAccountFrom: (state, { payload }) => {
      state.from.account = payload;
      state.from.blog = false;
    },
  },
});

export const {
  setShowSideBar,
  setShowDeskTopSidebar,
  setShowProfileInfo,
  setACtiveAccountFrom,
  setACtiveBlogFrom,
} = uiSclice.actions;
export default uiSclice.reducer;
