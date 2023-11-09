import { findAllPost } from "@/helper/blog.helper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Iblog {
  isLoading: boolean;
  isError: boolean;
  blogs: [];
  blog: any
}

const initialState: Iblog = {
  isError: false,
  isLoading: false,
  blogs: [],
  blog: null,
};

/*==============  ================*/

export const getAllBlogs = createAsyncThunk("all_blogs", async () => {
  const result = await findAllPost();
  return result;
});

const blogSlice = createSlice({
  name: "blog_slice",
  initialState,
  reducers: {
    setBlog: (state, { payload }) => {
      state.blogs = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBlogs.rejected, (state) => {
      state.isError = true;
      state.blogs = [];
      state.isLoading = false;
    });
    builder.addCase(getAllBlogs.fulfilled, (state, { payload }) => {
      state.blogs = payload;
      state.isLoading = false;
    });
  },
});
export const {setBlog}= blogSlice.actions;
export default blogSlice.reducer;
